import "./Dialog.css";

const Dialog = ({ setDialog }) => {
  console.log("setDialog :", setDialog);
  return (
    <>
      <button
        type="button"
        className="btn btn-secondary"
        data-dismiss="modal"
        onClick={() => {
          setDialog(false);
        }}>
        Close
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          setDialog(true);
          localStorage.setItem("isDialog", true);
        }}>
        Save changes
      </button>
    </>
  );
};
export default Dialog;
