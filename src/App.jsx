import { RouterProvider } from "react-router-dom";
import router from './router';

function App() {
  console.log("object");
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
