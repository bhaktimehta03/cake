import React from 'react'

function Category(props) {
    console.log("hi1", props);
    return (
        <div class="col-12 col-sm-4  col-lg-2 " style={{ padding: "20px" }}>Category

            <div class="  border" >
                <div class=" text-center description-text">
                    <div>{props.categy.categoryId}</div>
                    <div>{props.categy.categoryName}</div>
                    <div>{props.categy.photo}</div>
                    <div>{props.categy.tagLine}</div>
                </div>

            </div >
            {/* <div>{props.categy.categoryId}</div>
            <div>{props.categy.categoryName}</div>
            <div>{props.categy.startDate}</div>
            <div>{props.categy.endDate}</div> 
            <div>{props.categy.photo}</div>
            <div>{props.categy.tagLine}</div>
            <div>{props.categy.featured}</div>
            <div>{props.categy.hidden}</div>  */}
        </div >
    )
}

export default Category;
