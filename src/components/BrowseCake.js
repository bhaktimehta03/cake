import React from 'react'
import CategoryListHooks from './CategoryListHooks.js'
import CakeList from './CakeList.js'
import reactDom from 'react-dom';
import CakeListHooks from './CakeListHooks.js';


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
            display = <CakeListHooks selectedCategory={this.state.selectedCategory} ></CakeListHooks>


        }

        return (<div>
            <CategoryListHooks updateCakeListBasedOnCatergorySeclection={this.updateCakeListBasedOnCatergorySeclection.bind(this)}></CategoryListHooks>
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