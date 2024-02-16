import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"

export default function AuthorBio({bio}){
  return(
    <div className="author-bio">
      <img className="author-img" src={bio.img}></img>
      <div className="author-info">
        <p className="author-name">{bio.name}</p>
        <p className="author-desc">Ο Κωνσταντίνος Δημόπουλος είναι ένα λαμπρό ταλέντο στον κόσμο της λογοτεχνίας, γεννημένος και μεγαλωμένος στην Αθήνα. Με μια παθιασμένη αγάπη για τον γραπτό λόγο από πολύ μικρή ηλικία, ο Δημόπουλος αναδεικνύεται ως ένας συγγραφέας που συνδυάζει τη φιλοσοφία με την καλλιτεχνική έκφραση.</p>
        <p className="author-genre">Genre: {bio.genre}</p>
        <p><a className="author-link" href="#!">View Author</a></p>
      </div>
    </div>
  )
}