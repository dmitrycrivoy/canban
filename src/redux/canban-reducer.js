const ADD_TASK = "ADD-TASK";
const UPDATE_TASK_TEXT = "UPDATE-TASK-TEXT";

const canbanReducer = (state, action) => {

    if (action.type === ADD_TASK) {
        let task = {
            id: action.newTaskID,
            title: state.newTaskText,
            url: `task${Number(action.canbanItemID) + 1}-${action.newTaskID}`
        };
        if (state.newTaskText) {
            state.canbanItems[action.canbanItemID].taskData.push(task);
            this._callSubscriber();
        }
        else
            console.log("No new task text");
    }
    else if (action.type === UPDATE_TASK_TEXT) {
        state.newTaskText = action.newTaskText;
        this._callSubscriber();
    }

    return state;
}