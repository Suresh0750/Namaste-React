import logo from '../../Images/logo.png'

export default  Header = ()=>{
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
                    </ul>
                </div>
            </div>
}