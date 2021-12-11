// This file will hold three images that work as buttons, which have on clicks that send over data to SelectView.js which lets you decide if you want to view Bachelors, Bachelorettes, or Both.

export default function Menu({ bachelors, bachelorettes, viewAll }) {
  return (
    <div className="content">
      <div className="menu">
        {/* Button that activates the Bachelors view function in SelectView.js */}
        <img
          className="menu_button"
          src={process.env.PUBLIC_URL + "/data/img/guys.png"}
          onClick={bachelors}
        />
        {/* Button that activates the Bachelorettes view function in SelectView.js */}
        <img
          className="menu_button"
          src={process.env.PUBLIC_URL + "/data/img/gals.png"}
          onClick={bachelorettes}
        />
        {/* Button that activates the View All function in SelectView.js */}
        <img
          className="menu_button"
          src={process.env.PUBLIC_URL + "/data/img/viewAll.png"}
          onClick={viewAll}
        />
      </div>
    </div>
  );
}
