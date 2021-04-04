import React from 'react'
import Testimonials from './Testimonials'



{/* <Testimony testi={item}></Testimony> */}
//

function Testimony(props){

    // cont MILAN = props.MILAN
console.log("my props=",props);
const item=props.testi;
    return (
        // <div></div>
        <div key={item.id}>
            <span>props.mybh={props.mybh}</span> 
            <span>VALUE OF A={props.miti.a}</span> 
                    <div className="row">
                        <div className="col-3">{item.image}</div>
                        <div className="col-9">
                    
                            <div className="row">{item.name}</div>
                            <div className="row">{item.ago}</div>
                            <div className="row">{item.ratings}</div>
                            <div className="row">{item.desc}</div>

                        </div>
                    </div>

                    
                               
                </div>
    )
}

export default Testimony;