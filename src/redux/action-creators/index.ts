import axios from 'axios'
import { Dispatch } from 'redux'
import { Action } from '../actions'
import { ActionType } from '../action-types'

export const searchTweets = (id: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_TWEETS
    })
  }

  // Get tweets with the given id

  // Dispatch SUCCESS or ERROR
}
