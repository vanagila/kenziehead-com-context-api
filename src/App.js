import GlobalStyle from "./styles/global";
import "./App.css";
import { Routes } from "../src/routes/";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Routes />
    </div>
  );
}

export default App;
