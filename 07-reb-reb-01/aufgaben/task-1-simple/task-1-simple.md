# Task 1

This exercise is about practicing basic React skills.

In the current folder, start a new React project using vite. Use the name `simple` for the new project. Clear the starter JSX and CSS boilerplate to start with an empty `App.jsx`.

```js
import 'App.css'

function App() {
    return <div>App</div>
}

export default App
```

Then, create the following structure to the App component:

```js
function App() {
    return (
        <div>
            <Header text="LOGO" />
            <MainContent text="Card" />
            <Chat text="This is a chat box" />
            <Footer text="I am a footer!" />
        </div>
    )
}
```

After that, your task is to implement all the components defined above. Add a CSS file for each of the components to style them independently. The styling is not important, try to match the layout of the reference image below.

![Reference](reference.png)
