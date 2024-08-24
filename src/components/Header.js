import logo from '../../Images/logo.png'
import { useState } from 'react'

export default  Header = ()=>{
    const [btnNamasteReact, setbtnNamasteReact] = useState(
        'login'
    )
    return <div className='header'>
                <div className="logo-container">
                    <img className='logo' src={logo} />
                </div>
                <div className='nav-items'>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Card</li>
                        <button style={{padding:'2px 5px'}} onClick={()=>btnNamasteReact=='login' ? setbtnNamasteReact('logout') : setbtnNamasteReact('login')}>{btnNamasteReact}</button>
                    </ul>
                </div>
            </div>
}