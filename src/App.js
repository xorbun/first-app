import logo from './logo.svg';
import './App.css';
import ButtonComponent from './component/ButtonComponent';
import ImageComponent from './component/ImageComponent';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ciao
        </p>
        <ButtonComponent mess="acquista ora"/>
        <ImageComponent link="https://m.media-amazon.com/images/I/71jqs5wUgxL._AC_UF350,350_QL80_.jpg" alt="iphone"/>
      </header>
    </div>
  );
}

export default App;
