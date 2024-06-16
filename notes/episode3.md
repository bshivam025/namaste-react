#topics Covered: 
cs
● JSX
● React.createElement vs JSX
● Benefits of JSX
● Behind the Scenes of JSX
● Babel & parcel role in JSX
● Components
● Functional Components
○ Composing Components

Q1. Is JSX HTML?
Ans: No, JSX is not HTML. JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript. JSX gets compiled to React.createElement() calls which return plain JavaScript objects called “React elements”. React elements are then rendered to the DOM or to a string, depending on the environment. React components can also return other types of elements, such as arrays, strings, numbers, etc. These elements are useful when you need to render multiple elements, like a list or fragments.
So in short JSX camn be called HTML like but it is NOT AT ALL HTML.
Q2. How to run the code?
Ans: You can run the code by using the following command:
```
npm start
npm run start
npx parcel index.html
```
above 3 all same and will run the code on localhost:1234
but to enable this we have to add the following code in package.json file:
```
"scripts": {
    "start": "parcel index.html"
  },
```
Q3. What is a React element?
Ans: React elements are the building blocks of React applications. One might confuse elements with a more widely known concept of “components”. Elements are what components are “made of”. React elements are also not HTML elements. React elements are plain objects, and are cheap to create. React DOM takes care of updating the DOM to match the React elements.
Q4. what does root.render do?
Ans: Root.render is used to convert react elements into html elements and then render them on the screen.
Q5. is JSX a part of react?
Ans: No, JSX is not a part of react. It is a syntax extension to JavaScript.
Q6. What is the difference between JSX and HTML?
Ans: JSX is not HTML. JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript. JSX gets compiled to React.createElement() calls which return plain JavaScript objects called “React elements”. React elements are then rendered to the DOM or to a string, depending on the environment. React components can also return other types of elements, such as arrays, strings, numbers, etc. These elements are useful when you need to render multiple elements, like a list or fragments.
Q7. What is the difference between React and ReactDOM?
Ans: React is a library for building composable user interfaces. It encourages the creation of reusable UI components, which present data that changes over time. ReactDOM is a library for rendering these components to the DOM. React DOM takes care of updating the DOM to match the React elements.
Q8. How does browser understand JSX?
Ans: Browsers don’t understand JSX. So, JSX code must be converted into JavaScript before being sent to the browser. The process of converting JSX into JavaScript is called transpiling. The most popular tool for transpiling JSX into JavaScript is Babel.
#FLOW for babel and JSX
```
JSX code -> Babel -> JavaScript code -> root.render ->Browser
```
Q9. What is Babel?
Ans: Babel is a JavaScript compiler. Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. It is found in the npm package babel-core. It is also a package inside parcel.
Q10. What is the meaning of transpiling?
Ans: Transpiling is a specific term for taking source code written in one language and transforming into another language that has a similar level of abstraction. The name “transpiling” is a mashup of the words “transforming” and “compiling”. It is a term that is used to describe the process of taking source code written in one language and transforming into another language that has a similar level of abstraction. The name “transpiling” is a mashup of the words “transforming” and “compiling”.
Q11. What is a React Comonent?
Ans: React components are small, reusable pieces of code that return a React element to be rendered to the page. The simplest version of React component is a plain JavaScript function that returns a React element.
Q12. What is the difference between a React element and a React component?
Ans: React elements are the building blocks of React applications. One might confuse elements with a more widely known concept of “components”. Elements are what components are “made of”. React elements are also not HTML elements. React elements are plain objects, and are cheap to create. React DOM takes care of updating the DOM to match the React elements.
Q13. Types of React Components?
Ans: There are two types of React components:
1. Functional components
2. Class components
Q14. What is a functional component?
Ans: The simplest version of React component is a plain JavaScript function that returns a React element. Such function is also called a “functional component” because it literally is a JavaScript function.
Q15. What is a class component?
Ans: The other way to define a React component is with the ES6 class syntax. Such components are called “class components”. The above code is equivalent to the following ES6 class syntax:
```
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```
Q16. What is component composition?Composing Components?
Ans: using a component inside another component is called component composition.
Q17. Role of type attribute in script tag? What options can I use there?
Ans: The type attribute specifies the scripting language of the element's contents and overrides the default scripting language. The default scripting language is JavaScript. The type attribute identifies the content between the <script> and </script> tags. It is not required if you are using JavaScript. The default value is "text/javascript". You can use any language that compiles to JavaScript, such as TypeScript or CoffeeScript. type="module" is used to enable ES6 modules. so we use it for react.
Q18. {TitleComponent} vs {<TitleComponent/>} vs
{<TitleComponent></TitleComponent>} in JSX
Ans:Use {TitleComponent} when you want to reference the component itself, perhaps to pass it as a prop or use it within logic.
Use {<TitleComponent/>} when you have a self-contained component without any children.
Use {<TitleComponent></TitleComponent>} when your component has children elements or textual content inside it.




#NOTES:
#Whenever you can creating a React component, name it with a capital letter. This way you will distinguish React components from regular HTML elements.else you will get an error.
1. React is a library for building composable user interfaces. It encourages the creation of reusable UI components, which present data that changes over time. ReactDOM is a library for rendering these components to the DOM. React DOM takes care of updating the DOM to match the React elements.
2. JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript. JSX gets compiled to React.createElement() calls which return plain JavaScript objects called “React elements”. React elements are then rendered to the DOM or to a string, depending on the environment. React components can also return other types of elements, such as arrays, strings, numbers, etc. These elements are useful when you need to render multiple elements, like a list or fragments.
3. JSX syntax if writing in multiple lines then we have to wrap it in () brackets.


#video 3 completed date 27/01/2024