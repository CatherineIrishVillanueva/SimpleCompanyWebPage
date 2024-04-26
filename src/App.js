import './App.css';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Mission from './components/Mission';
import Vision from './components/Vision';
import News from './components/NewsLetter';
import Cards from './components/Cards';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Content />
      <Mission />
      <Vision />
      <News />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
