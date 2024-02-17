import PreviousSearch from "../../components/PreviousSearch"
import AuthorBio from "./AuthorBio"

export default function Authors(){
  const authorsBio = [
    {
      name: "Homer",
      img: "/img/authors/author1.jpg",
      books: "2",
      genre: "Historical",
      desc: "made up info"
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
  ].sort(() => Math.random() - 0.5)

  const AllAuthors = () => {
    return authorsBio.map(bio => <AuthorBio key={bio.name} bio={bio} />)
  }

  return(
    <div>
      <PreviousSearch />
      <div className="authors-container">
        <AllAuthors />
      </div>
    </div>
  )
}
