import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import BooksManager from './component/BookManager';
import CreationBook from './component/CreationBook';
import EditionBook from './component/EditionBook';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<BooksManager />} />
      <Route path='/books/create' element={<CreationBook />} />
      <Route path='/books/edit/:id' element={<EditionBook />} />
    </Routes>
    </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
