import Create from "./components/create";
import Read from "./components/read";
import Update from "./components/update";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col justify-center items-center h-fit border border-current m-28 p-10">
          <div className="flex flex-col justify-center items-center font-bold	text-5xl mb-20">
            CRUD Operation
          </div>
          <Routes>
            <Route path="/create" element={<Create />} />
            <Route path="/read" element={<Read />} />
            <Route path="/update" element={<Update />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
