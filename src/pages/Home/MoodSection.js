import { Link } from "react-router-dom"

export default function MoodSection(){

  const list =[
    "Historic",
    "Fantasy",
    "Horror",
    "Myth",
    "Philosophy"
  ]

  const AllGenres = () => {
    return list.map((item, index) => <li className="genre" key={index}>{item}</li>)
  }

  return(
    <div className="mood-section">
      <div className="column1m">
        <img src="/img/library.jpg" alt="book library" />
      </div>
      <div className="column2m">
        <h2 className="about-title">What are you in the mood for?</h2>
        <AllGenres />
        <Link to="/authors" className="btn"> Surprise me</Link>
      </div>
    </div>
  )
}
