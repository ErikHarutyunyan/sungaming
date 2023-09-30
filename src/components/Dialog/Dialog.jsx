import "./Dialog.css";

const Dialog = ({ setDialog }) => {
  return (
    <>
      <div className="checkAge-form">
        <h3>
          The SunGaming content is designed for individuals aged 18 years or
          above.
        </h3>
        <p>
          Please verify that you fulfill the legal age criteria in order to
          proceed.
        </p>
        <button
          type="button"
          className="confirmAge"
          onClick={() => {
            setDialog(true);
            localStorage.setItem("isDialog", true);
          }}>
          I'm 18 or older
        </button>
        <button
          className="rejectAge"
          onClick={() => {
            setDialog(false);
            history.back();
          }}>
          No, go back.
        </button>
      </div>
    </>
  );
};
export default Dialog;
