const ADD_TASK = "ADD-TASK";
const UPDATE_TASK_TEXT = "UPDATE-TASK-TEXT";

const canbanReducer = (state, action) => {
    if (action.type === ADD_TASK) {
        for (const el of state.canbanItems) {
            if (el.id === action.canbanItemID) {
                let task = {
                    id: el.taskData.length + 1,
                    title: el.newTaskText,
                    url: `task${action.canbanItemID + 1}-${el.taskData.length + 1}`
                };
                el.taskData.push(task);
                break
            }
        }
    }
    else if (action.type === UPDATE_TASK_TEXT) {
        for (const el of state.canbanItems) {
            if (el.id === action.canbanItemID) {
                el.newTaskText = action.newTaskText;
                break
            }
        }
    }

    return state;
}

export default canbanReducer;