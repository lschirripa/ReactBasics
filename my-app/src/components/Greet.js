import React from 'react'

// function Greet() {
//     return <h1> Hey! hi world! </h1>
// }

const Greet = (props) => 
{
return (
<div>
<h1>Hey {props.name}</h1>
{props.children}
</div>
)
}

export default Greet