

export default (state = [], action) => {
  let index; 
  let tempFind;
  switch(action.type) {
    case 'ADD_QUOTE': 
      // console.log(state, action)
      return [...state, action.quote]

    case 'REMOVE_QUOTE': 
      // console.log("REMOVE", action)
      index = state.findIndex( quote => quote.id === action.quoteId)
      return [...state.slice(0, index), ...state.slice(index + 1)]

    case 'UPVOTE_QUOTE': 
    // console.log("UPVOTE")
      index = state.findIndex( quote => quote.id === action.quoteId )
      tempFind = {...state.find( quote => quote.id === action.quoteId)}
      tempFind.votes += 1

      return [...state.slice(0, index), tempFind, ...state.slice(index + 1)]

      case 'DOWNVOTE_QUOTE': 
      // console.log("UPVOTE")
        index = state.findIndex( quote => quote.id === action.quoteId )
        tempFind = {...state.find( quote => quote.id === action.quoteId)}
        if (tempFind.votes > 0){
          tempFind.votes -= 1
        }
  
        return [...state.slice(0, index), tempFind, ...state.slice(index + 1)]

    default: 
      return state; 
  }
}

