## React Assignment

1. How can you implement shared functionality across a component tree?

*There are several effective ways to implement shared functionality across a component tree in React:*
- **Custom Hooks** - Create a custom hook that encapsulates the shared logic and returns the necessary values or functions.
- **Higher-Order Components (HOCs)** - Create a function that takes a component as input and returns a new component with the shared functionality wrapped around it.
- **Context API** - Create a context object to store and share data across components. Use the `useContext` hook within components to consume the context value.

2. Why is the `useState` hook appropriate for handling state in a complex component?
- **Declarative Syntax**
- **State Management Within Components**
- **Re-rendering Optimization**
- **Local State**

3. Design a user interface resembling the provided page. Fetch the data from the server and dynamically map the information cards to the fetched data. Ensure that the search functionality is also implemented.

![Logo](UI-Screen-1.png)
