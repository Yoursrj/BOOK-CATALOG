import { useState,useContext} from "react";
//import { useState, useContext } from "react";: Importing the required hooks useState and useContext from React.
import BookEdit from './BookEdit';
//import BookEdit from './BookEdit';: Importing the BookEdit component, which is responsible for rendering the edit form for a book.
import BookContext from "../context/book";
//import BookContext from "../context/book";: Importing the BookContext from the book context file.


function BookShow({book }){
    //,function BookShow({ book }) { ... }: Declaring the functional component BookShow that takes a book object as a prop. 
    
    //{onDelete, onEdit} ---ondelete or onedit prop hata diya hai uski jagah context use krenge
    //{book}single array of objects k andr ek single object yaani book ki ek single value ko receive kiya hai
    //{onDelete} prop aara hai app.js se through booklists e hokar 
   const [showEdit,setShowEdit] = useState(false);//by default showEdit false ho jayega
  // Using the useState hook to initialize a state variable showEdit with the initial value of false. It is used to control whether to show the edit form or not.

   const {deletebookbyId} = useContext(BookContext);//context of delebookby id
   //: Using the useContext hook to access the deletebookbyId function from the BookContext.

   const handleEditClick = () =>{//edit karne pe onclick krne pe ye method chalega jese hi edit button p click ho
    setShowEdit(!showEdit);//showEdit by default false hai ussse not false krdo yaani true krdo jese hi edit button p click ho
   };
   //: A function that is called when the edit button is clicked. It toggles the value of showEdit using setShowEdit function.

    const handleDeleteClick=() =>{//handleclick event se jab uss button p click krenege tab jo action perform hoga usse control hoga
    deletebookbyId(book.id);//deletebookbyId se delete krenge kyuki ondelete prop hata diya hai
    //onDelete(book.id)//onDelete me delete krdenge book.id ko  ..delete krne pe y wala 
   };
   // function from the context to delete the book by its ID.

   const handleSubmit = () =>{//( id,newTitle )
    //jese hi edit form pura krke submit krenge tab handleformsubmit chal jayega isme id or titlr bhi lenge
    setShowEdit(false);//jese hi form pe save daba de tab setshowedit ko false krdo...or wapas non edit form me chale jaaao(bina pencil wali form)
    //onEdit(id,newTitle)//form submit krte hi onEdit chal jayega jo editbookbyid lera hai app.js me se jisme purae title ko replace krde re hai hum new title se
    //jo title hum edit krenge wohi title wapas chane ho jayega
   }
   // A function that is called when the edit form is submitted. It sets showEdit to false to hide the edit form.

   let content = <h3>{book.title}</h3>//ek div banega click krte hi add movie jisme title hoga book ka //or uss book ka title show krre h
   // Initializing the content variable with the JSX for displaying the book title.

   if(showEdit){// agar showaedit false(by default) hai ..yaani [if(turnedOn == true) is the same as if(turnedOn)]
   //agar showdit button pe clicjk hua hai tab content jo hai usme handle subit chalao or book prop (createbook prop) ka use krdo uska kaam bhi krne ke liye
    content=<BookEdit onSubmit={handleSubmit } book={book}/>//jese hi edit form pura krke submit krenge tab handleformsubmit chal jayega or createbook ho jayega..or wapas name change ho jayega jo edit kiya hai
   }
   //If showEdit is true, it assigns the JSX of the BookEdit component to the content variable, which renders the edit form.

   return <div className="book-show" > 
   <img
   alt="books"
   src={`https://picsum.photos/seed/${book.id}/300/200`}
   />
   {/* Renders an image using the book.id` to generate a unique URL. */}
    <div>{content} </div>{/*//content ko show kre ke liye yahi content upar se aayega */}
    {/*Renders the content JSX, which displays either the book title or the edit form based on the showEdit state */}
    <div className="actions">
    {/*<div className="actions">: This <div> element has a className attribute set to "actions", which is used for styling purposes. */}
        <button className="edit" onClick={handleEditClick}>Edit</button>
        {/*<button className="edit" onClick={handleEditClick}>Edit</button>: This is a button element with a className attribute set to "edit", which is used for styling. 
        It has an onClick event handler assigned to the handleEditClick function. When clicked, this button will trigger the handleEditClick function. */}
        <button className="delete" onClick={handleDeleteClick}> delete</button>
        {/*This is a button element with a className attribute set to "delete", which is used for styling.
         It has an onClick event handler assigned to the handleDeleteClick function. When clicked, this button will trigger the handleDeleteClick function. */}
    </div>
    </div>
}
//The purpose of these buttons is to provide user interactions for editing and deleting a book. When the "Edit" button is clicked, it calls the handleEditClick function, which toggles the showEdit state variable, controlling the visibility of the edit form. 
//When the "Delete" button is clicked, it calls the handleDeleteClick function, which invokes the deletebookbyId function from the BookContext to delete the book.

export default BookShow;