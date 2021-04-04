import React from 'react'
import axios from 'axios'

class Cake extends React.Component{
    constructor(props){
        super(props)

        this.state={
            cake:[]
        }
    }

    componentDidMount(){
        axios.get('/api/cake.json')
        .then((response)=> this.setState({cake:response.data})
        )
        .catch()
    
    }

    render(){
        return <div>hi</div>
    }
}

export default Cake;