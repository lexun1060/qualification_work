import * as actions from './constants'

const initialState = {
    parsedData: [],
    cols: [],
    fileName: ''
}

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_DATA_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case actions.SET_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                parsedData: action.payload
            }
        case actions.SET_DATA_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case actions.SET_DATA_RESET:
            return {
            }
        case actions.GET_DATA_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actions.GET_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                dataTable: action.payload
            }
        case actions.GET_DATA_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case actions.SET_COLUMNS:
            return {
                ...state,
                cols: action.payload
            }
        case actions.CLEAR_DATA:
            return {
                ...state
            }
        case actions.SET_FILE_NAME:
            return {
                ...state,
                fileName: action.payload
            }
        default:
            return {
                ...state
            }
    }
}