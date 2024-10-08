REDUX

STEPS:
1. Install @reduxjs/toolkit and react-redux.
2. Create our store.
3. connect the store to our app.
4. Create a slice.
5. Create a reducer function to be called on dispatch.
6. dispatch the action.
7. Selector function to read data from the store.

Q1. Is Redux Mandatory?
Ans. No redux is not mandatory !.

Q4. What is Redux toolkit ?
Ans. Standard way to write redux logic.

- What are we going to build using this RTK(REDUX TOOLKIT)?
    -> we are going to add a simple add to cart feature in our app.

Q5. How is data stored in Redux ?
Ans. Data is stored in a single JS object called the store. To keep the data organised we can store the data in logical separations called as slices.

Q6. Where can redux data be accessed ?
Ans. Redux data can be accessed from any component in the app.

Q7. How to Add Data to Redux Store ?
Ans. On Required Action(add to card) :
    1. Dispatch an action 
    2. Action will call a function called reducer
    3. Reducer will update the store(slice)

Q8. How is Data Read from Redux Store ?
Ans. Data can be read from the store using Selector functions.
    1. Selector (Subscribing to the store = useSelector)
    2. update the UI with the data




    [ADD BUTTON] -> [DISPATCH ACTION] -> [REDUCER FUNCTION] -> [UPDATE REDUX STORE (SLICE)] -> [SELECTOR FUNCTION] -> [UPDATE UI]

    

    differece between:
                                    <button className="absolute bottom-0 z-10 mb-2 bg-black text-white px-1 ml-6" onClick={handleAddItem}>ADD +</button>
                                <button className="absolute bottom-0 z-10 mb-2 bg-black text-white px-1 ml-6" onClick={handleAddItem(item)}>ADD +</button>
                                <button className="absolute bottom-0 z-10 mb-2 bg-black text-white px-1 ml-6" onClick={()=>handleAddItem(item)}>ADD +</button>

    1. onClick={handleAddItem} -> this will call the function when the button is clicked.
    2. onClick={handleAddItem(item)} -> this will call the function when the button is rendered.
    3. onClick={()=>handleAddItem(item)} -> this will call the function when the button is clicked.

    why is 2nd one wrong ?
    -> because we are calling the function when the button is rendered and not when the button is clicked.
    then why isnt the 1st one wrong ?
    -> because we are not passing any arguments to the function.
    what difference does not passing arguments make ?
    -> when we pass arguments to the function it will call the function when the button is rendered and not when the button is clicked.
    why is the 3rd one correct ?
    -> because we are passing the function as a callback function and not calling the function when the button is rendered.


    RTK query:
    - RTK query is a library that allows us to fetch data from an API and store it in the redux store.
    