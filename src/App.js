import earth from './assets/earth.jpg';
import './App.css';
import TextImg from "./components/TextImg/TextImg";

function App() {
    const txt = <h1>Привет мир!</h1>;

  return (
      <div className={"App"}>
          {txt}
        <TextImg/>
          <img src={earth} alt={"Earth"}/>
      </div>
  );
}

export default App;
