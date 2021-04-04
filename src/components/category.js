import React from 'react'
import axios from 'axios'
import Categories from './Categories.js'


class Category extends React.Component
{
    constructor(props){
        super(props)
            
        this.state={category:[],errorMsg:""}
    }

    componentDidMount(){
        axios.get('/api/category.json')

        .then( (response) =>
            {
                this.setState({category:response.data})        
                console.log("data" ,response.data)
            })
        .catch((errorMsg) =>
            {
                this.setState({errorMsg:"error retriving data"})
            } )
    }

    render(){
        const catgy=this.state.category;
        return (
            <div>Categories go here
            {
                catgy && catgy.length? catgy.map(
                   function(item){
                       console.log("hi",item)
                       return  ( <Categories categy={item}></Categories>)
                       
                       
                   }
               ):"No Data"               
            }
            {
                this.state.errorMsg? <div>{this.state.errorMsg}</div>:null
            }
                
            </div>
        )

    }
}

export default Category;