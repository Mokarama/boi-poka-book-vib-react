import React from 'react';

// const [bookName,author]=books;
const Book = ({book}) => {
    console.log(book)
    const {bookName,image} =book;
    return (
        <div className="card p-5 border-2 border-gray-300 mb-5">
        <figure className='bg-gray-100 py-7'>
          <img className='h-[200px]'
            src={image}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
           {bookName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    );
};

export default Book;