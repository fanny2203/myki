import React, { useEffect, useRef, useContext } from "react";
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import tagsLogo from '../../resources/icon/dashboard/tagLogo.svg'
import searchIcon from '../../resources/icon/dashboard/searchIcon.svg'
import addTag from '../../resources/icon/dashboard/addTag.svg'
import TagContext from "./TagContext";
import { UserMachineContext } from './userStateMachine.js'
import { TagTree } from "./TagTree.tsx";
import { TagDataExample } from "./TagDataExample.ts";

const Styles = {
    cardBackground: {
        backgroundColor: '#F8F8F8',
        boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)'
    },
    header: {
        backgroundColor: '#5400FF',
        padding: '15px 0px 15px 15px'
    },
    imgHeader: {
        border: '1px solid #FFF',
        padding: '5px',
        backgroundColor: '#FFF'
    },
    titleHeader: {
        fontSize: '20px',
        color: '#FFF',
        marginLeft: '10px'
    },
    content: {
        marginLeft: '3%',
        marginRight: '3%',
        paddingTop: '2%'
    },
    tags: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '2%'
    },
    tagText: {
        marginLeft: '12px'
    }
}

const Tag = () => {
    const isMounted = useRef(false);
    const { tags, getTags, addTagToUser } = useContext(TagContext) // eslint-disable-line
    const {machine} = useContext(UserMachineContext)
    const [state] = machine // eslint-disable-line
    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true
            getTags()
        }
    }, []) // eslint-disable-line

    const generateInput = (inputName, logo) => {
        let id = inputName.replaceAll(/\s/g,'') + 'Input'
        return (
            <div className="formItem">
                <Input
                    id = {id}
                    startAdornment = {
                        <InputAdornment position="start">
                            <img src={logo} alt={`${inputName} logo`}></img>
                        </InputAdornment>
                    }
                    fullWidth = {true}
                    placeholder = {inputName}
                />
            </div>
        )
    }

    return (
        <>
            <div className="flex-1 flex-col rounded-md" style={Styles.cardBackground}>
                <div className="flex flex-row items-center" style={Styles.header}>
                    <img className="rounded-md" style={Styles.imgHeader} src={tagsLogo} alt="tags logo"/>
                    <h1 className="font-eigrantch-mono" style={Styles.titleHeader}>Tags explorator</h1>
                </div>
                <div style={Styles.content}>
                    {generateInput('Search tag', searchIcon)}
                    <div style={{marginTop: '2%'}}>
                        <div style={Styles.tags}>
                            <button style={{backgroundColor: '#F8F8F8', border: '0px'}}>
                                <img src={addTag} alt="Add new tag button"/>
                            </button>
                            <p style={Styles.tagText}>Add a new tag</p>
                        </div>
                        <TagTree menu={TagDataExample}/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Tag