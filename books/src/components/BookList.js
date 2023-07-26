import { useContext } from 'react';
import BookContext from '../context/book';
import Bookshow from './BookShow';
//We import the useContext hook from React to access the BookContext.
//We import the BookContext itself, which provides the books array and other functions related to book management.
//We also import the BookShow component, which will be used to display each book in the list.


//booklist me dono function use hore hai jese createBook or Deletebookbyid jo app.js me hai
//kuki book list ki form me jari hai main app.js mein
function BookList() {//--> { books, onDelete, onEdit } -- ye {} iske andar prop books aaara h App.js ke components se
    const {books} = useContext(BookContext);
    //We define a component named BookList.
    //We use the useContext hook to access the BookContext. By destructuring books from the context, we get access to the array of books managed by the context.
    const renderedBooks = books.map((book) => {//jo books aare hai books array se jo prop ke andar se aara h usme loop krdenge map krdenge
        //we need <BookShow> component to understand what books it need show in the booklist using {book} component
        return <Bookshow key={book.id} book={book} />;//onEdit={onEdit} onDelete={onDelete}---->>   key book.id hai jo aara h prop me se app.js se...(book) ek single book ko represent kr raha hai (book= each individual object inside array)
    })//book.id = single array of objects k andr jo single object hai uski id,,,har books ko ek ek krke map krke ek vaue me dalna(rendered_images) me or show krdena
    
    //We create a new variable called renderedBooks.
    //We use the map function on the books array to transform each book object into a <BookShow> component. The map function iterates over each book and returns a component with the book as a prop.
    //The key={book.id} is assigned to each rendered component to provide a unique identifier for React to efficiently manage and update the list.
    return <div className='book-list'>
        {renderedBooks}
    </div>
}
//We return the JSX (the component's UI) that displays the list of books.
//The list is wrapped in a <div> element with the class name "book-list".
//We render the renderedBooks array, which contains the <BookShow> components representing each book.
export default BookList;
//We export the BookList component as the default export, allowing it to be imported and used in other files.

