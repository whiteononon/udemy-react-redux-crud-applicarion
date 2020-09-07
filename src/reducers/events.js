import _ from 'lodash'
import { READ_EVENTS, DELETE_EVENT } from '../actions/index'

export default (events = {}, action) => {
    console.log(events);
    console.log(action);
    switch (action.type) {
        case READ_EVENTS:
            // 配列を回して、引数を元にオブジェクト内部の値を取得し、オブジェクトに付与する
            return _.mapKeys(action.response.data, 'id')
        case DELETE_EVENT:
            delete events[action.id]
            return { ...events }
        default:
            return events
    }
}