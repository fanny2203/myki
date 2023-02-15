import {
    CHANGE_NAME,
    CHANGE_LAST_NAME,
    CHANGE_EMAIL,
    CHANGE_CONFIRM_EMAIL,
    CHANGE_PASSWORD,
    CHANGE_CONFIRM_PASSWORD,
    CHANGE_COMPANY
} from './types.js'

export default (state, action) => { // eslint-disable-line
    const {payload, type} = action

  switch (type) { // eslint-disable-line
  case CHANGE_NAME:
    return {
      ...state,
      name: payload
    }
  case CHANGE_LAST_NAME:
    return {
      ...state,
      lastName: payload
    }
  case CHANGE_EMAIL:
    return {
      ...state,
      email: payload
    }
  case CHANGE_CONFIRM_EMAIL:
    return {
      ...state,
      confirmEmail: payload
    }
  case CHANGE_PASSWORD:
    return {
      ...state,
      password: payload
    }
  case CHANGE_CONFIRM_PASSWORD:
    return {
      ...state,
      confirmPassword: payload
    }
  case CHANGE_COMPANY:
    return {
      ...state,
      company: payload
    }
  }
}