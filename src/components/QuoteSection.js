import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import{ faQuoteLeft } from "@fortawesome/free-solid-svg-icons"

export default function QuoteSection(){
  return(
    <div className="quote">
      <p className="text"><FontAwesomeIcon icon={faQuoteLeft} /> Books make great gifts because they have whole worlds inside of them. And it's much cheaper to buy somebody a book than it is to buy them the whole world!”</p>
      <p className="author">― Neil Gaiman</p>    
    </div>
  )
}