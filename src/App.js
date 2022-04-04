import { BrowserRouter as Router} from
 'react-router-dom';
import Feature from './components/Feature';
import { GlobalStyle } from "./components/globalStyle";
import Hero from "./components/Hero";
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import Footer from './components/Footer';

 function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Choose your Favourite' data={productData}/>
      <Feature />
      <Products heading='Choose your Favourite Sweets' data={productDataTwo}/>
      <Footer />
    </Router>
  );
}

export default App;
