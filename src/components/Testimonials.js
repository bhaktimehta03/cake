import React from 'react'
import axios from 'axios'
import Testimony from './Testimony';



class Testimonials extends React.Component{
    constructor(props){
        super(props)

        this.state={
            test:[], errorMsg:""
    }

    
    }

    componentDidMount() {
        console.log("calling get");
        axios.get('/api/testimony.json')
        .then(response => {
            console.log("in then: " + response)
            this.setState({test:response.data})
        })
        .catch(function  (errorMsg) {
            console.log("in then: " + errorMsg);
            this.setState({errorMsg:"error retriving data"});
        })
        
       
}

    

    render(){
        const {errorMsg}=this.state
        const milan = this.state.test;
        return <div>List of Testimonial 
            {

             milan && milan.length? milan.map(item => 
                    {
                     console.log("bhakti:",item);
                         return  <Testimony  mybh="yahoo" miti={ {a:420} } testi={item}></Testimony>
                    }
                 )       :null
               
            }
            {
                errorMsg ? <div>{errorMsg}</div> : null
            }
        </div>
    }
}



export default Testimonials;