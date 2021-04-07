import React from 'react'
import axios from 'axios'
import Cake from './Cake.js'

class CakeList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            cake: [], errorMsg: ""
        }
    }

    componentDidMount() {
        axios.get('/api/cake.json')
            .then((response) => this.setState({ cake: response.data })
            )
            .catch((errorMsg) => this.setState({ errorMsg: "error retriving data" }))

    }

    render() {
        const cake1 = this.state.cake;
        console.log("cake1", this.state.cake)
        return (
            <div className="row">

                {
                    cake1 && cake1.length ? cake1.map(
                        function (item) {
                            console.log("cake2", cake1);
                            console.log("item", item);
                            //return <div> {item.cakeId}</div>
                            return (<Cake cake1={item}></Cake>);
                        }

                    ) : null
                }
            </div>

        )

    }
}

export default CakeList;