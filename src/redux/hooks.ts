import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux'
import { AppDispatch, RootState } from './store'

export const useSelectorWithType: TypedUseSelectorHook<RootState> = useSelector;
export const useDispatchWithType: () => AppDispatch = useDispatch;