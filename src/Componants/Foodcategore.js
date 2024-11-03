import React from 'react'
import { Rotate } from "react-reveal";
const Foodcategore = ({filtaringFood , food} ) => {
    const onFilter = (foodCat) => {
        filtaringFood(foodCat)
    }
  return (
    <div className=" mt-10">
<Rotate>
    <button  onClick={food}  className="rounded-lg p-3 text-zinc-500 ml-5  border-2 border-solid border-amber-800  hover:bg-amber-800 hover:text-white hover:shadow-negmshadow ">الكل</button>
    <button onClick={()=> onFilter("فطار")} className="rounded-lg p-3 text-zinc-500 ml-5  border-2 border-solid border-amber-800 hover:bg-amber-800 hover:text-white hover:shadow-negmshadow ">فطار</button>
    <button onClick={()=> onFilter("غدا")} className="rounded-lg p-3 text-zinc-500 ml-5  border-2 border-solid border-amber-800 hover:bg-amber-800 hover:text-white hover:shadow-negmshadow ">غدا</button>
    <button className="rounded-lg p-3 text-zinc-500 ml-5  border-2 border-solid border-amber-800 hover:bg-amber-800 hover:text-white hover:shadow-negmshadow ">عشاء</button>
    </Rotate>
</div>
  )
}

export default Foodcategore
