import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'

class LoadSubreddit extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      input: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.setState({
      input: e.target.value
    })
  }

  render () {
    return (
      <div>
        <input value={this.state.input} onChange={this.handleChange}></input>
        <button onClick={() => this.props.dispatch(fetchPosts(this.state.input))}>
        Fetch Posts
        </button>
      </div>
    )
  }
}

// const LoadSubreddit = ({children, dispatch}) => (
//   <div>
//     <button onClick={() => dispatch(fetchPosts('niue'))}>
//       Fetch Posts
//     </button>
//     {children}
//   </div>
// )

export default connect()(LoadSubreddit)
