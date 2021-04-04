import React from 'react'
import ReactDOM from 'react-dom'

class BigPitch extends React.Component{
constructor(props){
super(props);
}
render(){
    return(
    <div>
    <img src="images/cake1.jpg" style={ {width:"10%"} }></img>
    <img src="images/cake2.jpg" style={ {width:"10%"} }></img>
    </div>)
}
}

export default BigPitch;