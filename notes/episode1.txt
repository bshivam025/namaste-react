Q1. what is CDN ?
Ans:  Content Delivery Network  is a distributed network of servers that work together to deliver web content, such as images, stylesheets, scripts, and videos, to users based on their geographical location.
Q2. React Philosophy?
Ans: Do everything using js.
Q3. Why is React a Library ?
Ans: Because it can be applied to a part of code instead of the whole project, that is also the difference between library and framework i.e framework sets the architechture for the whole project/ codebase while react is a helper which is a library and can be used on a smaller part of the code without affecting the rest of the already written code.
Q4. What is Emmet?
Ans: It provides a shorthand syntax for quickly creating and expanding code snippets
Q5. Difference between a Library and Framework?
Ans: Framework: It is used to define the architechture of the whole project WHile Library Can be used as a support or helper and it can be used on just a part of the project.
Q5. What is CDN? Why do we use it?
Ans: Q1 + It is used for load balancing wrt the geological location around the whole world.
Q6. Why is react known as React?
Ans: React is known as react for its reactive programming. Reactive programming means changing data dynamincally therefore it means only that part needs to render/ reload again which has changed while other part of the code stays the same due to this the page does not need to be rendered again as a whole which saves time.
Q6. Async VS differ?
Ans: async: Loads the script asynchronously, allowing HTML parsing to continue, and executes it as soon as it's downloaded. Useful for non-essential scripts.

defer: Defers script execution until HTML parsing is complete, ensuring scripts are executed in order before the DOMContentLoaded event. Useful for scripts dependent on HTML structure.
    
Example: If you have multiple scripts, like script1.js and script2.js, and you want them executed in a specific order, use defer to maintain sequence: <script defer src="script1.js"></script> <script defer src="script2.js"></script>.
Q7. Anything we do from React can be done from basic HTML, CSS, JS? Then why use React?
Ans: Yes, anything we do from React can be done from basic HTML, CSS, JS. But React makes it easier to manage the code. It makes the code more readable and maintainable. It makes the code more modular and reusable. It makes the code more efficient and scalable. It makes the code more performant and reliable.
IT MAKES YOUR DEVELOPER EXPERIENCE EASY. 
Q8. What extensions do you use to make react files?
Ans: We can use .jsx or .js for react files. They are exactly the same , there is no difference between how they work. It is just a matter of preference. 
Q9. Costiest operation in a web application?
Ans: DOM Manipulation, React comes with a Philosophy that it does everything using js.
Q10. Create a <h1> tag using HTML/JS/React?
Ans: 
HTML: <h1> Hello World </h1>
JS: document.createElement('h1').innerText = 'Hello World'
React:
    let root = document.getElementById('root');
    root = ReactDOM.createRoot(root);
    let h1 = React.createElement('h1',{},'Hello World');
    root.render(h1); 
Q11. What is the difference between React.createElement and ReactDOM.render?
Ans: React.createElement is used to create a new element while ReactDOM.render is used to render the element on the screen.
Q12. What is React.createElement?
Ans: It is used to create a new element. It takes 3 arguments. 1st is the type of the element, 2nd is the props of the element and 3rd is the children of the element. It can be used to create a nested element as well. for example for creating a div with a p inside it, we can use React.createElement('div',{},React.createElement('p',{},'Hello World'))

// EP 1 ends here date = 20 Jan 2024 

A person who is not curious is not a good developer. 