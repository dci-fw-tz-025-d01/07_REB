# Task 2

This exercise is about practicing basic React skills.

In the current folder, start a new React project using vite. Use the name `race` for the new project. Clear the starter JSX and CSS boilerplate to start with an empty `App.jsx`.

```js
import 'App.css'

function App() {
    return <div>App</div>
}

export default App
```

After that, you are going to program a game called "race to 2k". Add a state variable to `App` that keeps track of a number. Set the default value to a random integer between 25 and 40.

Show the user two buttons; `DOUBLE` and `PLUS`. If the user clicks `DOUBLE`, double your state variable number. If the user clicks `PLUS`, increase your state variable by one.

When the state variable number equals exactly 2000, show the message "You win!" and don't show the buttons any more.

If the state variable number goes over 2000, show the message "You went over!" and don't show the buttons any more.

What a fantastic game!

![Reference](./reference.gif)
