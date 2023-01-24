import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { RootState } from "../redux_toolkit/index"
import { globalActions } from '../redux_toolkit/slices/global'

const actions = {
    ...globalActions
}
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}