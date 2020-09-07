import _ from 'lodash'
import { READ_EVENTS, READ_EVENT, DELETE_EVENT, UPDATE_EVENT, CREATE_EVENT } from '../actions/index'

export default (events = {}, action) => {
    switch (action.type) {
        case READ_EVENTS:
            // 配列を回して、引数を元にオブジェクト内部の値を取得し、オブジェクトに付与する
            return _.mapKeys(action.response.data, 'id')
        case READ_EVENT:
        case UPDATE_EVENT:
        case CREATE_EVENT:
            const data = action.response.data
            return { ...events, [data.id]: data }
        case DELETE_EVENT:
            delete events[action.id]
            return { ...events }
        default:
            return events
    }
}