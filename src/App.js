import _ from './env.js'
import { GiphyFetch } from '@giphy/js-fetch-api'
import { useState } from 'react'
import TextList from './components/TextList' 
import Error from './components/Error'
import './App.css'
/* dotenv.config() */


const {REACT_APP_GIPHY_KEY} = process.env
const giphy = new GiphyFetch(REACT_APP_GIPHY_KEY)

function App() {
  const [text, setText] = useState('')
  const [results, setResults] = useState([])
  const [err, setErr] = useState(false)

  const handleInput = (event) => {
    setText(event.target.value)
  }

  const handleSubmit = (event) => {
    if (text.length === 0) {
      //set error state to true
      setErr(true)
      return
    }
    console.log(text)

    const apiCall = async () => {
      const res = await giphy.animate(text, {limit: 20})
      console.log(res.data)
      setResults(res.data)
    }

    apiCall()
    setText('')
    setErr(false)

  }

  return (
    <div className="App">
      <h1>Animated Text Generator</h1>
      <h3>Type text into the form and hit submit</h3>
      <input className='input-field' value={text} onChange={handleInput} type='text' />
      <button className='submit-btn' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default App
