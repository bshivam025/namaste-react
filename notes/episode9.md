## Q1: What do you mean by single responsibility principle?

A1: Single Responsibility Principle states that a component should have only one reason to change. In other words, a component should have only one job. If a component has more than one job, it becomes difficult to change the component without affecting the other jobs. This principle helps in making the code more maintainable and readable.

## Q2: How to make custom hooks ?

A2: To create a custom hook, you need to follow these steps: 
1. Create a function that starts with the word `use` (e.g., `useCustomHook`).
2. Inside the function, you can use other hooks or functions to implement the desired functionality.
3. The custom hook should return the values, functions, or state that you want to expose to the component.
4. You can use the custom hook in any functional component by calling it like a regular function.

## Q3: explain Chunking in React?

A3: Chunking in React is a technique used to split the JavaScript code into smaller chunks that can be loaded on demand. This helps in reducing the initial load time of the application by loading only the required code when needed. React.lazy and React.Suspense are two features provided by React to implement code splitting and chunking in React applications.
Chunking is also known as :
- Code splitting
- Lazy loading
- Dynamic Bundling
- On demand loading

syntax: 
const MyComponent = React.lazy(() => import('./MyComponent'));