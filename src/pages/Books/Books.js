import PreviousSearch from "../../components/PreviousSearch"
import BookCard from "./BookCard"
import axios from "axios"




export default function Books(){
  // below axios code not implemented as currently not working, site still running of static array
  axios.get('http://localhost:8000/books')
  .then(function (response) {
  // pulls out just the array of books data
    const sortedBooks = response.data.books
  // randomizes it to match pages current functionality
    const randomizedBooks = sortedBooks.sort(() => Math.random() - 0.5)
    console.log(randomizedBooks)
  // code below not working as expected WIP
    const AllBook = () => {
      return randomizedBooks.map((book, index) => <BookCard key={index} book={book} />)
  }})
  
  const books = [
    {
      title: "The Iliad",
      img: "/img/books/book1.jpg",
      authorImg: "/img/authors/author1.jpg"
    },
    {
      title: "The Odyssey",
      img: "/img/books/book2.jpg",
      authorImg: "/img/authors/author1.jpg"
    },
    {
      title: "Gates Of Fire",
      img: "/img/books/book3.jpg",
      authorImg: "/img/authors/author2.jpg"
    },
    {
      title: "Meditations",
      img: "/img/books/book4.jpg",
      authorImg: "/img/authors/author3.jpg"
    },
    {
      title: "The Daily Stoic",
      img: "/img/books/book5.jpg",
      authorImg: "/img/authors/author3.jpg"
    },
    {
      title: "The Fellowship Of The Ring",
      img: "/img/books/book6.jpg",
      authorImg: "/img/authors/author6.jpg"
    },
    {
      title: "Norse Mythology",
      img: "/img/books/book7.jpg",
      authorImg: "/img/authors/author4.jpg"
    },
    {
      title: "Pet Sematary",
      img: "/img/books/book8.jpg",
      authorImg: "/img/authors/author5.jpg"
    },
  ].sort(() => Math.random() - 0.5)

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