 bundlers   

    vite is a bundlers.

npm install -D parcel
    D means Dependencies 

/*    type="module" we use in script tage why meanse we should say to browser these is not normal javascript this is module then only we can use many things such as imporet and export

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++  // which means if we chnage anything browser automatically rerender it that's called HMR how it doing means using File Watching Algorithm - written in c++ 
- Caching- Faster Builds // that is refer the .parcel-cache folder inside  some code is hasing 
    Caching is help to HMR
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent hasing
- Code Splitting
- Differential Boundling - support older browsers
- Diagnostic
- Error Handling
- Tree Shaking  - remove unused code
- Different dev and production bundles


- JSX and React both are different without JSX we can build our project using react which used to do such (React.createElement) those kind of codes but using JSX


// * JSX element attribute we should use camelCase ex: className


// # component composition ? 

    Function component inside we call anothor function that is component composition.

// # config drivan ui in react js
    What it means. Config-driven UI is a technique that allows you to create user interfaces based on a configuration file, such as JSON, or a TypeScript file that defines the layout and content of the UI components. This can be useful for creating dynamic and customizable UIs without hard coding them.

// # babel 
    babel used to convert the our JSX code to react.code like React.createElement('h1',{},'child')
    if you using react cdn link babel won't needed. That means if we create element like this React.createElement('h1',{},'child')

// Why we use react ?

    using the React our application is faster and it's improve our web site performance . But exactly react is doing dom opperation or manipulation is fast. That's why the react faster.
    React is doing efficient dom manipulation how means it has virtual dom.

// why we use react state ?

    There are two layers which one is data layer and another one is ui layer. If the data layer will change our ui layer automaticaly change. Both are working together.


// React reconcilaration algorithm?

    React reconcilaration is also known as react fiber. whenever somthing changes in ui that's known as reconcilaration. 
    These actual dom and virtual dom, diff algorithm is comes under the React algorithm or reconcilaration.


        // actual dom?

            The html tags are called actual dom.

        // virtual dom? 

            virtual dom is representation of actual dom.  Virtual dom is a react element that means we right the html inside the component. if we put console.log our component is show as object we can say virtual dom is js object.

            using virtual dom and find the different between the two virtual dom and update the actual dom is existing technique react took and use that. That is why react is so fast . basically it is a dom manipulation.

        // diff algorithm?

            diff algorithm is find out the difference between two virtual dom.
            it's find out the differance between the previous virtual dom and updated virtual dom. it will actually update the dom every rerender.


//  About React 
    https://github.com/acdlite/react-fiber-architecture


//  incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.


// why we use useState ?

    if we use useState meanse using the useState only the reconcilation that means React fiber is triger. so diff algorithm and virtual dom and actual dom everything is start for updating the datalayer. Once the datalayer is update our ui layer is also update and our page that particular componenct will rerenter. These all comes under the dom manipulation.

    whenever state variables update, react triggers a reconcilations cycle(re-renders the components)

    have to use useState in side the component don't use outside.

// microservice 

    Before microservice we followed monolythic architecture it every service we wrote in the same folder. But microservice is used to split and working is seperate and also have conversations. our Backend folder, Notification folder, UI folder every thing will run in seperatly. so these is known as seperation of concerns and single responsibility principle.

## useEffect hook

    useEffect is hook which is provide by react for usually fetching the data. maintain the side effect. side effect means after rendering the page the API call then again render the page it is sideEffect. 
    if it is no dependency array => useEffect is called every render.
    if array is empty  => useEffect is called one time when page initial render.
    if array has value => useEffect is called when the value is change.


// Render mechanism

    // * first method
     load-->API call-- -->render 

    // * second method
     load --> render --> API CALL --> render    ==== for this patern we use (useEffect hook)


    react follow the second method for build a web site because of it better user experience.


// Example of hook

    const {useState} = {useState:function(){console.log('Good morning')}}
    useState()


// fetch it will return promise

// fetch is not given by javascript fetch is given by browser and JSX has fetch method alos.


//  # conditional rendering 

    rendering page based on the condition it's called conditional rendering.

    using if else also we are rendering some page that also include here.


//  # custom error data

    using the useRouteError()

    using useRouter we can catch and show the error message to user. It provided by 'react-router-dom'


// * polyfil

    polyfill is a Javascript library .
    polyfill is the piece of the code that provide the functionality of modern features on older browser or environments that do not support those features natively. Essentially, polyfills allow developers to use new features or standards such as HTML 5  API, or Node.js modules while still supporting environments that lack built-in suppport for them.
    

    example : fetch , geolocation

    we were use XMLHttpRequest for fetching the data now currectly we are use fetch and this is provide by that browser but those feature isn't suport all browser usesing polyfill we can use all browser.

// * react-router-dom



## is React is single page application or not?

    React is single page application. 

## 2 types of Routing 

    1- client side routing.  // * client side routing page won't reload that's component only replace.
    2-  server side routing. // * The server will go to backend then fetching the data page will rerender.

// * server side routing we make network call for fetching the data then it is reload.

