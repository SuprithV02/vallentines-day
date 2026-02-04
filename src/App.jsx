import { Route, Routes } from "react-router-dom";
import Scene from "./components/Envelope/Scene";
import LoveLetter from "./components/LoveLetter/LoveLetter";
import LoveLetterGuard from "./guards/LoveLetterGaurd";

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Routes>
        <Route path="/" element={<Scene />} />
        <Route
          path="/loveLetter"
          element={
            <LoveLetterGuard>
              <LoveLetter />
            </LoveLetterGuard>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
