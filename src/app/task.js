import '../style.css'

class Task {

    constructor(title, dueDate, priority, id){
        this.title = title
        this.dueDate = new Date (Date.parse(dueDate))
        this.priority = priority
        this.completionStatus = 'no'
    }

    getTitle (){
        return this.title
    }

    getDate (){
        return this.dueDate.toLocaleDateString('en-US')
    }

    getPriority (){
        return this.priority
    }

    getCompletionStatus(){
        return this.completionStatus
    }

    changeCompletionStatus (){
        if (this.completeStatus.toLowerCase()== 'yes'){
            this.completionStatus = 'no'
        }
        else {
            this.completeStatus = 'yes'
        }
        return this.completionStatus
    }

    // changeDate(){
    //     let newDueDate = prompt('Due Date (mm/dd/yyyy)')

    //     this.date = new Date (Date.parse(newDueDate))
    //     return this.date
    // }

    // changeTitle(){
    //     this.title = prompt()
    //     return this.title
    // }

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

    // createExpandDisplay(){
    //     this.clearTaskDisplay()

    //     const taskDisplay = document.querySelector('.taskDisplay')
    //     const taskTitle = document.createElement('div')
    //     const taskDescription = document.createElement('div')
    //     const taskPriority = document.createElement('div')
    //     const taskDueDate = document.createElement('div')
    //     const taskCompletion = document.createElement('div')
    //     const editButton = document.createElement('button')
    //     const closeButton = document.createElement('button')

    //     taskCompletion.className = `${this.completionStatus}`

    //     taskTitle.className = 'taskTitle-Extended'
    //     taskTitle.innerHTML = `${this.title}`

    //     taskDescription.className = 'taskDescription'
    //     taskDescription.innerHTML = `${this.taskDescription}`

    //     taskPriority.className = `taskPriority-Extended ${this.priority}`

    //     taskDueDate.className = 'taskDueDate-Extended'
    //     taskDueDate.innerHTML = `${this.dueDate.toLocaleDateString('en-US')}`

    //     editButton.id = 'editButton'
    //     editButton.innerHTML = 'Edit'

    //     closeButton.id = 'closeButton'
    //     closeButton.innerHTML = 'Close'

    //     taskDisplay.className = 'taskDisplay-Extended'
    //     taskDisplay.appendChild(taskTitle)
    //     taskDisplay.appendChild(taskDescription)
    //     taskDisplay.appendChild(taskPriority)
    //     taskDisplay.appendChild(taskDueDate)
    //     taskDisplay.appendChild(editButton)
    //     taskDisplay.appendChild(closeButton)
    // }

    clearTaskDisplay(){
        const taskDisplay = document.querySelector('.taskDisplay')

        while (taskDisplay.hasChildNodes()){
            taskDisplay.removeChild(taskDisplay.lastChild)
        }
    }
}

export {Task}