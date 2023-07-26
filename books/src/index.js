import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from './context/book';
//The first line imports the CSS file index.css. This file likely contains styles for the application.
//The second line imports the React library, which is required to use React components.
//The third line imports ReactDOM from react-dom/client. This is the package responsible for rendering React components into the DOM.
//The fourth line imports the App component from the './App' file.
//The fifth line imports the Provider component from the './context/book' file. This is the provider component created for the BookContext.

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);
//The first line uses document.getElementById to get the DOM element with the ID 'root'.
// This is the element where the React application will be rendered.
//The second line uses ReactDOM.createRoot to create a root for the React application, passing in the el element obtained in the previous line.

root.render(
<Provider >
<App/>
</Provider>
);
//This code renders the application using root.render(). Inside the render function, it wraps the App component with the Provider component. 
//This means that all the components within the App component will have access to the data and functions provided by the Provider through the BookContext.
