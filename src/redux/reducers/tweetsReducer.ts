import { ActionType } from '../action-types'
import { Action } from '../actions'

interface TweetsState {
  loading: boolean
  error: string | null
  data: string[]
}

const initialState = {
  loading: false,
  error: null,
  data: []
}

const reducer = (
  state: TweetsState = initialState,
  action: Action
): TweetsState => {
  switch (action.type) {
    case ActionType.SEARCH_TWEETS:
      return { loading: true, error: null, data: [] }
    case ActionType.SEARCH_TWEETS_SUCCESS:
      return { loading: false, error: null, data: action.payload }
    case ActionType.SEARCH_TWEETS_ERROR:
      return { loading: false, error: action.payload[0], data: [] }
    default:
      return state
  }
}

export default reducer
