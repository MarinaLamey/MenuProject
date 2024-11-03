import "../App.css"
import { useState } from "react"



const Header = ({filterbyvalue}) => {

const [inputvalue ,  setInputValue] = useState("");

const onFilter= (inputvalue) => {
    filterbyvalue(inputvalue)
}
const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
    return(
<>
<nav className=" headerstyle p-4" >
<div className="container mx-auto  flex items-center justify-between justify-center">
<h3 className="text-3xl text-amber-800 font-bold ">مطعم جديد</h3>
<div className="">
<input value={inputvalue} onChange={handleInputChange} type="text" className="w-80 border-none cursor-text rounded-lg p-3 ml-10 hover:shadow-negmshadow " placeholder="ابحث"></input>
<button onClick={() => onFilter(inputvalue)}  className="rounded-lg p-3 bg-white ease-in duration-75 hover:bg-amber-800 hover:text-white hover:shadow-negmshadow  ">ابحث</button>
</div>
</div>
</nav>
</>
    )
}


export default Header ;