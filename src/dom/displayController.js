import { Task } from '../app/task'
import { ProjectsCompiler } from '../app/projectsCompiler'

class DisplayController {

    constructor() {
        this.projectsCompiler = new ProjectsCompiler
        this.taskDisplayBox = document.getElementById('taskDisplayBox')
    }

    createSideBarDisplay() {
        this.clearSideBarDisplay()

        const userProjectsListElement = document.getElementById('userProjectsList')

        this.projectsCompiler.userProjectsList.forEach((project, i) => {
            let projectButton = document.createElement('button')

            projectButton.className = 'navButton list'
            projectButton.innerHTML = `${project.title}`
            projectButton.dataset.index = i+3

            projectButton.addEventListener('click', () => {
                this.changeProjectDisplay(i+3)
            })

            userProjectsListElement.appendChild(projectButton)
        })

    }

    createDefaultDisplay() {
        this.projectsCompiler.all.taskList.push(new Task('Mock', '05/15/2022', 'medium', 0, this.projectsCompiler.all.title))
        this.taskDisplayBox.append(this.createTaskListDisplay(this.projectsCompiler.all))
    }

    createTaskListDisplay(project) {
        const title = document.createElement('h1')
        const taskListDisplay = document.createElement('div')
        const tasklistDisplayHeader = document.createElement('div')

        title.innerHTML = project.title
        title.id = 'displayTitle'
        title.dataset.index = project.id

        tasklistDisplayHeader.id = 'taskDisplayHeader'
        tasklistDisplayHeader.appendChild(title)

        taskListDisplay.id = 'taskListDisplay'
        taskListDisplay.appendChild(tasklistDisplayHeader)

        project.taskList.forEach((task, i) => {
            taskListDisplay.appendChild(this.createTaskDisplay(project, task, i))
        })

        return taskListDisplay
    }

    createTaskDisplay(project, task, i) {
        
        const taskDisplay = document.createElement('div')
        const taskPriority = document.createElement('div')
        const taskTitle = document.createElement('div')
        const taskDueDate = document.createElement('div')
        const taskCompletionStatus = document.createElement('div')
        const completionButton = document.createElement('div')
        const taskDeleteButton = document.createElement('button')

        taskPriority.className = `taskPriority ${task.getPriority()}`
        
        taskCompletionStatus.className = 'completionStatus'
        taskCompletionStatus.appendChild(completionButton)
        completionButton.className = `${task.getCompletionStatus()}`

        taskTitle.className = 'taskTitle'
        taskTitle.innerHTML = `${task.getTitle()}`

        taskDueDate.className = 'taskDueDate'
        taskDueDate.innerHTML = `${task.getDate()}`

        taskDeleteButton.className = 'deleteButton'
        taskDeleteButton.innerHTML = 'X'
        taskDeleteButton.addEventListener('click', ()=>{
            this.deleteTask(project.id, i)
            console.log(task)
        })


        taskDisplay.className = 'taskDisplay'
        taskDisplay.appendChild(taskPriority)
        taskDisplay.appendChild(taskTitle)
        taskDisplay.appendChild(taskDueDate)
        taskDisplay.appendChild(taskCompletionStatus)
        taskDisplay.appendChild(taskDeleteButton)

        return taskDisplay
    }

    addProject() {
        this.projectsCompiler.createNewProject()
        this.createSideBarDisplay()
        this.changeProjectDisplay(this.projectsCompiler.projectsList[this.projectsCompiler.projectsList.length-1].id)
    }

    clearSideBarDisplay() {
        const userProjectsList = document.getElementById('userProjectsList')

        while (userProjectsList.hasChildNodes()) {
            userProjectsList.removeChild(userProjectsList.lastChild)
        }
    }

    createProjectListDisplay() {
        this.projectsCompiler.all.taskList.push(new Task('Mock', '05/15/2022', 'medium', '', this.projectsCompiler.all.title))
        this.taskDisplayBox.append(this.createTaskListDisplay(this.projectsCompiler.projectsList[0]))
    }

    changeProjectDisplay(i) {
        this.clearProjectDisplay()
        this.taskDisplayBox.append(this.createTaskListDisplay(this.projectsCompiler.projectsList[i]))
    }

    clearProjectDisplay() {
        while (this.taskDisplayBox.hasChildNodes()) {
            this.taskDisplayBox.removeChild(this.taskDisplayBox.lastChild)
        }
    }

    // expandTask(projectIndex, taskIndex) {
    //     this.projectsCompiler.expandTask(projectIndex, taskIndex)
    // }

    deleteTask(projectIndex, taskIndex) {
        this.projectsCompiler.deleteTask(projectIndex, taskIndex)
        this.changeProjectDisplay(projectIndex)
    }
}

export { DisplayController }