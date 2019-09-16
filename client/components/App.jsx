import React from 'react'
import {
  BrowserRouter as Router} from 'react-router-dom'
import Nav from './Nav'
import ErrorMessage from './ErrorMessage'
import LoadSubreddit from './LoadSubreddit'
import SubredditList from './SubredditList'
import WaitIndicator from './WaitIndicator'
import NASApod from './NASApod'


const App = () => (
  <Router>
    <div className='app'>
      <Nav />
      <NASApod />
      <ErrorMessage />
      <LoadSubreddit>
        <WaitIndicator />
      </LoadSubreddit>
      <SubredditList />   
    </div>
  </Router>
)

export default App
