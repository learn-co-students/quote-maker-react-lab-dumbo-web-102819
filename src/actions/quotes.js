// TODO: Create action creators as defined in tests
export function addQuote (newQ) {
    return { 
        type: 'ADD_QUOTE',
        quote: newQ
    }
}

export function removeQuote(quoteid) {
    return {
        type: 'REMOVE_QUOTE',
        quoteId: quoteid
    }
}

export function upvoteQuote(quoteid) {
    return {
        type: 'UPVOTE_QUOTE',
        quoteId: quoteid
    }
}


export function downvoteQuote(quoteid) {
    return {
        type: 'DOWNVOTE_QUOTE',
        quoteId: quoteid
    }
}