
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Category from './Category'

function CatgoryListHooks(props) {
    const [category, setCategory] = useState([])
    const [error, setError] = useState("")

    useEffect(() => {
        axios.get('/api/category.json')
            .then((response) => setCategory(response.data))
    }, []

    )
    return (<>
        <div>hi..   i am in CategoryListHooks</div>
        {
            category && category.length ? category.map(
                (x) => {

                    return (<>
                        {/* <div>{JSON.stringify(x)}</div> */}
                        <Category categy={{
                            "categoryId": x.categoryId,
                            "categoryName": x.categoryName,
                            "photo": x.photo,
                            "tagLine": x.tagLine
                        }} ></Category>
                    </>
                    );
                }
            ) : null
        }
    </>)
}

export default CatgoryListHooks;