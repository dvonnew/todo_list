import { Task } from './task'

class Project {

    constructor(title, id) {
        this.title = title
        this.taskList = []
        this.id = id
    }

    addTask(title, dueDate, priority) {

        let newTask = new Task(title, dueDate, priority)
        this.taskList.push(newTask)
    }

    getTasks() {
        this.taskList.forEach(task =>{
            return task
        })
    }

    deleteTask(i) {
        this.taskList.splice(i, 1)
    }

    completeTask(i) {
        this.taskList[i].changeCompletionStatus()
    }

    // sortTasksbyDate(){

    // }

    // sortTasksbyPriority(){

    // }
}

export { Project }