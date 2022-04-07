import "./css/App.css";
import Applications from "./components/Applications";
import Header from "./components/Header";

function App() {
  document.title = "iwoca | Application Portal";
  return (
    <div className="App">
      <Header />
      <Applications />
    </div>
  );
}

export default App;
