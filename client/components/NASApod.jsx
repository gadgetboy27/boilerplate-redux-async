import React from 'react'
import request from 'superagent'

const apodUrl = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'


class NASApod extends React.Component {
    state = {
        title: '',
        url: ''
    }

    componentDidMount () {
        request.get(apodUrl)
            .then(res => {
                const {title, url} = res.body
                this.setState({ title, url})
            })
            .catch(err => {
                res.status(500).send(err.message)
            })
    }

    render () {
      return (
          <>
          <h2>Today:{' '}{this.state.title}</h2>
          <iframe 
            width='100%'  
            height='100%'
            src={this.state.url}
            allow='accelerometer; autoplay; encrypted-media; gyroscope, picture-in-picture'
            allowFullScreen={true}>
            </iframe>
          </>
      )
    }
}

export default NASApod