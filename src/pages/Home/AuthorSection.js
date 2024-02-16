import AuthorCard from "../../components/AuthorCard"

export default function AuthorSection(){
  const authors = [
    {
      name: "Homer",
      img: "/img/authors/author1.jpg",
      books: "2",
      genre: "Historical"
    },
    {
      name: "Steven Pressfield",
      img: "/img/authors/author2.jpg",
      books: "20",
      genre: "Historical Fiction, nonfiction"
    },
    {
      name: "Ryan Holiday",
      img: "/img/authors/author3.jpg",
      books: "10",
      genre: "Nonfiction"
    },
    {
      name: "Neil Gaiman",
      img: "/img/authors/author4.jpg",
      books: "36",
      genre: "Fiction, Myth"
    },
    {
      name: "Stephen King",
      img: "/img/authors/author5.jpg",
      books: "40",
      genre: "Horror"
    },
    {
      name: "J.R.R. Tolkien",
      img: "/img/authors/author6.jpg",
      books: "38",
      genre: "Fantasy"
    }
  ]

  const AllAuthors = () => {
    return authors.map(author => <AuthorCard key={author.name} author={author} />)
  }
  
  return(
    <div className="author-section">
     <h2 className="title">Our Top Authors</h2>
     <div className="author-container">
       <AllAuthors />
     </div>
    </div>
  )
}
