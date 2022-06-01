function Button(props) {

	return (
    <button onClick={props.onClickFunction}>
      +1 
    </button>
  );
}

function Display(props){
  return(
  <div>{props.message}</div>
  );
}

function App(){
  // or this [<Button />, <Display />],
  //or if i dont want a parent div: <> and </> (empty tag) -> refers to <React.Fragment> and </React.Fragment>
  const [counter, setCounter] = useState(42);
  const incrementCounter= () => setCounter(counter+1);
  return(
    <div> 
      <Button onClickFunction= {incrementCounter}/>
      <Display message={counter}/>
    </div>
    );
}

ReactDOM.render(
  <App />,
  document.getElementById('mountNode'),
);