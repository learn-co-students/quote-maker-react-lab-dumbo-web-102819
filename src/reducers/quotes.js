import uuid from 'uuid';

export default (state = [], action) => {
  let newVotes = {}
  let idx; 
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]
    case 'REMOVE_QUOTE': 
      idx = state.findIndex(quote => quote.id === action.quoteId)
      return [...state.slice(0, idx), ...state.slice(idx + 1)]
    case 'UPVOTE_QUOTE': 
      idx = state.findIndex(quote => quote.id === action.quoteId)
      // console.log(state[idx].votes)
      newVotes = { votes: state[idx].votes + 1 }
      // newVotes.votes = newVotes.votes + 1  
      // console.log(newVotes)
      return [...state.slice(0, idx), {...state[idx], ...newVotes}, ...state.slice(idx + 1)]
    case 'DOWNVOTE_QUOTE': 
      idx = state.findIndex(quote => quote.id === action.quoteId)
      if (state[idx].votes > 0) {
        newVotes = { votes: state[idx].votes - 1 }
      } else {
        newVotes = { votes: 0 }
      }
      return [...state.slice(0, idx), {...state[idx], ...newVotes}, ...state.slice(idx + 1)]
    default: 
      return state
  }
  // return state;
}
