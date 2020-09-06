// すべてのReducerをまとめる

import { combineReducers } from 'redux'
import events from './events'

export default combineReducers({ events })
// 状態を管理したい他のものがある場合、使用するReducerを記載する