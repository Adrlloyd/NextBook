import PreviousSearch from "../../components/PreviousSearch"
import AuthorBio from "./AuthorBio"
import axios from "axios"
import { useState, useEffect } from 'react'

export default function Authors(){
  const [authors, setAuthors] = useState([])
  const getAuthors = () => {
    axios.get('http://localhost:8000/authors')
      .then((response) => {
        const sortedAuthors = response.data.authors
        console.log(sortedAuthors)
        const randomizedAuthors = sortedAuthors.sort(() => Math.random() - 0.5)
        setAuthors(randomizedAuthors)
      })
  }

  useEffect(() => {
    getAuthors()
  }, [])

  const AllAuthors = () => {
    return authors.map((author, index) => <AuthorBio key={index} author={author} />)
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
