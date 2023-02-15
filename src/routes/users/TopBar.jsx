import React, {useContext} from "react";
import {UserMachineContext} from './userStateMachine.js'

//Globals
import { useSelector } from "react-redux";


const TopBar = ({title, highlightData, userDataFunction, userConnectionFunction, isViewing}) => {
    //const [state, send]
    const {machine, changeValidation} = useContext(UserMachineContext)
    const [state, send] = machine
    const { primaryColor } = useSelector((state) => state.theme.theme);

    const verifyNotEmptyString = (value) => {
        if (value.length === 0 || value === "") {
          return false;
        }
        return true;
    };
    const validateForm = () => {
        //document.getElementById('employeesID'),
        //document.getElementById('rolSelectorID')
        let inputs = [
            'Name',
            'LastName',
            'Email',
            'ConfirmEmail',
            'password',
            'confirmPassword',
            'Company',
        ]
        for (let input of inputs) {
            if (!verifyNotEmptyString(document.getElementById(input).value)) {
                changeValidation(input)
            }
        }
    }
    const lastButton = isViewing ? <button  style={{ background: primaryColor }} className="bg-color-primary rounded-full px-[35px] h-9 p-2 flex items-center justify-center text-white gap-1 capitalize" 
                                        onClick={() => send('edit')}>Edit</button> :
                                    <button  style={{ background: primaryColor }} className="bg-color-primary rounded-full px-[35px] h-9 p-2 flex items-center justify-center text-white gap-1 capitalize" 
                                        onClick={validateForm}>Save</button>
    const userStyle = highlightData ? Styles.selectedOptionStyle : Styles.nonSelectedOptionStyle
    const dataStyle = !highlightData ? Styles.selectedOptionStyle : Styles.nonSelectedOptionStyle
    return (
        <div style={Styles.container}>
            <div style={{flex: 1}}>
                <h1 className="font-medium text-2xl font-eigrantch-mono">{title}</h1>
            </div>
            {state.matches('idle') ?  <button  style={{ background: primaryColor }} className="bg-color-primary rounded-full px-[35px] h-9 p-2 flex items-center justify-center text-white gap-1 capitalize"
             onClick={() => send('create')}>New user</button> :
            <div style={{display: 'flex', justifyContent: 'flex-end', flex:1}}>
                <button style={{marginRight: '22px'}} onClick={() => send('back')}>{'<<'}</button>
                <button style={userStyle} onClick={userDataFunction}>User data</button>
                <button style={dataStyle} onClick={userConnectionFunction}>Connections</button>
                {lastButton}
            </div>}
        </div>
    )
}

const Styles = {
    container: {
        display: 'flex',
        marginTop: '40px',
        marginLeft: '35px',
        marginRight: '35px',
        marginBottom: '20px',
        paddingBottom: '20px',
        border: '0px',
        borderBottom: '2px solid #5400FF',
        backgroundColor: 'white',
    },
    selectedOptionStyle: {
        border: '0px',
        borderBottom: '2px solid #5400FF',
        backgroundColor: 'white',
        marginRight: '22px'
    },
    nonSelectedOptionStyle: {
        border: '0px',
        borderBottom: '0px',
        backgroundColor: 'white',
        marginRight: '22px'
    }
}


export default TopBar