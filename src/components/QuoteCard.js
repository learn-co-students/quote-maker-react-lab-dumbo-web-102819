import React from 'react';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes'
import { connect } from 'react-redux'


// const handleRemove = (event) => {
//   // console.log(event.target.value)
//   this.props.removeQuote(event.target.value)

// }

const QuoteCard = (props) => {
  const handleRemove = (event) => {
    // console.log(event.target.value)
    // console.log(props)
    props.removeQuote(props.quote.id)
  }

  const handleUpvote = (event) => {
    props.upvoteQuote(props.quote.id)
  }

  const handleDownvote = (event) => {
    props.downvoteQuote(props.quote.id)
  }

  return (
  <div>
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <blockquote className="card-blockquote">
          {/* <p>{Render Quote Content}</p> */}
          {props.quote.content}
          <footer>- {props.quote.author} <cite title="Source Title">{props.quote.author}</cite></footer>
        </blockquote>
      </div>
      <div className="float-right">
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
          <button
            onClick={handleUpvote}
            type="button"
            className="btn btn-primary"
          >
            Upvote
          </button>
          <button
            onClick={handleDownvote}
            type="button"
            className="btn btn-secondary"
          >
            Downvote
          </button>
          <button
            value={props.quote.id}
            onClick={handleRemove}
            type="button"
            className="btn btn-danger"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        {props.quote.votes}
        {/* <div>Votes: {Render Quote Votes}</div> */}
      </div>
    </div>
  </div>
  )
}
export default connect(state => ({ quotes: state.quotes }), { removeQuote, upvoteQuote, downvoteQuote })(QuoteCard);
