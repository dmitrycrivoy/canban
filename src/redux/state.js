const ADD_TASK = "ADD-TASK";
const UPDATE_TASK_TEXT = "UPDATE-TASK-TEXT";

let store = {
    _callSubscriber() {
        console.log("State is changed");
    },
    _state: {
        canbanPage: {
            canbanItems: [
                {
                    id: 1,
                    title: "Canban Item Title",
                    taskData: [
                        { id: 1, title: "Very Important Task", url: "task1-1" },
                        { id: 2, title: "Task 2", url: "task1-2" },
                        { id: 3, title: "Just Task 3", url: "task1-3" },
                    ]
                },
                {
                    id: 2,
                    title: "Canban Item Interesting Title",
                    taskData: [
                        { id: 1, title: "Taska", url: "task2-1" },
                        { id: 2, title: "task b", url: "task2-2" },
                    ]
                },
                {
                    id: 3,
                    title: "Canban Item Not Big Title",
                    taskData: [
                        { id: 1, title: "Atas", url: "task3-1" },
                        { id: 2, title: "Satta", url: "task3-2" },
                        { id: 3, title: "VerTask", url: "task3-3" },
                        { id: 4, title: "taske", url: "task3-4" },
                    ]
                },
            ],
            newTaskText: "New Task",
        },
        aboutPage: [
            {
    
            }
        ]
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        
    },
}

export const addTaskActionCreator = (newTaskID, canbanItemID) => {
    return {
        type: ADD_TASK,
        newTaskID,
        canbanItemID,
    }
}

export const updateTaskTextActionCreator = (newTaskText) => {
	return {
		type: UPDATE_TASK_TEXT,
		newTaskText,
	}
}

export default store;