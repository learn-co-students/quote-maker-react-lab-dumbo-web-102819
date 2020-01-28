

export default (state = [], action) => {
  switch(action.type) {
    case 'ADD_QUOTE':
      return [ ...state, action.quote ];
    case 'REMOVE_QUOTE':
      const filtered = state.filter(quote => quote.id !== action.quoteId);
      return filtered;
    case 'UPVOTE_QUOTE':
      const newState = [...state];
      newState.map(quote => {
        if(quote.id === action.quoteId) ++quote.votes
        return quote
      });
      return newState;
    case 'DOWNVOTE_QUOTE':
      const updateState = [...state];
      updateState.map(quote => {
        if(quote.id === action.quoteId && quote.votes > 0) --quote.votes
        return quote
      });
      return updateState;
    default:
      return state;
  }
}
