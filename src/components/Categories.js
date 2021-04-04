import React from 'react'

function Categories(props){
    console.log("hi1",props);
    return(
        <div>
            <div>hi</div>
            <div>{props.categy.categoryId}</div>
            <div>{props.categy.categoryName}</div>
            <div>{props.categy.startDate}</div>
            <div>{props.categy.endDate}</div>
            <div>{props.categy.photo}</div>
            <div>{props.categy.tagLine}</div>
            <div>{props.categy.featured}</div>
            <div>{props.categy.hidden}</div> 
        </div>
    )
}

export default Categories;
