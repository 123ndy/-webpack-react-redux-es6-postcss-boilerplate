export default function reducer(state={
  tweets: [],
  fetching: false,
  fetched: false,
  error: null,
}, action) {

  switch (action.type) {
    case 'FETCH_TWEETS': {
      return {...state, fetching: true}
    }
    case 'FETCH_TWEETS_REJECTED': {
      return {...state, fetching: false, error: action.payload}
    }
    default: {
      return state
    }
  }
}
