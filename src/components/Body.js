
import RestrarentCard from "./RestrarentCard"
import { useState, useEffect } from "react"


export default Body = ({resData})=>{

    const [listResData,setListResData] = useState([])
    const [showListResData, setShowListResData] = useState([])
    const [searchVal, setSearchval] = useState('')
    console.log(searchVal)
    useEffect(()=>{
        setListResData(resData)
        setShowListResData(resData)

        console.log('hello world')
        filderData()
    },[])

    console.log('Body Rendered')
    const filderData = async()=>{
        try {
            const data = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
              );
          
              const json = await data.json(); 
            console.log('zukie\n', json);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    return <div className='body'>
                <div className='Search '>
                    
                <input type='search' value={searchVal} onChange={(e)=>setSearchval(e.target.value)} />
                   {/* <button className="filter-btn" onClick={()=>{let newData = listResData.filter((cardData)=> cardData.stars>=5);setListResData(newData)}}>Top Realated Search</button> */}
                   <button className="filter-btn" onClick={()=>{let newData = listResData.filter((cardData)=> cardData.foodName.toLowerCase().includes(searchVal.toLowerCase()));setShowListResData(newData)}}>Top Realated Search</button>
                </div>
                <div className='res-container'>
                    {
                    
                        showListResData.map((data,ind) => <RestrarentCard key={Math.random()} resData={data}/>)
                    }
                    {
                        showListResData.map((data,ind) => <RestrarentCard key={Math.random()} resData={data}/>)
                    }
                   
                  
                </div>
            </div>
}