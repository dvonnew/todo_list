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

    changeCompletionStatus(){
        if (this.completionStatus === 'yes'){
            this.completionStatus = 'no'
        }
        else {
            this.completionStatus = 'yes'
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

}

export {Task}