import {useReducer} from "react"
import TagReducer from './TagReducer.js'
import TagContext from "./TagContext.js"
//import axios from "axios"

const TagState = (props) => {
    const initialState = {
        tags: [],
        addedTags: []
    }

    const [state, dispatch] = useReducer(TagReducer, initialState)
    
    const getTags = () => {
        dispatch({
            type: 'GET_TAGS',
            payload: ['Tag1', 'Tag2', 'Tag3']
        })
    }

    const getTagsAdded = () => {
        dispatch({
            type: 'GET_TAGS_ADDED',
            payload: ['Tag 5', 'Tag 6', 'Tag 7', 'Tag 8']
        })
    }
    
    const addTagToUser = (tag) => {
        dispatch({
           type: 'GET_ADD_TAG_TO_USER',
           payload: tag
        })
    }
    
    const removeTag = (tag) => {
        dispatch({
            type: 'REMOVE_TAG',
            payload: tag
        })
    }
    
    const addTagToCollection = () => {
    
    }

    return (
        <TagContext.Provider value={{
            tags: state.tags,
            addedTags: state.addedTags,
            getTags,
            addTagToUser,
            removeTag,
            addTagToCollection,
            getTagsAdded
        }}>
            {props.children}
        </TagContext.Provider>
    )

}

export default TagState