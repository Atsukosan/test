import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';
import Main from './Main';
import {useRef, useState} from "react"

function App() {
  const [name, setName] = useState("Саша")

  return (
    <div className="App">
      <div>
        <Nav/>
      </div>
      <div>
        <Header name={name}/>
        <Main setName={setName}/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
