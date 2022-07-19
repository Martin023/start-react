import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      {/* //including greet function component */}
      <Greet></Greet>
      
      {/*  or <Greet/> if there is no content btwn the tags */}

      {/* importing a class component */}
      <Welcome></Welcome>
    </div>
  );
}

export default App;
