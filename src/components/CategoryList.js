import React from 'react'
import axios from 'axios'
import Category from './Category.js'


class CategoryList extends React.Component {
    constructor(props) {
        super(props)

        this.state = { category: [], errorMsg: "" }
    }

    componentDidMount() {
        axios.get('/api/category.json')

            .then((response) => {
                this.setState({ category: response.data })
                console.log("data", response.data)
            })
            .catch((errorMsg) => {
                this.setState({ errorMsg: "error retriving data" })
            })
    }

    render() {
        const catgy = this.state.category;
        const callBack = this.props.updateCakeListBasedOnCatergorySeclection;
        return (
            <>
                <div>mummy={this.props.callBackFn}</div>
                <div className="row">
                    {
                        catgy && catgy.length ? catgy.map(
                            function (item) {
                                console.log("hi", item)
                                return (<Category categy={item} updateCakeListBasedOnCatergorySeclection={callBack}></Category>
                                )


                            }
                        ) : "No Data"
                    }
                    {
                        this.state.errorMsg ? <div>{this.state.errorMsg}</div> : null
                    }

                </div>
            </>
        )

    }
}

export default CategoryList;