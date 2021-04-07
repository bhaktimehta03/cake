
import React from 'react'

// class Category extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return (
//             <div class="col-12 col-sm-4  col-lg-2 " style={{ padding: "20px" }}>Category

//                 { <div class="  border" onClick()>
//                     <div class=" text-center description-text">
//                         <div>{this.props.categy.categoryId}</div>
//                         <div>{this.props.categy.categoryName}</div>
//                         <div>{this.props.categy.photo}</div>
//                         <div>{this.props.categy.tagLine}</div>
//                     </div>

//                 </div >}

//             </div >)
//     }
// }

function Category(props) {

    function ClickEvent() {
        console.log("i am in category click event", props.categy.categoryId);
    }

    console.log("hi1", props);
    return (
        <div class="col-12 col-sm-4  col-lg-2 " style={{ padding: "20px" }}>Category

            <div class="  border" onClick={ClickEvent}>
                <div class=" text-center description-text">
                    <div>{props.categy.categoryId}</div>
                    <div>{props.categy.categoryName}</div>
                    <div>{props.categy.photo}</div>
                    <div>{props.categy.tagLine}</div>
                </div>

            </div >

        </div >
    )
}

export default Category;
