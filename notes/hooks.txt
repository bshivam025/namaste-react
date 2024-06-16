This file contains the Hooks of react with their definition and example.

1. useState
2. useEffect


1. useState :

    1.1 Definition : It is a utility function which is used to add state to the functional component. It returns an array with two elements. The first element is the current state value and the second element is a function that lets you update it.
        1.1.1 What is State: State is a built-in object in React that stores the component's dynamic data and determines the component's behavior. It is mutable and can be changed by calling the setState() method.
    1.2 Example : 
        ```
        import React, { useState } from 'react';

        function Example() {
            // Declare a new state variable, which we'll call "count"
            const [count, setCount] = useState(0);

            return (
            <div>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>
                Click me
                </button>
            </div>
            );
        }
        ```
    1.3 Explanation :
        - In the above example, we have used useState hook to add state to the functional component.
        - We have declared a state variable count and a function setCount to update the state variable.
        - We have initialized the state variable with 0.
        - We have displayed the state variable value in the paragraph tag.
        - We have added a button which will increment the state variable value by 1 on click.
        - When the button is clicked, setCount function is called with the updated value of the state variable.
        - The component will re-render with the updated state variable value.
    1.4 Good Practice :
        - dont put useState inside a loop, condition or nested function.
        - always use useState at the top level of the component.
        - dont use useState out of the functional component. 

2. useEffect :

    2.1 Definition : It is a utility function which is used to perform side effects in functional components. It is called after every render of the component. It takes two arguments, a function and an optional array of dependencies. The function argument is called after every render and the array of dependencies is used to optimize the effect. If the array of dependencies is empty, the effect will only be called once after the initial render.
        2.1.1 What is Side Effect : A side effect is any effect that is not a result of the function's return value. It includes things like modifying the DOM, fetching data from an API, setting timers, and logging to the console.
    2.2 Example : 
        ```
        import React, { useState, useEffect } from 'react';

        function Example() {
            const [count, setCount] = useState(0);

            // Similar to componentDidMount and componentDidUpdate:
            useEffect(() => {
            // Update the document title using the browser API
            document.title = `You clicked ${count} times`;
            });

            return (
            <div>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>
                Click me
                </button>
            </div>
            );
        }
        ```
    2.3 Explanation :
        - In the above example, we have used useEffect hook to perform side effects in the functional component.
        - We have declared a state variable count and a function setCount to update the state variable.
        - We have initialized the state variable with 0.
        - We have used useEffect hook to update the document title with the count value.
        - The useEffect hook takes a function as an argument which will be executed after every render.
        - The document title will be updated with the count value after every render.
        - The component will re-render with the updated state variable value.
        - The useEffect hook will be called after every render to update the document title. 

    2.4 Dependency Array in useEffect: 
        - The dependency array is an optional argument in the useEffect hook that allows you to optimize the effect by specifying the dependencies that the effect depends on. 
        - If the dependency array is empty, the effect will only be called once after the initial render. ex -> []
        - If the dependency array contains values, the effect will be called whenever any of the values in the array change. ex -> [count]
        - If the dependency array is not provided, the effect will be called after every render. -> 
        - Example : 
            ```
            import React, { useState, useEffect } from 'react';

            function Example() {
                const [count, setCount] = useState(0);

                // Similar to componentDidMount:
                useEffect(() => {
                // Update the document title using the browser API
                document.title = `You clicked ${count} times`;
                }, [count]); // Only re-run the effect if count changes(this is the dependency array)

                return (
                <div>
                    <p>You clicked {count} times</p>
                    <button onClick={() => setCount(count + 1)}>
                    Click me
                    </button>
                </div>
                );
            }
            ```
        - In the above example, we have used useEffect hook with a dependency array containing the count value.
        - The effect will be called whenever the count value changes.
        - The document title will be updated with the count value after every render.
        - The component will re-render with the updated state variable value.
        - The useEffect hook will be called after every render to update the document title when the count value changes.
