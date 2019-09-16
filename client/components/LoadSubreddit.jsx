import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'

class LoadSubreddit extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      errorMessage: '',
      subreddits: []
    }
  }

  changeHandler = (e) => {
    this.setState({
      subreddits: e.target.value
    })
  }

  render () {
    return (
      <div className='fetch-btn'>
        <input type="text" onChange={this.changeHandler}></input>
        <button onClick={() => this.props.dispatch(fetchPosts(this.state.subreddits))}>
          Fetch Posts
        </button>
        {/* <input type="text" onChange={this.changeHandler}></input>
        <button onClick={() => this.props.dispatch(fetchNews(this.state.newPost))}>
          Fetch News
        </button> */}
        {this.props.children}
      </div>
  )
}
}

export default connect()(LoadSubreddit)
