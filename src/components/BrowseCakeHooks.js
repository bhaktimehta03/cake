import React, { useState, useEffect } from 'react'
import CategoryListHooks from './CategoryListHooks.js'
import CakeListHooks from './CakeListHooks.js'

function BrowseCakeHooks() {

    const [selectedCategory, setSelectCategory] = useState(0);
    const [isHiddden, setIsHidden] = useState(false);

    let display;
    if (!isHiddden) {
        display = <CakeListHooks></CakeListHooks>
    }

    return (
        <>
            <CategoryListHooks></CategoryListHooks>
            {display}
        </>
    )

}

export default BrowseCakeHooks