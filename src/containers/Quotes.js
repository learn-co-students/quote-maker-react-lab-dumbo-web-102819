import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';

class Quotes extends Component {

  handleRemove = (id) => {
    this.props.removeQuote(id)
  }

  handleUpVote = (id) => {
    this.props.upvoteQuote(id)
  }

  handleDownvote = (id) => {
    this.props.downvoteQuote(id)
  }

  renderQuoteList = () => {
    return this.props.quotes.map(quote => {
      return (
        <QuoteCard 
          handleDownvote={this.handleDownvote}
          handleUpVote={this.handleUpVote}
          handleRemove={this.handleRemove} 
          key={quote.id} 
          quote={quote}
        />
      )
    })
  }
  
  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              { this.renderQuoteList() }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed
const mapStateToProps = (state) => {
  return { quotes: state.quotes }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeQuote: (id) => dispatch(removeQuote(id)),
    upvoteQuote: (id) => dispatch(upvoteQuote(id)),
    downvoteQuote: (id) => dispatch(downvoteQuote(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
