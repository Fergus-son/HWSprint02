import { UserType } from '../HW8'

const initialState: UserType[] = []

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }


export const homeWorkReducer = (state: UserType[] = initialState, action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const newState = [...state]
            if (action.payload === 'up') {
                newState.sort((a, b) => a.name.localeCompare(b.name))
            } else {
                // (action.payload === 'down')
                newState.sort((a, b) => b.name.localeCompare(a.name))
            }
            return newState
        }
        case 'check': {
            return state.filter(a => a.age >= 18)
            // return state // need to fix
        }
        default:
            return state
    }
}
