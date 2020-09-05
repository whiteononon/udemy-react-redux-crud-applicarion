// すべてのReducerをまとめる

import { combineReducers } from 'redux'
import count from 'count'

export default combineReducers({ count })
// 状態を管理したい他のものがある場合、使用するReducerを記載する