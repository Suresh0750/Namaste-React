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
    if you using react cdn link babel won't needed.

// Why we use react ?

    using the React our application is faster and it's improve our web site performance . But exactly react is doing dom opperation or manipulation is fast. That's why the react faster.
    React is doing efficient dom manipulation how means it has virtual dom.

// why we use react state ?

    There are two layers which one is data layer and another one is ui layer. If the data layer will change our ui layer automaticaly change. Both are working together.


// React reconcilaration algorithm?

    React reconcilaration is also known as react fiber. whenever somthing changes in ui that's known as reconcilaration. 
    These actual dom and virtual dom, diff algorithm is comes undet the React algorithm or reconcilaration.


        // actual dom?

            The html tags are called actual dom.

        // virtual dom? 

            virtual dom is representation of actual dom.  Virtual dom is a react element that means we right the html inside the component. if we put console.log our component is show as object we can say virtual dom is js object.


        // diff algorithm?

            diff algorithm is find out the difference between two virtual dom.
            it's find out the differance between the previous virtual dom and updated virtual dom. it will actually update the dom every rerender.


//  About React 
    https://github.com/acdlite/react-fiber-architecture


//  incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.


// why we use useState ?

    if we use useState meanse using the useState only the reconcilation that means React fiber is triger. so diff algorithm and virtual dom and actual dom everything is start for updating the datalayer. Once the datalayer is update our ui layer is also update and our page that particular componenct will rerenter. These all comes under the dom manipulation.


// microservice 

    Before microservice we followed monolythic architecture it every service we wrote in the same folder. But microservice is used to split and working is seperate and also have conversations. our Backend folder, Notification folder, UI folder every thing will run in seperatly. so these is known as seperation of concerns and single responsibility principle.

