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

        this.projectsCompiler.projectsList.forEach((project, i) => {
            if (i>2){
                let projectButton = document.createElement('button')

                projectButton.className = 'navButton list'
                projectButton.innerHTML = `${project.title}`
                projectButton.dataset.index = i+3

                projectButton.addEventListener('click', () => {
                    this.changeProjectDisplay(i)
                })
                userProjectsListElement.appendChild(projectButton)
            }
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
        completionButton.addEventListener('click', ()=>{
            this.completeTask(project.id, i)

            if(task.getCompletionStatus() == 'yes'){
                taskDisplay.className = 'taskDisplay-Completed'
            }
            else{
                taskDisplay.className = 'taskDisplay'
            }
        })

        if(task.getCompletionStatus() == 'yes'){
            taskDisplay.className = 'taskDisplay-Completed'
        }
        else{
            taskDisplay.className = 'taskDisplay'
        }

        taskTitle.className = 'taskTitle'
        taskTitle.innerHTML = `${task.getTitle()}`

        taskDueDate.className = 'taskDueDate'
        taskDueDate.innerHTML = `${task.getDate()}`

        taskDeleteButton.className = 'deleteButton'
        taskDeleteButton.innerHTML = 'X'
        taskDeleteButton.addEventListener('click', ()=>{
            this.deleteTask(project.id, i)
        })

        taskDisplay.appendChild(taskPriority)
        taskDisplay.appendChild(taskTitle)
        taskDisplay.appendChild(taskDueDate)
        taskDisplay.appendChild(taskCompletionStatus)
        taskDisplay.appendChild(taskDeleteButton)

        return taskDisplay
    }

    createAddTaskDisplay() {
        const taskDisplay = document.createElement('div')
        const titleInput = document.createElement('input')
        const dueDateInput = document.createElement('input')
        const priorityInput = document.createElement('select')
        const submitButton = document.createElement('button')
        const cancelButton = document.createElement('button')
        const today = new Date()
        let currentDate = `${(today.getMonth()+1)}/${today.getDate()}/${today.getFullYear()}`

        taskDisplay.className = 'addTaskDisplay'

        titleInput.setAttribute('type', 'text')
        titleInput.setAttribute('value', 'Task Title...')
        titleInput.setAttribute('required', '')
        titleInput.className = "titleInput"

        dueDateInput.setAttribute('type', 'date')
        dueDateInput.setAttribute('required', '')
        dueDateInput.setAttribute('pattern', `\d\d/\d\d/\d\d\d\d`)
        dueDateInput.className = 'dueDateInput'

        priorityInput.innerHTML = `
            <option value=''>--</option> \n
            <option value='low'>Low</option> \n
            <option value='medium'>Medium</option> \n
            <option value='high'>High</option>`
        priorityInput.className = 'priorityInput'
        priorityInput.setAttribute('required', '')

        submitButton.id = 'submitButton'
        submitButton.innerHTML = 'Submit'
        submitButton.addEventListener('click', ()=>{
            if (titleInput.value == `Task Title...` || titleInput.value == ``){
                alert('Please enter a task title')
                return
            }
            let title = titleInput.value
            if (dueDateInput.value == '' || dueDateInput.valueAsDate.toLocaleDateString(`en-us`) < currentDate){
                alert('Please provide a date on or after the current date')
                return
            }
            let dueDate = dueDateInput.valueAsDate
            if (priorityInput.value ==''){
                alert('Please select a valid priority from the drop down')
                return
            }
            let priority = priorityInput.value

            this.submitAddTaskEventListener(title, dueDate, priority)
        })

        cancelButton.innerHTML = 'Cancel'
        cancelButton.id = 'cancelButton'
        cancelButton.addEventListener('click', ()=>{
            while (taskDisplay.hasChildNodes()){
                taskDisplay.removeChild(taskDisplay.lastChild)
            }
            taskListDisplay.removeChild(taskDisplay)
        })

        taskDisplay.appendChild(titleInput)
        taskDisplay.appendChild(dueDateInput)
        taskDisplay.appendChild(priorityInput)
        taskDisplay.appendChild(submitButton)
        taskDisplay.appendChild(cancelButton)

        taskListDisplay.appendChild(taskDisplay)
    }

    submitAddTaskEventListener(title, dueDate, priority){
        let projectIndex = parseInt(document.getElementById('displayTitle').dataset.index)
        this.projectsCompiler.addTask(projectIndex, title, dueDate, priority)
        this.changeProjectDisplay(projectIndex)
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

    changeProjectDisplay(i) {
        this.clearProjectDisplay()
        this.taskDisplayBox.append(this.createTaskListDisplay(this.projectsCompiler.projectsList[i]))
    }

    clearProjectDisplay() {
        while (this.taskDisplayBox.hasChildNodes()) {
            this.taskDisplayBox.removeChild(this.taskDisplayBox.lastChild)
        }
    }

    completeTask(projectIndex, taskIndex) {
        this.projectsCompiler.completeTask(projectIndex,taskIndex)
        this.changeProjectDisplay(projectIndex)
    }

    deleteTask(projectIndex, taskIndex) {
        this.projectsCompiler.deleteTask(projectIndex, taskIndex)
        this.changeProjectDisplay(projectIndex)
    }
}

export { DisplayController }