import {Children, createContext, useContext, useState} from "react";

import {AnimatePresence, motion} from "framer-motion";
import "./Accardion.css";

const AccordionContext = createContext({});
const useAccordion = () => useContext(AccordionContext);

function Accordion({children, multiple, defaultIndex}) {
  const [activeIndex, setActiveIndex] = useState(
    multiple ? [defaultIndex] : defaultIndex
  );

  function onChangeIndex(index) {
    setActiveIndex((currentActiveIndex) => {
      if (!multiple) {
        return index === activeIndex ? -1 : index;
      }

      if (currentActiveIndex.includes(index)) {
        return currentActiveIndex.filter((i) => i !== index);
      }

      return currentActiveIndex.concat(index);
    });
  }

  return Children.map(children, (child, index) => {
    const isActive =
      multiple && Array.isArray(activeIndex)
        ? activeIndex.includes(index)
        : activeIndex === index;

    return (
      <AccordionContext.Provider value={{isActive, index, onChangeIndex}}>
        {child}
      </AccordionContext.Provider>
    );
  });
}

function AccordionItem({children}) {
  return <div className="accordion-item">{children}</div>;
}

function AccordionHeader({children}) {
  const {isActive, index, onChangeIndex} = useAccordion();

  return (
    <motion.h5
      className={`accordion-header ${isActive ? "active" : ""}`}
      onClick={() => onChangeIndex(index)}>
      <button
        className={`accordion-button ${isActive ? "" : "collapsed"}`}
        type="button">
        {children}
      </button>
    </motion.h5>
  );
}

function AccordionPanel({children}) {
  const {isActive} = useAccordion();

  return (
    <AnimatePresence initial={false}>
      {isActive && (
        <motion.div
          initial={{height: 0, overflow: "hidden"}}
          animate={{height: "auto"}}
          exit={{height: 0, overflow: "hidden"}}
          transition={{type: "spring", duration: 0.4, bounce: 0}}>
          <div className={`accordion-collapse `}>
            <div className="accordion-body">
              <p>{children}</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const AccordionBox = ({title = "", children}) => {
  return (
    <Accordion>
      <AccordionItem>
        <AccordionHeader>{title}</AccordionHeader>
        <AccordionPanel>{children}</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
export default AccordionBox;
