import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes'

class Quotes extends Component {

  // mapAllQuotes = () => {
  //   return this.props.quotes.map((quote) => {
  //     return < QuoteCard key={quote.id} quote={quote} removeQuote={this.props.removeQuote} /> 
  //   })
  // }

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
              {/* {this.mapAllQuotes()} */}
              {this.props.quotes.map((quote)=> <QuoteCard downvoteQuote={this.props.downvoteQuote} upvoteQuote={this.props.upvoteQuote} key={quote.id} quote={quote} removeQUote={this.props.removeQuote} /> )}
              {/*
                TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */}

            </div>
          </div>
        </div>
      </div>
    );
  }
}; 

//add arguments to connect as needed

export default connect(state => ({ quotes: state.quotes }), { removeQuote, upvoteQuote, downvoteQuote } )(Quotes)