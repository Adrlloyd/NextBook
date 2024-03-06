import SetImage from "../../components/SetImage"
import { Link } from "react-router-dom"
export default function AboutSection(){
  const images = [
    "/img/books/book1.jpg",
    "/img/books/book2.jpg",
    "/img/books/book3.jpg",
    "/img/books/book4.jpg",
    "/img/books/book5.jpg",
    "/img/books/book6.jpg",
    "/img/books/book7.jpg",
    "/img/books/book8.jpg",
    "/img/books/book9.jpg",
  ]

  const AllImages = () => {
    return images.map((src, index) => (<SetImage key={index} imgSrc={src} pt={"150%"} alt={"book"} />))
  }

  return(
    <div className="section">
      <div className="column1">
        <h2 className="about-title">About Us</h2>
        <p className="info">
        Embark on a journey of literary exploration with NextBook, your ultimate destination for discovering the next captivating read that will transport you to new worlds and ignite your imagination. Whether you have cherished authors whose works never fail to captivate you, specific genres that resonate with your literary preferences, or beloved books that have left a lasting impression, our platform is designed to elevate your reading experience. 
        </p>
        <Link to="/books" className="btn"> Explore now </Link>
      </div>
      <div className="column2">
        <AllImages />
      </div>
    </div>
  )
}
