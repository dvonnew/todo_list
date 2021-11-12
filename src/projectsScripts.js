import {Task} from './tasksScripts'

class Project {

    constructor(title){
        this.title = title
        this.taskList = []
    }

    addTask (){
        let title = prompt('Task Title')
        let dueDate = prompt('Due Date (mm/dd/yyyy)')
        let priority = prompt('Priority (High, Medium, Low)')
        let description = prompt('description')
        let project = this.projectTitle

        let newTask = new Task(title, dueDate, priority, description, project)
        this.taskList.push(newTask)
    }

    deleteTask(i){
        this.taskList.splice(i,1)
    }

    // sortTasksbyDate(){

    // }

    // sortTasksbyPriority(){

    // }

    //Project DOM Methods//

    createProjectDisplay(){
        const title = document.createElement('h1')
        const taskListDisplay = document.createElement('div')
        const tasklistDisplayHeader = document.createElement('div')
        const addTaskButton = document.createElement('button')

        title.innerHTML = this.title

        addTaskButton.id = 'addTaskButton'
        addTaskButton.innerHTML = '+  Add Task'

        tasklistDisplayHeader.id = 'taskDisplayHeader'
        tasklistDisplayHeader.appendChild(title)
        tasklistDisplayHeader.appendChild(addTaskButton)

        taskListDisplay.id = 'taskListDisplay'
        taskListDisplay.appendChild(tasklistDisplayHeader)

        this.taskList.forEach((task, i) =>{
            let taskItem = task.createTaskDisplay()
            taskItem.dataset.index = i
            taskListDisplay.appendChild(taskItem)
        })
        return taskListDisplay
    }
}

export {Project}