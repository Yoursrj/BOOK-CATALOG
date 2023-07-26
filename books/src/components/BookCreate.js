import { useState,useContext } from "react";
import BookContext from "../context/book";
//We import the necessary hooks from React: useState to manage state within the component and useContext to access the BookContext.
//We import the BookContext to access the createBook function defined in the context.

function BookCreate(){//--> {onCreate} -> prop coming from App.js
    const [title,setTitle] = useState('');
    //We define a component named BookCreate.
    //We use the useState hook to create a state variable title initialized with an empty string. 
    //This state will be used to track the input value entered by the user in the input field.

    //by default input will remain empty
    //ISS usestate(title) me jayengi book ka title
    //used to track whatever input user is typing in input
      
    const {createBook} = useContext(BookContext);
    //We use the useContext hook to access the BookContext. We destructure the createBook function from the context to use it in the component.
   //context wale(book.js) file se liya hai
    
    //book context ko use krre hai useContext( book context syntax ka istemaal krke....)
    const handleChange = (event) =>{//whenever user changes the input in any way then this event will occur
        setTitle(event.target.value);
        //We define an event handler handleChange, which will be triggered whenever the user types something in the input field.
       //It takes an event as a parameter, and event.target.value gives us the value of the input field (what the user has typed).
       // We use this value to update the title state using setTitle hook, which triggers a re-render with the new input value.
        
        
        //setTite is state and rerender kar dega har baar jab bhi ibput jayega
    }//event.target.value mtlb jese form m koi event hoga(insertion) to uss event ko target krkr uski value nikal lo
    //jese mene form me kuch dala input to uss input ki value //jese hi koi nayi value input krega tabhi rerender krdo page ko
     //value ko control krne ke liye bhi use krte hai setsystem ko jo title ki nayi value event.target.value se mili hai usse replace krdo naye event object se{title} me
    const handleSubmit = (event) =>{
    event.preventDefault();//BROWSER ME LINE BY LINE CONSOLE ME STORE NA HO HAR INPUT USKE LIYE FDEFAULT BEHAVIOUR OFF MAAR DIYA
    //onCreate(title);//oncreate prop ka use kiya or usme title ger diya book ka jp user ne dala hai..wo store hoha bookcreate component me
    createBook(title);//prop hata ke use kiya createBook or usme title daal diya hai
    setTitle('');//khali krdo input ko enter marne ke baad jo likha hai wo likha nahi rehna chahiye
    };
    //We define another event handler handleSubmit, which is triggered when the form is submitted (when the user clicks the "Create!" button or presses the Enter key).
    //We call event.preventDefault() to prevent the default form submission behavior, which would cause a page reload.
    //We then call the createBook function from the BookContext, passing the title as an argument to add the book to the list of books managed by the context.
    //Finally, we reset the title state to an empty string to clear the input field after the book has been created.


    //form hi use krenge book title submit krne ke liye
    return <div className="book-create">
        <h3>Add A Book </h3>
        <form onSubmit={handleSubmit}>{/*ye form submit hoga..to handlesubmit chlega. */}
        <label>Title</label>
         <input className="input" value={title} onChange={handleChange}/>{/*title yaaani input me jo value jayengi
        //handleChange matlab jab bhi input mein jab bhi change hoga...onchange method se change hoyega jisse handle kar ra h handleChange */}
         <button className="button">Create!</button> {/*jese hi create button pe click krega ya enter dabayega tab handleSubmit chal jayega jo wo operation handle karra h */}
        </form>
    </div>
}
//We return the JSX (the component's UI) that displays the form for creating a new book.
// The form has an onSubmit event handler set to handleSubmit, so when the form is submitted, the handleSubmit function is called.
// The input field's value is set to the title state, and its onChange event is set to handleChange, so any changes to the input will trigger the handleChange function.
// The "Create!" button allows users to submit the form and create a new book with the given title.
// The component's UI is wrapped in a <div> element with the class name "book-create".

export default BookCreate;