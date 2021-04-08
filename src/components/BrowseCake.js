import React from 'react'
import CategoryList from './CategoryList.js'
import CakeList from './CakeList.js'
import reactDom from 'react-dom';


class BrowseCake extends React.Component {
    constructor(props) {
        super(props);

        this.state = { isHidden: 0, selectedCategory: 3, }
    }

    updateCakeListBasedOnCatergorySeclection(inp) {
        console.log(" ca13", inp);
        this.setState({ selectedCategory: inp })
    }

    render() {
        //selectedCategory = 2;
        let display;
        if (!this.state.isHidden) {
            display = <CakeList selectedCategory={this.state.selectedCategory} ></CakeList>


        }

        return (<div>
            <CategoryList updateCakeListBasedOnCatergorySeclection={this.updateCakeListBasedOnCatergorySeclection.bind(this)}></CategoryList>
            {display
            }</div>)

    }
}

// function BrowseCake() {
//     return (
//         <div>
//             <CategoryList></CategoryList>
//             <CakeList></CakeList>
//         </div>
//     )
// }


export default BrowseCake;