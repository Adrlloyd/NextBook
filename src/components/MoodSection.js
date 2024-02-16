import { Link } from "react-router-dom"

export default function MoodSection(){

  const list =[
    "Historic",
    "Fantasy",
    "Horror",
    "Myth",
    "Philosophy"
  ]

  return(
    <div className="mood-section">
      <div className="column1m">
        <img src="/img/books/book10.jpg" />
      </div>
      <div className="column2m">
        <h2 className="about-title">What are you in the mood for?</h2>
        {list.map((item, index) => (
          <li className="genre" key={index}>{item}</li>
        ))}
        <Link to="/authors" className="btn"> Surprise me</Link>
      </div>
  </div>
  )
}