import { useMachine } from "@xstate/react";
import UsersTable from "./UsersTable.jsx";
import {userMachine, UserMachineContext} from './userStateMachine.js'
import { useReducer } from "react";
import validationReducer from "./validationReducer.js";
import TopBar from './TopBar.jsx';
import UserInfo from './UserInfo.jsx';

const Dashboard = () => {
    const [state, send] = useMachine(userMachine)
    const machine = [state, send]

    const validationStatus = {
      name: false,
      lastName: false,
      email: false,
      confirmEmail: false,
      password: false,
      confirmPassword: false,
      company: false
    }
    const [validation, dispatch] = useReducer(validationReducer, validationStatus)

    const changeValidation = (type) => {
      switch(type) { // eslint-disable-line
        case 'Name':
          dispatch({
            type: 'CHANGE_NAME',
            payload: !validationStatus.name
          })
          break
        case 'LastName':
          dispatch({
            type: 'CHANGE_LAST_NAME',
            payload: !validationStatus.lastName
          })
          break
        case 'Email':
          dispatch({
            type: 'CHANGE_EMAIL',
            payload: !validationStatus.email
          })
          break
        case 'ConfirmEmail':
          dispatch({
            type: 'CHANGE_CONFIRM_EMAIL',
            payload: !validationStatus.confirmEmail
          })
          break
        case 'password':
          dispatch({
            type: 'CHANGE_PASSWORD',
            payload: !validationStatus.password
          })
          break
        case 'confirmPassword':
          dispatch({
            type: 'CHANGE_CONFIRM_PASSWORD',
            payload: !validationStatus.confirmPassword
          })
          break
        case 'Company':
          dispatch({
            type: 'CHANGE_COMPANY',
            payload: !validationStatus.company
          })
      }
    }
    
    let title = 'Users'
    let highlightData, userDataFunction, userConnectionFunction, isViewing
    switch (state.value) {
      case 'newUser':
        title = 'New user'
        highlightData = true
        userDataFunction = null
        userConnectionFunction= () => send('addConnections')
        isViewing = false
        break;
      case 'newConnections':
        title = 'New user'
        highlightData = false
        userDataFunction = () => send('addUserInfo')
        userConnectionFunction = null
        isViewing = false
        break;
      case 'editUser':
        title = 'Edit user'
        highlightData = true
        userDataFunction = null
        userConnectionFunction = () => send('editConnections')
        isViewing = false
        break;
      case 'editConnections':
        title = 'Edit user'
        highlightData = false
        userDataFunction = () => send('editData')
        userConnectionFunction = null
        isViewing = false
        break;
      case 'viewUser':
        title = 'View user'
        highlightData = true
        userDataFunction = null
        userConnectionFunction = () => send('viewConnections')
        isViewing = true
        break;
      case 'viewConnections':
        title = 'View user'
        highlightData = false
        userDataFunction = () => send('viewData')
        userConnectionFunction = null
        isViewing = true
        break;
      default:
        break;
    }
    let topBar = <TopBar 
                  title = {title}
                  highlightData = {highlightData}
                  userDataFunction = {userDataFunction}
                  userConnectionFunction = {userConnectionFunction}
                  isViewing = {isViewing}
                />
    return(
        <UserMachineContext.Provider value={{machine, changeValidation, validation}}>
          {topBar}
          {state.matches('idle') && <UsersTable/>}
          {state.matches('newUser') && <UserInfo/>}
          {state.matches('newConnections') && <h1>Agregar conexion</h1>}
          {state.matches('editUser') && <UserInfo/>}
          {state.matches('editConnections') && <h1>Editar conexiones</h1>}
          {state.matches('viewUser') &&  <UserInfo/>}
          {state.matches('viewConnections') && <h1>Ver conexiones</h1>}
        </UserMachineContext.Provider>
    )
}

export default Dashboard