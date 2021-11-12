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

    // priorityChange(){
    //     this.priority = 
    // }

    //Task DOM Methods//

    createTaskDisplay() {
        const taskDisplay = document.createElement('div')
        const taskPriority = document.createElement('div')
        const taskCompletion = document.createElement('div')
        const taskTitle = document.createElement('div')
        const taskDueDate = document.createElement('div')
        const taskEdit = document.createElement('div')

        taskPriority.className = `priority ${this.priority}`
        
        taskCompletion.className = `${this.completionStatus}`

        taskTitle.className = 'taskTitle'
        taskTitle.innerHTML = `${this.title}`

        taskDueDate.className = 'taskDueDate'
        taskDueDate.innerHTML = `${this.dueDate.toLocaleDateString('en-US')}`

        taskEdit.className = 'taskEditor'

        taskDisplay.className = 'taskDisplay'
        taskDisplay.appendChild(taskPriority)
        taskDisplay.appendChild(taskCompletion)
        taskDisplay.appendChild(taskTitle)
        taskDisplay.appendChild(taskDueDate)
        taskDisplay.appendChild(taskEdit)

        return taskDisplay
    }
}

export {Task}