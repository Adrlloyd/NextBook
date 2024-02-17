import PreviousSearch from "../../components/PreviousSearch"
import BookCard from "./BookCard"

export default function Books(){
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
