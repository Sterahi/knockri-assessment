import React from 'react'

import { css } from 'emotion'

// const Video = ({ video, questions, applicantId, index }) => {
class Video extends React.Component {
  state = {
    input: ''
  }
  commentUpdate(data) {
    this.setState({
      input:''
    })
    const {
      video,
      applicantId,
      index
    } = this.props
    video[index].comments = data
    let update = {
      "id": 171,
      "videos": video
    }
    fetch(`http://localhost:3010/applications/${applicantId}`, {
      method: "PUT",
      body: JSON.stringify(update),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      console.log(res)
      return res.json()
    }).catch(
      error => console.error('Error: ', error)
    )
  }
  handleInput = input => {
    this.setState({input})
  }
  render() {
    const {
      video,
      questions,
      index
    } = this.props
    return (
      <div>
        <div>
          <p>Question # {index}: {questions[index]}</p>
          <video className={css`width:69vw`} controls>
            <source src={video[index].src} type="video/mp4"></source>
          </video>
          <div>
            <strong>Notes:</strong>
            <textarea 
              className={css`
                display:block;
                width:100%;
                height:150px;
                resize: none;
                margin:20px 0;
              `}
              onChange={e => this.handleInput(e.target.value)}
            >

            </textarea>
            <button
              onClick={() => this.commentUpdate(this.state.input)}
            >Save Comment</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Video