import { ADD_USER, GET_CATEGORY_LIST, GET_ALL_ITEMS, COMPLETE_TASK, GET_TASK } from '../types'

export default (state, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                taskList: [...state.taskList, action.payload]
            }

        case GET_CATEGORY_LIST:
            return {
                ...state,
                taskList: state.taskList.filter(task => task.category.includes(action.payload))
            }

        case GET_ALL_ITEMS:
            return {
                ...state,
                taskList: state.taskList
            }

        case COMPLETE_TASK:
            const updatedTasks = state.taskList.map((task) => {
                if (task.id === action.payload) {
                    task.completed = action.payload2
                }
                return task
            })

            return {
                ...state,
                taskList: updatedTasks
            }

        case GET_TASK:
            return {
                ...state,
                task: action.payload
            }

        default:
            return state
    }
}