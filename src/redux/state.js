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
    addTask(newTaskID, canbanItemID) {
        let task = {
            id: newTaskID,
            title: this._state.canbanPage.newTaskText,
            url: `task${Number(canbanItemID) + 1}-${newTaskID}`
        };
        if (this._state.canbanPage.newTaskText) {
            this._state.canbanPage.canbanItems[canbanItemID].taskData.push(task);
            this._callSubscriber();
        }
        else
            console.log("No new task text");
    },
    updateTaskText(newTaskText) {
        this._state.canbanPage.newTaskText = newTaskText;
        this._callSubscriber();
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

export default store;