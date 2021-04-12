import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Cake from './Cake.js'


function CakeListHooks(props) {
    const [cake, setCake] = useState([]);
    const [error, setError] = useState(false);
    const [tmpVar, setTmpVar] = useState('');

    useEffect(() =>
        console.log("hib")

    );
    useEffect(() => {
        axios.get('/api/cake.json')
            .then((response) => {
                setCake(response.data);
                setError(false);
                // console.log("cake=", cake);
                // console.log("response.data=", response.data);           
            })
            .catch((error) => { setError(true) }
            )
    }, []
    );


    return (<>
        {
            console.log("jsonstringify=", cake)}
        <div>
            {/* tmpVar={tmpVar} */}
            <input type="text" value={tmpVar} onChange={(e) => { setTmpVar(e.target.value) }}></input>
            <div>showing cakes for category : {props.selectedCategory}</div>
            {<div className="row">

                {
                    cake && cake.length ? cake.map(
                        function (item) {
                            console.log("cakes", cake);
                            console.log("item", item);
                            //return <div> {item.cakeId}</div>
                            return (
                                <>

                                    <Cake cake1={item}></Cake>
                                </>
                            );
                        }

                    ) : null
                }
                {
                    error ? <div>error :Err retriving message</div> : ""
                }
            </div>}
        </div>
        hi</>)
}



export default CakeListHooks;