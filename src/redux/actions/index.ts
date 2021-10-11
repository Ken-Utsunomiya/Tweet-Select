import { ActionType } from '../action-types'

interface SearchTweetsAction {
  type: ActionType.SEARCH_TWEETS
}

interface SearchTweetsSuccessAction {
  type: ActionType.SEARCH_TWEETS_SUCCESS,
  payload: string[]
}

interface SearchTweetsErrorAction {
  type: ActionType.SEARCH_TWEETS_ERROR,
  payload: string[]
}

export type Action = 
  | SearchTweetsAction
  | SearchTweetsSuccessAction
  | SearchTweetsErrorAction
