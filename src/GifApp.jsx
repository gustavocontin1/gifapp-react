import { useState } from "react"
import {AddCategory, GifGrid} from "./components"

const GifApp = () => {
    const [categories, setCategories] = useState([])

    const OnAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return
        setCategories([newCategory,...categories ])
    }
return (
    <>
    <h1>GifApp</h1>
    <AddCategory
    onNewCategory = {OnAddCategory}/>
    
    {categories.map(category => 
    <GifGrid 
    key={category}
    category={category}/>)}
    </>
)
}

export default GifApp