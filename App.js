
// const h1 = document.createElement('h1')
// h1.innerHTML = `<h1>Namaste React</h1>`
// document.getElementById("root").append(h1)
const heading = React.createElement("h1",{id:'record',className:'selectBox'},"Hello World from React!",React.createElement("h2",{id:"child1"},"writing by Akshy shine"))
const heading1 = React.createElement("h1",{id:'record',className:'selectBox'},"Hello World from React!",React.createElement("h2",{id:"child1"},"writing by Akshy shine"))

const root = ReactDOM.createRoot(document.getElementById("root") )
root.render(heading)
const root2 = ReactDOM.createRoot(document.getElementById("root2"))

root2.render(heading1)
