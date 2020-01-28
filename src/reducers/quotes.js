export default (state = [], action) => {

   switch (action.type) {
     case "ADD_QUOTE":
      return state = [...state, action.quote]
     
     case "REMOVE_QUOTE":
       return state = [...state].filter(e => e.id !== action.quoteId)

    case "UPVOTE_QUOTE":
      let quote=[...state].find(e => e.id === action.quoteId)
          quote.votes = quote.votes + 1
      let newArr = [...state].filter(e => e.id !== action.quoteId)
          newArr.push(quote)
      return state = newArr
        
    case "DOWNVOTE_QUOTE":
      let quoteDown=[...state].find(e => e.id === action.quoteId)
          if (quoteDown.votes > 0) {
            quoteDown.votes = quoteDown.votes - 1
          }
          
      let newArray = [...state].filter(e => e.id !== action.quoteId)
          newArray.push(quoteDown)
      return state = newArray

      
     default:
       return state
   }
    
  
  
}
