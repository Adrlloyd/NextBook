import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"

export default function AuthorCard({author}){
 
  return(
    <div className="author-card">
        <img src={author.img} />
      <div className="author-info">
        <h3 className="author-name">{author.name}</h3>
        <p className="book-count">Books: {author.books}</p>
        <p className="author-genre">Genre: {author.genre}</p>
        <p className="author-icons">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faInstagram} />
        </p>
      </div>
    </div>
  )
}