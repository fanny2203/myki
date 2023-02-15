import {
    GET_TAGS,
    GET_ADD_TAG_TO_USER,
    REMOVE_TAG,
    GET_TAGS_ADDED
} from './types.js'

export default (state, action) => { // eslint-disable-line
    const {payload, type} = action
    
    switch (type) {
        case GET_TAGS:
            return {
                ...state,
                tags: payload
            }
        case REMOVE_TAG:
            const filteredTags = state.addedTags.filter((datum) => {
                if (datum !== payload) return datum
                else return false
            })
            return {
                ...state,
                addedTags: filteredTags
            }
        case GET_TAGS_ADDED:
            return {
                ...state,
                addedTags: payload
            }
        case GET_ADD_TAG_TO_USER:
            if (!state.addedTags.includes(payload)) {
                return {
                    ...state,
                    addedTags: [...state.addedTags, payload]
                }
            }
            else return state;
        default:
            return state
    }
}