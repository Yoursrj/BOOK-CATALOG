import { createContext, useState } from 'react';
import axios from 'axios';
//This code imports the necessary dependencies, createContext and useState from React, and axios for making HTTP requests.

//app.js se saara kaam apne pass le leta hai context or app.js ka kaam bas contetxt ko show krne ka hota hai

const BookContext = createContext();
//This creates a new context called BookContext using the createContext function provided by React.

function Provider({ children }) {
    //This defines a functional component called Provider that takes in a children prop.

    const [books, setBooks] = useState([]);
     //This uses the useState hook to create a state variable books initialized as an empty array, and a corresponding setter function setBooks. 
     //This state will store the array of books.    

    //We've got our books piece of state.
    // So this is an array that's going to represent all the different individual books that are going to display
    //on the screen at a given time.
    
    const fetchbooks = async () => {
        const response = await axios.get('http://localhost:3001/books');
        setBooks(response.data);
    };
    //This defines an asynchronous function fetchbooks that uses axios to make a GET request to 'http://localhost:3001/books'. 
    //It awaits the response, extracts the data from the response, and updates the books state with the received data.
    
    // ### editbooks me api ka use kiya hai...
    const editBookById = async (id, newTitle) => {//jab books ko edit krre honge tab ye function chalega...new title or id receive krega
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle
        });

     const updatedBooks = books.map((book) => {//updated books variable me jitni bbi books aari hai unhe map karo ek ek krke or store krdo
            if (book.id === id) {//agar book ki id same hai jis book ki id pe click kiya hai edit button pe(ex..if harrypotter.id == harrypotter.id )
                return {
                    ...book, ...response.data//So dot, dot, dot response. Dot data means take all the different properties out of that object, 
                    //take all the different key valuepairs, and add them into this new object right here And that's it.
                    //title:newTitle//tab jo purani book ka naam hai usse new book se replace maar do or saath me book array bhi update krdena
                }
            }
            return book;//jo naya book array hai usse return krdo
        });
        setBooks(updatedBooks);//rerender the updatedbooks array
    }
   //This defines an asynchronous function editBookById that takes id and newTitle as parameters.It uses axios to make a PUT request to 'http://localhost:3001/books/${id}' with the new title in the request body.
   // It awaits the response, extracts the data from the response, and updates the books state by mapping through the existing books array. If the book's ID matches the provided id, it replaces the book's properties with the response data. Otherwise, it returns the book as is.

   // ### api ka use krke delete kiya hai
    const deletebookbyId = async (id) => {//iss method me id ko as a parameter lenge kuki by id 
        await axios.delete(`http://localhost:3001/books/${id}`)
        const updatedBooks = books.filter((book) => {//filter method ka use krte hai or book bhejte hai argument
            return book.id !== id;//abe ye technique hai...taaki (3!==3 )
        })
        setBooks(updatedBooks);
    }
    //This defines an asynchronous function deletebookbyId that takes id as a parameter. It uses axios to make a DELETE request to 'http://localhost:3001/books/${id}' to delete the book with the given id.
    // It then updates the books state by filtering out the book with the provided id from the existing books array.
    
    // ### create books me api ka use kiya hai...
    const createBook = async (title) => {//jo bhi title book Create component me use kiya hai ..wo as an argument us krega 
        const response = await axios.post('http://localhost:3001/books', {
            title: title
        });
        const updatedBooks = [...books, response.data //ye syntax use krte hai updation of arrays ke liye
            //{arrays ko use krne ke liye yahi method use hota hai...smjh le..
            // id:Math.round(Math.random()*9999),//unique ids ke liye
            // title:title//jo title hai wo title jayega }
        ];
        setBooks(updatedBooks);//whole app rerender afer creating each book
    }
    //This defines an asynchronous function createBook that takes title as a parameter. It uses axios to make a POST request to 'http://localhost:3001/books' with the new book's title in the request body. 
    //It awaits the response, extracts the data from the response, and updates the books state by adding the new book to the existing books array.

    const valueToShare ={
        books,//key:value //book-->list of books ke liye 
        deletebookbyId, //deleteBookByid - > book ko id wise delete krna
        editBookById, //editbookbyid --> book ko id wise edit krna
        createBook, //createbook --> book ko create krna
        fetchbooks //get api ke liye banaya hua function book ko show krne ke liye
    }
    //This creates an object valueToShare that contains the books state variable, as well as the deletebookbyId, editBookById, createBook, and fetchbooks functions.
    // This object will be shared with the components consuming the BookContext.
    return <BookContext.Provider value={valueToShare}>{children}</BookContext.Provider>
    //This returns the Provider component from the BookContext with the value prop set to valueToShare object, and the children passed as its child components.
    // This makes the valueToShare object accessible to all the nested components that consume the BookContext.
}
export{Provider};

export default BookContext;
      //This exports the Provider component as the named export and BookContext as the default export so that they can be imported and used in other files.