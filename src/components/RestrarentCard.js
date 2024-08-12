

import {CDN_URL} from '../utils/constent'

export default  RestrarentCard = (props)=>{
   
    let {foodName,cousine,stars,time} = props?.resData
    
    console.log(props)

    return <div className={'res-card'}>
                <img className='card-img' alt='kfg-barker' src={CDN_URL} />
                <h3>{foodName}</h3>
                <h4>{cousine} </h4>
                <h4>{stars} stars</h4>
                <h4>{time} minutes</h4>
            </div>
}
