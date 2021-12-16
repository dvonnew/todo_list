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

    deleteTask(i) {
        this.taskList.splice(i, 1)
    }

    expandTask(i) {
        this.taskList[i].createExpandDisplay()
    }

    // sortTasksbyDate(){

    // }

    // sortTasksbyPriority(){

    // }

    //Project DOM Methods//

    createProjectDisplay() {
        const title = document.createElement('h1')
        const taskListDisplay = document.createElement('div')
        const tasklistDisplayHeader = document.createElement('div')

        title.innerHTML = this.title
        title.id = 'displayTitle'
        title.dataset.index = this.id

        tasklistDisplayHeader.id = 'taskDisplayHeader'
        tasklistDisplayHeader.appendChild(title)

        taskListDisplay.id = 'taskListDisplay'
        taskListDisplay.appendChild(tasklistDisplayHeader)

        this.taskList.forEach((task, i) => {
            let taskItem = task.createTaskDisplay()
            taskItem.dataset.index = i
            taskListDisplay.appendChild(taskItem)
        })

        return taskListDisplay
    }
}

export { Project }