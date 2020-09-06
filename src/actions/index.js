import axios from 'axios'

export const READ_EVENTS = 'READ_EVENTS'
export const CREATE_EVENTS = 'CREATE_EVENTS'

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

export const readEvents = () => async dispath => {
    const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
    dispath({ type: READ_EVENTS, response })
}

export const postEvents = values => async dispath => {
    const response = await axios.post(`${ROOT_URL}/events${QUERYSTRING}`, values)
    dispath({ type: CREATE_EVENTS, response })
}