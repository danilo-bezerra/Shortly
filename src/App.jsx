import { useState } from 'react'
// import logo from './logo.svg'
import './App.css'

import ShortLink from './components/ShortLink'
import Header from './components/Header'
import InputForm from './components/InputForm'

function App() {
  const [shortLinks, setShortLinks] = useState([]);

  console.log(shortLinks)

  return (
    <div className="App">
      <Header />
      <InputForm setShortLinks={setShortLinks}/>
      {
        shortLinks.map((shortLink, index) => {
          const url = shortLink[0];
          const shortUrl = shortLink[1];

          return <ShortLink key={index} url={url} shortUrl={shortUrl}/>
        })
      }
    </div>
  )
}

export default App
