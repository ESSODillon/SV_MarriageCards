import "./styles.css";
import SelectView from "./components/SelectView";

export default function App() {
  return (
    <div className="App">
      <div className="headers">
        <h1 className="SVFont">Stardew Valley</h1>
        <h2 className="SVFont">Marriage Cards</h2>
      </div>

      <SelectView />
    </div>
  );
}
