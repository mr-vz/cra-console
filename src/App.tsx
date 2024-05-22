import './App.css';
import Accordion from './components/Accordion/Accordion';
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";

// function hello() {
//   debugger
//   console.log('hello!')
// }
//hello()

//function declaration
function App() {
  //something useful
  //debugger
  // обязана вернуть JSX - htmlуподобный javascript
  return (
    <div>
      <PageTitle title={"This is APP component"}/>
        <PageTitle title={"My friends"}/>
      Article 1
      <Rating value={3}/>
      <Accordion titleValue={"Menu"} collapsed={true}/>
        <Accordion titleValue={"Users"} collapsed={false}/>
        <Rating value={0}/>
        <Rating value={1}/>
        <Rating value={2}/>
        <Rating value={3}/>
        <Rating value={4}/>
        <Rating value={5}/>
      Article 2
        <OnOff value={true}/>
        <p>Lorem ipsum dolor</p>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
  return <h1>{props.title}</h1>
}


export default App;
