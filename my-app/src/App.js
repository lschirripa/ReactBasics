import './App.css';
import React, { Component } from 'react';
import Greet from './components/Greet' 
import Welcome from './components/GreetClass';

function App() {
  return ( 
    <div className="App">
        <Greet name="lucho"/>
        <Greet><p>this is children props</p></Greet>
        <Welcome surname="dwt!" name="Luciano"> </Welcome>
    </div>
  );
}

export default App;

// class App extends Component{
//   render(){
//     return(
//       <div className="App">
//         <h1>AAAAA</h1>
//           <Greet name="lucho"/>
//       </div>
//     )
//   }
// }
// export default App;
