import AppRouter from "./components/AppRouter";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";




import "./style/index.scss";


function App() {
  return (
    <div className="App">
      <Header />
         <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
