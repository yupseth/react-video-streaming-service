import "./App.css";
import LandingPageScreen from "./components/Landing-Page_SCREEN/LandingPageScreen";

function App() {
  const fetchData = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/24?api_key=7f9da03c80170cd7df2dbdfa5c492e89&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  fetchData();

  return (
    <div className="App">
      <LandingPageScreen></LandingPageScreen>
    </div>
  );
}

export default App;
