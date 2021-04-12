import React from 'react'
import { Link } from "react-router-dom";
// import { Redirect } from 'react-router'

function Cake(props) {
    console.log("poro", props);

    function cakeDetailFn() {
        console.log("cake click");
        // return <Redirect to="/cake-details" push={true} />
    }

    return (

        <div class="col-4 col-sm-4  col-lg-2 " style={{ padding: "20px" }}>Cakes


            <Link to={"/cake-details?id=" + props.cake1.cakeId}>
                <div class="  border" onClick={cakeDetailFn}>
                    <div class=" text-center description-text">
                        <div>cakeID {props.cake1.cakeId}</div>
                        <div>categoryID {props.cake1.CategoryId} </div>
                        <div>cakename {props.cake1.cakeName}</div>
                        <div>desc {props.cake1.desc}</div>
                    </div>

                </div >
            </Link>

        </div >
    )
}


export default Cake;
