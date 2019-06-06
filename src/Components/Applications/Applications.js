import React from 'react'
import { css, cx } from 'emotion'

import Video from '../Video/Video'
export class Applications extends React.Component {
  state = {
    application: [],
    questions: []
  }
  getApplication() {
    let array = []
    fetch(`http://localhost:3010/applications/${this.props.location.state.applicant.applicationId}`).then(res => {
      return res.json()
    }).then(data => {
      if (data.videos !== undefined) {
        data.videos.map(questions => {
          fetch(`http://localhost:3010/questions/${questions.questionId}`).then(res => {
            return res.json()
          }).then(data => {
            array.push(data.question)
            return data.question
          }).then(() => {
            this.setState({
              questions: array
            })
          })
          return array
        })
        this.setState({
          candidate: this.props.location.state.applicant,
          application: data.videos
        })
        return data
      } else {
        this.setState({
          candidate: this.props.location.state.applicant,
          application: []
        })
      }
    })
  }
  componentWillMount() {
    this.getApplication()
  }
  componentDidUpdate() {
    if (this.props.location.state.applicant !== this.state.candidate) {
      this.setState({
        candidate: this.props.location.state.applicant,
        application: []
      }, () => {
        this.getApplication()
      })
    }
  }
  render() {
    const { application, questions } = this.state
    const applicant = this.props.location.state.applicant
    const container = css`
        float: left;
        width: 69vw;
        margin-left: 20px;
        &:after {
            clear:both;
        }
    `
    if (application.length > 0) {
      return (
        <div
          className={cx(container, 'container')}
        >
          <h2>Application for <u>{applicant.name}</u> </h2>
          {
            (application).map((videos, index) => {
              return (
                <Video
                  video={application}
                  questions={questions}
                  index={index}
                  applicantId={applicant.applicationId}
                  key={index}
                />
              )
            })
          }
        </div >
      )
    } else {
      return (
        <div
          className={cx(container, 'container')}
        >
          <h2>Application for <u>{applicant.name}</u></h2>
          <p>
            No answers were found for {applicant.name}.
                   </p>
        </div>
      )
    }
  }
}
export default Applications