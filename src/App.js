import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Home from './components/home';
import EventBind from './components/EventBind';
import Message from './components/Message'
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import InlineStyling from './components/InlineStyling';
import Form from './components/Form';
import LifecycleMount from './components/LifecycleMount';
import UpdatinglifecycleMethods from './components/UpdatinglifecycleMethods';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';

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

      {/* <ClassClick/>

      <Welcome></Welcome>
      <Home></Home> */}
      {/* <EventBind/> */}
      {/* parent and child component communication */}
      {/* <ParentComponent/> */}

      {/* <UserGreeting/> */}
      {/* <NameList/> */}

      {/* <Stylesheet></Stylesheet> */}
      {/* <InlineStyling/> */}
      {/* <Form/> */}
     {/* <UpdatinglifecycleMethods/>  */}
      {/* <FragmentDemo></FragmentDemo> */}


      <Table></Table>
    </div>
  );
}

export default App;
