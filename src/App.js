

// *** sample of practice

import React from 'react'
import ReactDOM from 'react-dom/client'

import Header from './components/Header'
import Body from './components/Body'
import resData from './utils/mockData'

// // const h1 = document.createElement('h1')
// // h1.innerHTML = `<h1>Namaste React</h1>`
// // document.getElementById("root").append(h1)
// const heading = React.createElement("h1",{id:'record',className:'selectBox'},"Hello World from React!",React.createElement("h2",{id:"child1"},"writing by Akshy shine"))
// const heading1 = React.createElement("h1",{id:'record',className:'selectBox'},"Hello World from React!",React.createElement("h2",{id:"child1"},"writing by Akshy shine"))

const root = ReactDOM.createRoot(document.getElementById("root") )
// root.render(heading)
// const root2 = ReactDOM.createRoot(document.getElementById("root2"))

// const Learn = ()=>{
//     return <>
//             <p>Learing react with Akshy shynie bro</p>
//         </>
// }

// const head = <h1>Hellow developer</h1>
// const Heading = ()=>{
//     return <>
//             <Learn/>
//             {Learn()}
//             <h2 tabIndex={2}>I am watching Akshy Shynie video Which is Nameste React</h2>
//         </>
// }
// root2.render(<Heading/>)


// * Actual coding


/**
 * Heading
 *   - Logo
 *   - Nav item
 * Body
 *  - search
 *  - Restrarent content
 *  - Restrarent card
 * Footer   
 *  - Copy Right Symbol
 *  - Links 
 *  - Address
 *  - Contack
 * 
 */

//***https://www.google.com/search?sca_esv=4a42ef09a1334cc3&sca_upv=1&rlz=1C1ONGR_enIN1096IN1096&sxsrf=ADLYWIL8X4FlKNZ7zfg5D8ijtPHeV0tsmQ:1721403822404&q=food+delivery+app+icon&udm=2&fbs=AEQNm0B8dVdIWR07uWWlg1TdKnNtA1cwMugrQsIKmAo5AEZHWRFlUeGLxYlhagMfUatSvHu3MSamP9Qd2SfjyZyVIdPFrZFmdorP0BQX-5QUvERZ7CgntLysKxPYR85LNkkQ-ODVQlzCBgHDwYGwBEtb1wyzIiqYOAGOFOhRLG73H-MUdJY1ZFjTgiSsk2gQgTHDHU_Mnn5ewYy4nGfZAENFgsXyYdMtYQ&sa=X&ved=2ahUKEwiruuX6uLOHAxVPi2MGHS8VEMEQtKgLegQIFxAB&biw=767&bih=738&dpr=1.25#vhid=E1eHZxF726Zf7M&vssid=mosaic


const AppLayout = ()=>{
    return <div className="app">
        <Header/>
        <Body resData={resData}/>
    </div>
}

root.render(<AppLayout/>)