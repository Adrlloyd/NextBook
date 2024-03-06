import AuthorCard from "../../components/AuthorCard"
import axios from "axios"
import { useState, useEffect } from 'react'

export default function Authors(){
  const [authors, setAuthors] = useState([])
  const getAuthors = () => {
    axios.get('http://localhost:8000/authors')
      .then((response) => {
        const sortedAuthors = response.data.authors
        setAuthors(sortedAuthors)
      })
  }

  useEffect(() => {
    getAuthors()
  }, [])
  
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
