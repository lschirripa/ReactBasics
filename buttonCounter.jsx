function Button() {
  const [counter, setCounter] = useState(5);
  
  const handleClick= () => setCounter(counter*2);
  
	return (
    <button onClick={handleClick}>
      {counter}
    </button>
  )
}

function Display(){
  return(
  <div>...</div>
  )
}

function App(){
  // or this [<Button />, <Display />],
  //or if i dont want a parent div: <> and </> (empty tag) -> refers to <React.Fragment> and </React.Fragment>
  return(
    <div> 
      <Button />
      <Display />
    </div>
    );
}

ReactDOM.render(
  <App />,
  document.getElementById('mountNode'),
);