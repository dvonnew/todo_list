import { Task } from './task'

class Project {

    constructor(title, id) {
        this.title = title
        this.taskList = []
        this.id = id
    }

    addTask() {
        let title = prompt('Task Title')
        let dueDate = prompt('Due Date (mm/dd/yyyy)')
        let priority = prompt('Priority (High, Medium, Low)')
        let description = prompt('description')
        let project = this.projectTitle

        let newTask = new Task(title, dueDate, priority, description, project)
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

    // expandTask(i) {
    //     this.taskList[i].createExpandDisplay()
    // }

    // sortTasksbyDate(){

    // }

    // sortTasksbyPriority(){

    // }
}

export { Project }