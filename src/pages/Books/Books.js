import PreviousSearch from "../../components/PreviousSearch"
import BookCard from "./BookCard"
import axios from "axios"
import { useState, useEffect } from 'react'

export default function Books(){
  // sets `book` to an empty array and it returns a function called `setBooks` to set the value of `books`
  const [books, setBooks] = useState([])
  const getBooks = () => {
    axios.get('http://localhost:8000/books')
      .then((response) => {
        const sortedBooks = response.data.books
        // randomizes it to match pages current functionality
        const randomizedBooks = sortedBooks.sort(() => Math.random() - 0.5)
        setBooks(randomizedBooks)
      })
  }

  useEffect(() => {
    getBooks()
  }, [])
  
  const AllBooks = () => {
    return books.map((book, index) => <BookCard key={index} book={book} />)
  }

  return(
    <div>
      <PreviousSearch />
      <div className="books-container">
        <AllBooks />
      </div>
    </div>
  )
}