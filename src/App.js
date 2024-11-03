import Foodcategore from "./Componants/Foodcategore"
import Foodsection from "./Componants/Foodsection"
import "./App.css"
import { useState } from "react"
import { food } from "./Componants/Constance"
import Header  from './Componants/Header';
import Landingpage from "./Componants/Landingpage"

function App() {
  const [list , setlist] = useState(food);

  const filtaringfood = (foodCat) => {
      const newarr = food.filter((item) => item.cate === foodCat);
      setlist(newarr)
  }
  const nofiltar = ()  => {
      setlist(food)
  }
  const filterbyvalue = (inputvalue) => {
  const newar = food.filter((item) => item.name === inputvalue);
  setlist(newar)
  }
  return (
    <div className="App h-screen color-body " >
   <Header filterbyvalue={filterbyvalue} />
   <div className='container mx-auto px-3 '>
   <Landingpage/>
   <Foodcategore food={nofiltar}     filtaringFood={filtaringfood} />
   <Foodsection  foodCate={list} />
   </div>
    </div>
  );
}

export default App;
