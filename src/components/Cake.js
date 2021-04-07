import React from 'react'

function Cake(props) {
    console.log("poro", props);
    return (< div >
        cakes
        < div > {props.cake1.cakeId}</div >
    </div >)
}


export default Cake;
