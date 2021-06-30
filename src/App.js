import "./App.css";
import Converter from "./components/Converter";
import ConverterF from "./components/ConverterF";

function App() {
  return (
    <div className="App">
      <h1>Temperature Converter</h1>
      <Converter />
      <br />
      <ConverterF />
    </div>
  );
}

export default App;
