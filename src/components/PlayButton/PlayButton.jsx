import { MotionConfig, motion, useMotionValue } from "framer-motion";
import { Suspense, useState } from "react";
import useMeasure from "react-use-measure";
import { transition } from "@/settings/gameButtonSettings";
import { Shapes } from "components/Shapes/Shapes";

const PlayButton = ({ url, single = false, nameClass }) => {
  const [ref, bounds] = useMeasure({ scroll: false });
  const [isHover, setIsHover] = useState(false);
  const [isPress, setIsPress] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const resetMousePosition = () => {
    mouseX.set(0);
    mouseY.set(0);
  };
  const presVariants = single ? 0.95 : 1.05;
  return (
    <MotionConfig transition={transition} className={nameClass}>
      <motion.a
        href={url}
        target="_blank"
        className={
          single ? `buttonPlay ${nameClass}` : `buttonPlaySingle ${nameClass}`
        }
        ref={ref}
        initial={false}
        animate={isHover ? "hover" : "rest"}
        whileTap="press"
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.1 },
          press: { scale: presVariants },
        }}
        onHoverStart={() => {
          resetMousePosition();
          setIsHover(true);
        }}
        onHoverEnd={() => {
          resetMousePosition();
          setIsHover(false);
        }}
        onTapStart={() => setIsPress(true)}
        onTap={() => setIsPress(false)}
        onTapCancel={() => setIsPress(false)}
        onPointerMove={(e) => {
          mouseX.set(e.clientX - bounds.x - bounds.width / 2);
          mouseY.set(e.clientY - bounds.y - bounds.height / 2);
        }}
      >
        <motion.div
          className="shapesPlay"
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 1 },
          }}
        >
          <div className="pink blush" />
          <div className="blue blush" />
          <div className="containerr">
            <Suspense fallback={null}>
              <Shapes
                isHover={isHover}
                isPress={isPress}
                mouseX={mouseX}
                mouseY={mouseY}
              />
            </Suspense>
          </div>
        </motion.div>
        <motion.div
          variants={{
            hover: { scale: 1.1 },
            press: { scale: 0.85 },
          }}
          className="labelPlay"
        >
          Play Demo
        </motion.div>
      </motion.a>
    </MotionConfig>
  );
};
export default PlayButton;
