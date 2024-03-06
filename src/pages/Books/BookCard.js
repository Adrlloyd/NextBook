import SetImage from  "../../components/SetImage"

export default function BookCard({book}){
  return(
    <div className="book-card">
      <SetImage imgSrc={book.img} pt="100%" alt={book.title} />
      <div className="book-info">
        <img className="author-img" src={book.authorImg} alt="author" />
        <p className="book-title">{book.title}</p>
        <p className="book-desc">{book.desc}</p>
        <a className="book-link" href="#!">View Book</a>
      </div>
    </div>
  )
}