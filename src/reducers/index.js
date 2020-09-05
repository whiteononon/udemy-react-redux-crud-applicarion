// すべてのReducerをまとめる

import { combineReducers } from 'redux'
import count from './count'
import count2 from './count2'

export default combineReducers({ count, count2 })
// 状態を管理したい他のものがある場合、使用するReducerを記載する