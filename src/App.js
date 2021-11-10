import image1 from './images/image (4).png'
import './App.css';
import Categories from './components/Header'

function App() {
  return (
    <div className="App">
      <img src={image1} alt="logo" className="topImg"/>
      <Categories />
    </div>
  );
}

export default App;
