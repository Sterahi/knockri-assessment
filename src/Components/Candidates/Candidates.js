import React from 'react'
import { css, cx } from 'emotion'
import { Link } from 'react-router-dom'

export class Candidates extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      candidates: [],
      loading: false,
    }
  }

  getCandidates() {
    this.setState({ loading: true })
    fetch('http://localhost:3010/candidates').then((res) => res.json())
      .then((data) => {
        this.setState({
          candidates: data,
        })
      })
  }

  componentWillMount() {
    this.getCandidates()
  }

  render() {
    const candidates = this.state.candidates
    const candidateStyle = css`
      display:block;
      width:80%;
      margin: 0 auto;
      background-color: #eee;
      padding:15px;
      margin-bottom:10px;
      transition: ease box-shadow .3s;
      box-shadow: rgba(0,0,0,0.5) 3px 3px 3px;
      display:block;
      text-align:center;
      &:hover {
        box-shadow: rgba(0,0,0,0.3) 6px 6px 6px;
        transition: ease box-shadow .3s;
      }
    `
    const linkStyle = css`
      text-decoration: none;
      color: #222;
    `
    return (
      <div className={css`
        width:20vw;
        float: left;
        &:after{
          clear:both;
        }
      `}>
        <h2>Candidates: </h2>
        {
          candidates.map(candidate => {
            return (
              <Link 
                to={{
                  pathname: `/application/${candidate.applicationId}`,
                  state: {
                    applicant: candidate
                  }
                }} 
                key={candidate.id}
                className = {cx(linkStyle, 'link')}
              >
                <span
                  className={cx(candidateStyle, 'candidate')}
                >
                  {candidate.name}
                </span>
              </Link>
            )
          })
        }
      </div>
    )
  }
}
export default Candidates
