import '../App.css'
import { Zoom } from "react-reveal";
const Foodsection = ({foodCate}) => {
return(
    <>
    <div className=" flex flex-col mt-10  relative " >
        <Zoom>
    { foodCate.length >= 1  ? (foodCate.map((item) => {
       return (<div key={item.id} className='rounded  bg-white flex flex-row items-center  mt-8 shadow-xl  h-60   overflow-hidden'>
        <div className=' w-1/3'>
        <img
                  className=" rounded"
                  src={item.image}
                  alt=""
                />
        </div>
        <div className=' w-1/3 flex flex-col items-start  justify-center relative bottom-11 right-6'>
        <h3 className='mb-5 text-xl'>{item.name}</h3>
        <p className='text-zinc-500 ml-5'>{item.description}</p>
        </div>
        <div className=' w-1/3 self-start'> 
            <p className='relative right-52 top-11 text-amber-800'>{item.price}</p>
        </div>
        </div>)
})) : <h3>لا يوجد اصناف</h3> 
       }
       </Zoom>
    </div>
    </>
)
}

export default Foodsection ;