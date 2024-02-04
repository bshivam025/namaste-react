#BUILDING MY FOOD DELIVERY APP

############ SWAGIEE ############
/**
1. Header
    a. Logo
    b. Nav items
2. Body
    a. Search bar
    b. Restaurant list
3. Footer
    a. Copyright
    b. Links
    c. Social media
    d. Address
    e. Contact
*/

Q1. What are props in JSX?
Ans: Props are just like arguments in functions. They are passed to components and can be used inside the component.
Q2. Key prop in JSX?
Ans: Key prop is used to identify the element uniquely. It is used to identify the element in the list. It is extremenly important to use key prop in the list. It helps react not re-render the whole list when one element is changed. It is not a good practice to use index as key prop.
# No KEy prop <<<<<<<<< index as key prop <<<<<<<<<<<<<<< unique key prop(best practice)
Q3. types of exports/imports in react?
Ans: There are two types of exports in react.
    1. Default export
    2. Named export
Q4. What is default export?
Ans: Default export is used to export only one component from a file. example: export default App;
Q5. What is named export?
Ans: Named export is used to export multiple components from a file. example: export {App, Header, Footer};

