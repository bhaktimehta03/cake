import React from 'react'

function Cake(props) {
    console.log("poro", props);

    return (

        <div class="col-4 col-sm-4  col-lg-2 " style={{ padding: "20px" }}>Cakes

            <div class="  border" >
                <div class=" text-center description-text">
                    <div>cakeID {props.cake1.cakeId}</div>
                    <div>categoryID {props.cake1.CategoryId} </div>
                    <div>cakename {props.cake1.cakeName}</div>
                    <div>desc {props.cake1.desc}</div>
                </div>

            </div >

        </div >
    )
}


export default Cake;
