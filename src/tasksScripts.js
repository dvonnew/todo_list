import './style.css'

class Task {

    constructor(title, dueDate, priority, description){
        this.taskTitle = title
        this.dueDate = new Date (Date.parse(dueDate))
        this.priority = priority
        this.description = description
        this.complete = 'no'
    }

    completionStatus (){
        if (this.complete.toLowerCase()== 'yes'){
            this.complete = 'no'
        }
        else {
            this.complete = 'yes'
        }
        return this.complete
    }

    dateChange(){
        let newDueDate = prompt('Due Date (mm/dd/yyyy)')

        this.date = new Date (Date.parse(newDueDate))
        return this.date
    }

    titleChange(){
        this.name = prompt()
        return this.name
    }

    // priorityChange(){

    //     this.priority = 

    // }

}

export {Task}