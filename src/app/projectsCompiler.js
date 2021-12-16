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
        this.compileAllTasks()
    }

    addTask(projectIndex) {
        this.projectsList[projectIndex].addTask()
        this.compileAllTasks()
    }

    expandTask(projectIndex, taskIndex) {
        this.projectsList[projectIndex].expandTask(taskIndex)
    }

    compileAllTasks() {
        this.all.taskList.splice(this.all.taskList.length + 1, this.all.taskList.length - 1)
        // this.all.taskList = []

        this.userProjectsList.forEach(project => {
            project.taskList.forEach(task => {
                this.all.taskList.push(task)
            })
        })
    }

    deleteTask(projectIndex, taskIndex) {
        this.projectsList[projectIndex].deleteTask(taskIndex)
        this.compileAllTasks()
    }

    // compileTodaysTasks(){

    // }

    // compileWeeksTasks(){

    // }
}

export { ProjectsCompiler }