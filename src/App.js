import GlobalStyle from "./styles/global";
import { ProductProvider } from "./providers/Products";
import { Home } from "./pages/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ProductProvider>
        <Home />
      </ProductProvider>
    </div>
  );
}

export default App;
