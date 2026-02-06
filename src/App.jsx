import { Route, Routes } from "react-router-dom";
import Scene from "./components/Envelope/Scene";
import LoveLetter from "./components/LoveLetter/LoveLetter";
import LoveLetterGuard from "./guards/LoveLetterGaurd";
import LoveLetterContinue from "./components/LoveLetter/LoveLetterContinue";
import LoveLetter2Guard from "./guards/LoveLetter2Gaurd";

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
        <Route
          path="/loveLetter2"
          element={
            <LoveLetter2Guard>
              <LoveLetterContinue />
            </LoveLetter2Guard>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
