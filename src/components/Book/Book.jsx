import React from 'react';
import { Link } from 'react-router-dom';

// const [bookName,author]=books;
const Book = ({book}) => {
    console.log(book)
    const {bookId,image,bookName,author,category,rating,tags} =book;
    return (
       <Link to={`books/${bookId}`}>
           <div className="card p-5 border-2 border-gray-300 mb-5">
        <figure className='bg-gray-100 py-7'>
          <img className='h-[200px]'
            src={image}
            alt="Shoes" />
        </figure>
        <div className="card-body ">
         <div className='flex  justify-center gap-6'>
         {
            tags.map((tag,index) =><button key={index} className="btn btn-ghost bg-green-600 text-white">{tag}</button>)
          }
         </div>
          <h2 className="card-title text-2xl font-bold">
           {bookName}
          </h2>
          <p className='font-bold'>By:{author}</p>
          <div className='border-t-2 border-dashed my-4'></div>
          <div className="card-actions justify-between">
            <div className="badge badge-outline text-xl font-semibold">{category}</div>
            <div className='flex'>
            <div className="badge badge-outline text-xl font-semibold">{rating}</div>
       
            <div>
            <div className="rating rating-lg">
                  <input type="radio" name="rating-10" className="mask mask-star-2 bg-green-500" aria-label="5 star" />
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>
       </Link>
    );
};

export default Book;