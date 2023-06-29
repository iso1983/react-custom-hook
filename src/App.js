import "./App.css";
import { useToggle } from "./useSwitchVisibility";

function App() {
  const [visible, toggle] = useToggle(false);

  return (
    <div className="App">
      <button onClick={toggle}> {visible ? "Hide" : "Show"}</button>
      <br />
      <br />
      {visible && "Hello"}
    </div>
  );
}

export default App;
