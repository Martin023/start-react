import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Home from './components/home';
import Message from './components/Message'
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';

function App() {
  return (
    <div className="App">


      {/* //including greet function component */}
      {/* <Greet name='kelvin' hero='Batman'> <p>hello child prop </p></Greet>
      <Greet name='Brian' hero='Superman'><button>Press me</button></Greet>
      <Greet name='Vostle' hero='Spiderman'></Greet> */}
      {/*  or <Greet/> if there is no content btwn the tags */}

      {/* importing a class component */}
      {/* <Welcome name='Crazy' heroName ='Riddler'><p>Joker</p></Welcome> */}
      {/* <Message></Message> */}
      
      {/* <Home></Home> */}

      {/* <Counter/> */}

      {/* <FunctionClick></FunctionClick> */}

      <ClassClick/>
    </div>
  );
}

export default App;
