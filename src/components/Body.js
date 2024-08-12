
import RestrarentCard from "./RestrarentCard"
import { useState, useEffect } from "react"


export default Body = ({resData})=>{

    const [listResData,setListResData] = useState([])
    useEffect(()=>{
        setListResData(resData)
    },[])

    const filderData = ()=>{
    //     resData = resData.filter((data)=>{
    //         if(data.stars>=5) return data
    //         console.log(data)
    //     })
    }
    return <div className='body'>
                <div className='Search'>
                   <button className="filter-btn" onClick={()=>{let newData = listResData.filter((cardData)=> cardData.stars>=5);setListResData(newData)}}>Top Realated Search</button>
                </div>
                <div className='res-container'>
                    {
                        listResData.map((data,ind) => <RestrarentCard key={Math.random()} resData={data}/>)
                    }
                    {
                        listResData.map((data,ind) => <RestrarentCard key={Math.random()} resData={data}/>)
                    }
                   
                    {/* // <RestrarentCard resData={resData[0]}/>
                    // <RestrarentCard resData={resData[1]}/>
                    // <RestrarentCard resData={resData[2]}/>
                    // <RestrarentCard resData={resData[3]}/>
                    // <RestrarentCard resData={resData[4]}/> */}
                </div>
            </div>
}
