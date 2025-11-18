# Task 1

This exercise is about practicing working with forms in React.

In the current folder you have a set of project files ready to use. Your task is to build a simple feedback form using React. See below for reference images.

Clicking the `Send` button must hide the form and display a thank you message, for example "Thank you for your feedback!". Also log the input data into the console as a JSON object; for example:

```json
{
  "name": "Abdullah Lee",
  "email": "abdullah.lee@example.org",
  "feedback": "Great job!"
}
```

## Requirements

- Don't edit App.css
- Create separate state variables for name, email and feedback

- Create a state variable `submitted` of type Boolean
    - This is to keep track of has the form been submitted

- Create a `<form>` for the inputs
    - Use an `onSubmit` to handle submitting the data
    - No need to actually send the data anywhere

- Create an `Input.jsx` Component
    - Render all three inputs from App with `Input`
    - Note that the message is a `textarea`
    - `Input` needs to take in name, type, value and onChange as props
    - Create `Input.css` for label, input and textarea styling

![Reference](./reference.png)
![Reference after submit](./reference2.png)
