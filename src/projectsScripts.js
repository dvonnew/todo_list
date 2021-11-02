import {Task} from './tasksScripts'

class Project {

    constructor(title){
        this.projectTitle = title
        this.taskList = []
    }

    addTask (){
        let title = prompt('Task Title')
        let dueDate = prompt('Due Date (mm/dd/yyyy)')
        let priority = prompt('Priority (High, Medium, Low)')
        let description = prompt('description')

        let newTask = new Task(title, dueDate, priority, description)
        this.taskList.push(newTask)

        console.log(this.taskList[0])
    }

    removeTask(i){
        this.taskList.splice(i,1)
    }

    // sortTasksbyDate(){

    // }

    // sortTasksbyPriority(){

    // }
}


export {Project}