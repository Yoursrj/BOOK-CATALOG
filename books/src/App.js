import { useEffect,useContext } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
//The code imports necessary modules and components.
// It imports useEffect and useContext hooks from React, BookCreate and BookList components from their respective files, and the BookContext object from the book context file.

//import axios from "axios";
import BookContext from "./context/book";
//If a user enters some text like new book and they click on Submit, we want to take that text and add
//it into a new object inside the books array.

function App() {
   const {fetchbooks} = useContext(BookContext);
   //The App component is a functional component that serves as the entry point of the application.
    //Inside the component, the useContext hook is used to access the fetchbooks function from the BookContext. 
    //This function is provided by the book context and is used to fetch the list of books.
   
    useEffect(() => {
        fetchbooks();
    }, []);
    //The useEffect hook is then used to call the fetchbooks function when the component mounts. 
    //The empty dependency array [] ensures that the effect runs only once, similar to the componentDidMount lifecycle method.


    return <div className="app">
        <h1>Reading list</h1>
        <BookList />{/*onEdit={editBookById} books={books} onDelete={deletebookbyId}    pehla books as a prop use kiya hai..or ddosra books usestate wala books hai jisme books store hore hai arrays k form me 
        ondelete prop pehle book list me jayega fir bookshow me....deletebookbyid method se contro krre hai book ka delete hona (mtlb ek array of objects me se delete krna ek seingle object ko)
        ...prop hata diya hai..or context use kiya hai*/}
        <BookCreate />{/*onCreate={createBook}      onCreate prop ki trh use hoga book create m  */}
    </div>
    //The return statement defines the JSX markup that will be rendered by the component.
    //Inside the div container with the class name "app", we have an h1 heading with the text "Reading list".
    //The BookList component is rendered, which will display the list of books.
    // This component may receive additional props such as onEdit, books, and onDelete, which control the editing and deletion functionality of books.
    //The BookCreate component is also rendered, which allows users to create new books. 
    //It may receive the onCreate prop, which handles the creation of a book.
}

export default App;
//In summary, this App component sets up the main structure of the application. 
//It displays the heading "Reading list", renders the BookList component to display the list of books, and renders the BookCreate component to allow users to create new books. The useContext and useEffect hooks are used to fetch the initial list of books when the component mounts.