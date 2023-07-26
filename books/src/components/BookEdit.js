import { useState,useContext } from "react";//pen wale button pe click krke hum changes krre hai or jab bhi chanes hone tab state system aayega
import BookContext from "../context/book";
//The first line imports the useState and useContext hooks from React. These hooks will be used to manage state and access the BookContext.
//The second line imports the BookContext from the '../context/book' file. This context will provide access to the necessary data and functions related to books.

function BookEdit({book ,onSubmit}){
    //This defines a functional component called BookEdit that takes in book and onSubmit as props. book represents the book object to be edited, and onSubmit is a function to be called when the form is submitted.
    
    //ye function books edit ka jo card hai usse chalane ke liye us hota hai,,jab card ko edit kreng
    //createbook or onSubmit prop layega ye jisse book create hoga or submit bhi hoga
    //We still need to make sure that we call the on submit function whenever a user hits the submitbutton or tries to save the updated title.
    //And we're going to call onSubmit in addition to trying to edit the book title.
     const [title,setTitle]= useState(book.title);
     //This uses the useState hook to create a state variable title and its corresponding setter function setTitle.
     // The initial value of title is set to the title property of the book object.
     //state system me (default state ) lenge jo already book ka title hai..kuki hume input khali nahi hona chahiye
     const {editBookById} = useContext(BookContext);
     //This uses the useContext hook to access the editBookById function from the BookContext. It will be used to edit the book by its ID.
     //editbookbyid context use kiya hai...useContext krkr
    //shuruaat se present honi chahiye value jisse edit karna hai...setTitle se rerender hoga
     const handleChange = (event) =>{//whenever user changes the input in any way then this event will occur
        setTitle(event.target.value)
        //This defines a function handleChange that is triggered whenever the input value changes.
        // It updates the title state with the new value obtained from event.target.value.
        
     };   
        //setTite is state and rerender kar dega har baar jab bhi ibput jayega
     //event.target.value mtlb jese form m koi event hoga(insertion) to uss event ko target krkr uski value nikal lo
     //jese mene form me kuch dala input to uss input ki value //jese hi koi nayi value input krega tabhi rerender krdo page ko
      //value ko control krne ke liye bhi use krte hai setsystem ko jo title ki nayi value event.target.value se mili hai usse replace krdo naye event object se{title} me
     const handleSubmit = (event) =>{//ye function tab chalega jab save krne pe handlesubmit use hoga
        event.preventDefault();//BROWSER ME LINE BY LINE CONSOLE ME STORE NA HO HAR INPUT USKE LIYE FDEFAULT BEHAVIOUR OFF MAAR DIYA
       onSubmit();// --And then inside of handle Submit.We still want to call on Summit because we still need to tell book show when it needs to close the form.
       //When we call on Summit.However, we don't have to pass in the book ID in the title.
       //Because the book Show component no longer needs the id or the title.--
       editBookById(book.id,title);//editbookbyid naam ka context use kiya hai..or usme book id or title dala hai
       //onSubmit prop ka use kiya or usme title ger diya book ka jp user ne dala hai..wo store hoha bookcreate component me
       //book ki id or title jo hai wo submit ho jayengi
    }
    //This defines a function handleSubmit that is triggered when the form is submitted. 
    //It prevents the default form submission behavior, calls the onSubmit function, and then calls the editBookById function with the book's ID and the updated title.
    
    return <div>
        <form onSubmit={handleSubmit} className="book-edit">{/*ye form submit hoga..to handlesubmit chlega. */}
            <label>Title</label>
            <input className="input" value={title} onChange={handleChange}/>{/*title yaaani input me jo value jayengi
        //handleChange matlab jab bhi input mein jab bhi change hoga...onchange method se change hoyega jisse handle kar ra h handleChange */}
            <button className="button is-primary">Save</button>{/* ye button save dabane pe chalega */}
        </form>
    </div>
    //This returns the JSX markup for the BookEdit component. It renders a form with a label, an input field for the title, and a save button.
    // The form's onSubmit event is set to the handleSubmit function, and the input field's value is set to the title state. 
    //The onChange event of the input field is set to the handleChange function.
}

export default BookEdit;
//This exports the BookEdit component as the default export so that it can be imported and used in other files.