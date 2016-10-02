export default function reducer(state={
  user: {
    id: null,
    name: null,
    age: null
  },
  fetching: false,
  fetched: false,
  error: false
}, action) {

  switch (action.type) {
    case 'FETCH_USER': {
      return {...state, fetching: true}
    }
    case 'FETCH_USER_REJECTED': {
      return {...state, fetching: false, error: action.payload}
    }
    case 'FETCH_USER_FULFILLED': {
      return {...state, user: action.payload, fetching: false, error: action.payload}
    }
    default: {
      return state
    }
  }
}
