import React, { Component } from 'react' 

class Welcome extends Component { 
    render() { 
    return(
        <div>
             <h1> Hi World! From a class {this.props.name} a.k.a {this.props.surname}</h1>
        </div> 
    )
    }
}

export default Welcome 