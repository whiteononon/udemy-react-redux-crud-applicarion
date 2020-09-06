// すべてのReducerをまとめる
import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import events from './events'

export default combineReducers({ form, events })
// 状態を管理したい他のものがある場合、使用するReducerを記載する