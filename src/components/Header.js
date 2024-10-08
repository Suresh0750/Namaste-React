import logo from '../../Images/logo.png'
import { useState } from 'react'
import {Link} from 'react-router-dom'

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
                        <li>
                            <Link to={'/'}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to='/About'>
                                About Us
                            </Link>
                        </li>
                        <li>Contact Us</li>
                        <li>Card</li>
                        <button style={{padding:'2px 5px'}} onClick={()=>btnNamasteReact=='login' ? setbtnNamasteReact('logout') : setbtnNamasteReact('login')}>{btnNamasteReact}</button>
                    </ul>
                </div>
            </div>
}