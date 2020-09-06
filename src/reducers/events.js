import _ from 'lodash'
import { READ_EVENTS } from '../actions/index'

export default (events = {}, action) => {
    switch (action.type) {
        case READ_EVENTS:
            // 配列を回して、引数を元にオブジェクト内部の値を取得し、オブジェクトに付与する
            return _.mapKeys(action.response.data, 'id')
        default:
            return events
    }
}