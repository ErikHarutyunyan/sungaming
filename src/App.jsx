import { RouterProvider } from "react-router-dom";
import router from "./router";
import { useState } from "react";
import OnboardModal from "./components/OnboardModal/OnboardModal";
import Dialog from "./components/Dialog/Dialog";

const dialogStatus = localStorage.getItem("isDialog");

function App() {
  const [isDialog, setDialog] = useState(dialogStatus);

  return (
    <>
      {isDialog !== null && isDialog ? (
        <RouterProvider router={router} />
      ) : (
        <OnboardModal open={true}>
          <Dialog setDialog={setDialog} />
        </OnboardModal>
      )}
    </>
  );
}

export default App;
