import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./components/MovieList";
import MovieData from "./MovieData.json";

//this is the root element that inserts the data into the MovieList
function App() {
  return (
    <div className="App container">
      <MovieList {...MovieData}></MovieList>
    </div>
  );
}

export default App;
