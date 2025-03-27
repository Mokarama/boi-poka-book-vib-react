import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetail = () => {
    // const param =useParams();
    // console.log(param)
    const {bookId} =useParams();
    console.log(bookId);
    const id =parseInt(bookId);

    const data =useLoaderData();
    console.log(data);

    // console.log(typeof bookId,typeof id, typeof data[0].bookId)

    const book =data.find(book =>book.bookId === id);
    // console.log(book);

    const {image,bookName,author,review,tags,totalPages,publisher,yearOfPublishing,rating} =book;
    return (
        <div>
            {/* <h2>Book Details:{bookId}</h2> */}

                <div className="hero min-h-screen border-2 mb-2 rounded-lg border-gray-100">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                    src={image}
                    className="h-[564px] rounded-lg  border-2 border-gray-200 p-10" />
                    <div>
                    <h1 className="text-5xl font-bold">{bookName}</h1>
                    <p className="py-6 text-2xl font-semibold">By:{author} </p>
                    <div className="divider"></div>
                    <h3 className='text-xl'>Fiction</h3>
                    <div className="divider"></div>
                    <p><span className='font-bold'>Review:</span>{review}</p>

                <div className='flex gap-20 my-4'>
                    <div><h2 className='text-xl'>Tag</h2></div>
                 <div className='flex justify-center gap-20'>
                 {
                            tags.map(tag=><button type="submit" className="btn text-green-500 text-xl">{tag}</button>)
                        }
                 </div>
                </div>
                <div className="divider m-3"></div>
                <section>
                    <div className='flex flex-col mb-8'>
                        <h5> <span className='pr-10'>Number of Pages:</span>{totalPages}</h5>
                        <p><span className='pr-20'>Publisher:</span>{publisher}</p>
                        <p><span className='pr-8'>Year of Publishing:</span>{yearOfPublishing}</p>
                        <p><span className='pr-28'>Rating:</span>{rating}</p>
                       
                    </div>
                </section>
                      <div className='flex gap-10'>
                      <button className="btn border-2 border-gray-200 px-12">Read</button>
                      <button className="btn bg-[#50B1C9] px-12 text-white">Wishlist</button>
                      </div>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default BookDetail;