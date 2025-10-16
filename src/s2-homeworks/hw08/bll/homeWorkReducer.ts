import { UserType } from '../HW8'

const initialState: UserType[] = []

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }


export const homeWorkReducer = (state: UserType[] = initialState, action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up') {
                state.sort((a, b) => a.name.localeCompare(b.name))
            } else {
                // (action.payload === 'down')
                state.sort((a, b) => b.name.localeCompare(a.name))
            }
            return state
        }
        case 'check': {
            return state.filter(a => a.age >= 18)
            // return state // need to fix
        }
        default:
            return state
    }
}
