import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
    const [books, setBooks] =useState([]);
    useEffect(()=>{
        fetch('./booksData.json')
        .then(res =>res.json())
        .then(data =>setBooks(data))
    },[])
    return (
        <div>
            <h2 className='text-4xl font-bold text-center'>Books</h2>
            {/* <p>{books.length}</p> */}
            <div className='grid grid-cols-3 gap-10'>
                {
                 books.map(book=><Book book={book} key={book.bookId}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;

/**
 * 1.state to store book
 * 2.useEffect
 * 3.Fetch to load data
 * 4.set the data to the books state
 */