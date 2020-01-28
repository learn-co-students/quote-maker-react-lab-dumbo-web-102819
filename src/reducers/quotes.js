export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      
      return [...state,action.quote]
    
    case 'REMOVE_QUOTE':
      let idx = state.findIndex(book => book.id === action.quoteId)
      return [...state.splice(0,idx),...state.splice(idx + 1)]

    case 'UPVOTE_QUOTE':
      let index = state.findIndex(book => book.id === action.quoteId)  
      let newQuote = {...state[index],votes: state[index].votes + 1 }    
      return [...state.splice(0,index),newQuote,...state.splice(index + 1)]
    
      case 'DOWNVOTE_QUOTE':
      
      let indx = state.findIndex(book => book.id === action.quoteId)  
      return {...state[indx]}.votes <= 0 ? state : [...state.splice(0,indx),{...state[indx],votes: state[indx].votes - 1 } ,...state.splice(indx + 1)]

    default:
      return state
  }
}
