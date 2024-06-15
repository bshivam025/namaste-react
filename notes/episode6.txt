Q1. What is the difference between Monolith and Microservices architecture?
Ans: 
#1. Monolith Architecture: 
- Monolith is a single large unit where all the software components are interconnected and interdependent. 
- it has a single codebase.
- same repository for all the developers.
#2. Microservices Architecture:
- We have different services for different components of the application.
- Each service has its own codebase.
- all these services combined together to form a complete application.
- separate UI, business logic, and data storage.
- single responsibility principle.
- advantage: you can use different technologies for different services. ex. one service can be in Java, another in Python, etc.

Q2. How do different services interact with each other in Microservices architecture?
Ans: Like how does backend talk to UI or how does one service talk to another service? So our React app is a UI service.
- All these services run on their own port.
- So, when we want to talk to another service, we make an HTTP request to that service.

Q3. What is a port?
Ans: A port is a communication endpoint. It is used to identify a particular process or a type of network service. Each port is associated with a specific process or service.

Q4. How is a server related to a port?
Ans: A server is a computer program or a device that provides functionality for other programs or devices, called clients. This architecture is called the client-server model. A server is a process that is running on a computer and listens for requests from clients. When a request comes in, the server processes the request and sends a response back to the client. The server listens on a specific port for incoming requests.

Q5. What is a HTTP request?
Ans: HTTP stands for Hypertext Transfer Protocol. It is an application layer protocol that is used for transmitting hypermedia documents, such as HTML. HTTP is the foundation of data communication for the World Wide Web. It is a request-response protocol. A client sends a request to the server and the server sends a response back to the client.

Q6. What is Optional Chaining ?
Ans: Optional chaining is a feature in JavaScript that allows you to access properties of an object without having to check if the object is null or undefined. It is denoted by the question mark (?.) operator. If the object is null or undefined, the expression evaluates to undefined. This feature is useful when you are working with nested objects and you want to access a property that may or may not exist.
example:
const person = {
  name: 'John',
  address: {
    city: 'New York',
    zipCode: '10001'
  }
};

console.log(person.address?.city); // Output: New York
console.log(person.address?.country); // Output: undefined

Q7. What is Shimmer UI ?
Ans: Shimmer UI is a loading effect that is used to indicate that content is being loaded. It consists of a placeholder that is displayed while the actual content is being fetched. The placeholder typically consists of animated lines or shapes that give the impression of activity. Shimmer UI is commonly used in applications to provide a smooth loading experience for users.

Q8.useEffect() hook in React?
Ans: The useEffect() hook is a built-in hook in React that allows you to perform side effects in function components. Side effects are operations that affect the outside world, such as fetching data, subscribing to events, or updating the DOM. The useEffect() hook is called after the component has rendered and can be used to perform tasks that need to happen after the component has been updated. The useEffect() hook takes two arguments: a callback function that contains the side effect code and an optional array of dependencies. The callback function is executed after the component has rendered, and the dependencies array specifies when the side effect should be re-run. more in hooks.js

Q9. What is conditional rendering in React?
Ans: It is just a jargon, its nothing special. It is just rendering different components based on some condition.
