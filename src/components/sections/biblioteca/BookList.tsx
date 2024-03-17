import React from 'react';
import Book from './Book';
import { bookType } from '@/types/bookTypes';
import bookList from '@/data/books.json';

function BookList() {
  return (
    <>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-8">
        { bookList.map((book: bookType) => <Book key={book.title} data={book} />)}
      </div>
    </>
  )
}

export default BookList