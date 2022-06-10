import GlobalStyle from "./styles/global";
import { ProductProvider } from "./providers/Products";
import { Home } from "./pages/Home";
import "./App.css";
import { Routes } from "../src/routes/";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ProductProvider>
        <Header />
      </ProductProvider>
      <Routes />
    </div>
  );
}

export default App;
