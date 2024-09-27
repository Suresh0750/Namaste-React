
import { useRouteError } from "react-router-dom"


const Error= ()=>{
    const error = useRouteError()
    console.log(error)
    return(
        <div>
            <h2>OOPS!!</h2>
            <h3>{error.status} Page  {error.statusText}</h3>
            <h3>{error.data}</h3>
        </div>
    )
}


export default Error