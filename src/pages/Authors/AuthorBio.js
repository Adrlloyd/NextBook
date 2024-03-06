export default function AuthorBio({author}){
  return(
    <div className="author-bio">
      <img className="author-img" src={author.authorImg} alt="bio" />
      <div className="author-info">
        <p className="author-name">{author.name}</p>
        <p className="author-desc">{author.bio}</p>
        <p className="author-genre">Genre: {author.genre}</p>
        <p><a className="author-link" href="#!">View Author</a></p>
      </div>
    </div>
  )
}
