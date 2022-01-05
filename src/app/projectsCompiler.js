import { Project } from './project'

class ProjectsCompiler {

    constructor() {
        this.all = new Project('All', 0)
        this.today = new Project('Today', 1)
        this.week = new Project('Week', 2)
        this.projectsList = [this.all, this.today, this.week]
        this.userProjectsList = []
    }

    createNewProject() {
        let title = prompt('Project/List Name?')
        let id = this.userProjectsList.length + 3

        const newProject = new Project(title, id)

        this.projectsList.push(newProject)
        this.userProjectsList.push(newProject)
    }

    deleteProject(i) {
        this.userProjectsList.splice(i)
        this.compileDefaultLists()
    }

    addTask(projectIndex) {
        this.projectsList[projectIndex].addTask()
        this.compileDefaultLists()
    }

    deleteTask(projectIndex, taskIndex) {
        this.projectsList[projectIndex].deleteTask(taskIndex)
        this.compileAllTasks()
    }

    completeTask(projectIndex, taskIndex) {
        this.taskList[projectIndex].changeCompletionStatus(taskIndex)
    }

    // expandTask(projectIndex, taskIndex) {
    //     this.projectsList[projectIndex].expandTask(taskIndex)
    // }

    compileDefaultLists (i){
        this.compileAllTasks(i)
        this.compileTodaysTasks()
    }

    compileAllTasks() {

        this.userProjectsList.forEach(project => {
            project.taskList.forEach(task => {
                if (this.all.taskList.includes(task)){
                    return
                }
                this.all.taskList.push(task)
            })
        })
    }

    compileTodaysTasks (){
        let dateTime = new Date
        let currentDate = `${(dateTime.getMonth()+1)}/${dateTime.getDate()}/${dateTime.getFullYear()}`

        this.today.taskList = []

        this.all.taskList.forEach(task =>{
            if(task.dueDate.toLocaleDateString('en-US') === currentDate){
            this.today.taskList.push(task)
            }
        })
    }

    // compileTodaysTasks(){

    // }

    // compileWeeksTasks(){

    // }
}

export { ProjectsCompiler }