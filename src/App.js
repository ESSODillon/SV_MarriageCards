import "./styles.css";
import SelectView from "./components/SelectView";
import ViewAll from "./characters/ViewAll";

export default function App() {
  return (
    <div className="App">
      <div className="header">
        <img
          className="main_logo"
          src={process.env.PUBLIC_URL + "/data/img/main_logo.png"}
        />
      </div>

      <SelectView />
    </div>
  );
}

// TO DO LIST

// Get responsiveness to load when menu button is selected

// Pagination styling for selected

// Deployment

// Modal styling

// Animations for the view transitions (translateX)
