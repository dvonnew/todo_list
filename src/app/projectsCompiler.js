import { Project } from './project'
import { toDate, isThisWeek, subDays } from 'date-fns'

class ProjectsCompiler {

    constructor() {
        this.all = new Project('All', 0)
        this.today = new Project('Today', 1)
        this.week = new Project('Week', 2)
        this.projectsList = [this.all, this.today, this.week]
    }

    getProjects (){
        return this.projectsList
    }

    createNewProject() {
        let title = prompt('Project/List Name?')
        let id = this.projectsList.length

        if (title == null){
           return title = prompt('Title cannot be empty. Please provide project title')
        }

        const newProject = new Project(title, id)

        this.projectsList.push(newProject)
    }

    deleteProject(i) {
        this.projectsList.splice(i,1)
        this.compileDefaultLists()
    }

    addTask(projectIndex, title, dueDate, priority) {
        this.projectsList[projectIndex].addTask(title, dueDate, priority)
        this.compileDefaultLists()
    }

    deleteTask(projectIndex, taskIndex) {
        let task = this.projectsList[projectIndex].taskList[taskIndex]

        this.projectsList.forEach((project)=>{
            if (project.taskList.includes(task)){
                project.deleteTask(project.taskList.indexOf(task))
            }
        })

        this.compileDefaultLists()
    }

    completeTask(projectIndex, taskIndex) {
        this.projectsList[projectIndex].completeTask(taskIndex)
        this.compileDefaultLists()
    }

    compileDefaultLists (){
        this.compileAllTasks()
        this.compileTodaysTasks()
        this.compileWeeksTasks()
    }

    compileAllTasks() {
        this.projectsList.forEach((project, i) => {
            if(i>2){
                project.taskList.forEach(task => {
                    if (this.all.taskList.includes(task)){
                        return
                    }
                    this.all.taskList.push(task)
                })
            }
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

    compileWeeksTasks(){
        this.week.taskList = []

        this.all.taskList.forEach(task =>{
            if(isThisWeek(task.dueDate)){
                this.week.taskList.push(task)
            }
        })

    }
}

export { ProjectsCompiler }