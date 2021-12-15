import './style.css'

class Task {

    constructor(title, dueDate, priority, description, project){
        this.title = title
        this.dueDate = new Date (Date.parse(dueDate))
        this.priority = priority
        this.description = description
        this.project = project
        this.completionStatus = 'no'
    }

    changeCompletionStatus (){
        if (this.complete.toLowerCase()== 'yes'){
            this.complete = 'no'
        }
        else {
            this.complete = 'yes'
        }
        return this.complete
    }

    changeDate(){
        let newDueDate = prompt('Due Date (mm/dd/yyyy)')

        this.date = new Date (Date.parse(newDueDate))
        return this.date
    }

    changeTitle(){
        this.title = prompt()
        return this.title
    }

    // changePriority(){
    //     this.priority = 
    // }

    //Task DOM Methods//

    createTaskDisplay() {
        const taskDisplay = document.createElement('div')
        const taskPriority = document.createElement('div')
        const taskTitle = document.createElement('div')
        const taskDueDate = document.createElement('div')
        const taskCompletion = document.createElement('div')
        const taskDelete = document.createElement('button')

        taskPriority.className = `taskPriority ${this.priority}`
        
        taskCompletion.className = `${this.completionStatus}`

        taskTitle.className = 'taskTitle'
        taskTitle.innerHTML = `${this.title}`

        taskDueDate.className = 'taskDueDate'
        taskDueDate.innerHTML = `${this.dueDate.toLocaleDateString('en-US')}`

        taskDelete.className = 'deleteButton'
        taskDelete.innerHTML = 'X'

        taskDisplay.className = 'taskDisplay'
        taskDisplay.appendChild(taskPriority)
        taskDisplay.appendChild(taskTitle)
        taskDisplay.appendChild(taskDueDate)
        taskDisplay.appendChild(taskCompletion)
        taskDisplay.appendChild(taskDelete)

        return taskDisplay
    }

    createExpandDisplay(){
        this.clearTaskDisplay()

        const taskDisplay = document.querySelector('.taskDisplay')
        const taskTitle = document.createElement('div')
        const taskDescription = document.createElement('div')
        const taskPriority = document.createElement('div')
        const taskDueDate = document.createElement('div')
        const taskCompletion = document.createElement('div')
        const editButton = document.createElement('button')

        taskCompletion.className = `${this.completionStatus}`

        taskTitle.className = 'taskTitle-Extended'
        taskTitle.innerHTML = `${this.title}`

        taskDescription.className = 'taskDescription'
        taskDescription.innerHTML = `${this.taskDescription}`

        taskPriority.className = `taskPriority-Extended ${this.priority}`

        taskDueDate.className = 'taskDueDate-Extended'
        taskDueDate.innerHTML = `${this.dueDate.toLocaleDateString('en-US')}`

        editButton.id = 'editButton'
        editButton.innerHTML = 'Edit'

        taskDisplay.className = 'taskDisplay-Extended'
        taskDisplay.appendChild(taskTitle)
        taskDisplay.appendChild(taskDescription)
        taskDisplay.appendChild(taskPriority)
        taskDisplay.appendChild(taskDueDate)
        taskDisplay.appendChild(editButton)
    }

    clearTaskDisplay(){
        const taskDisplay = document.querySelector('.taskDisplay')

        while (taskDisplay.hasChildNodes()){
            taskDisplay.removeChild(taskDisplay.lastChild)
        }
    }
}

export {Task}