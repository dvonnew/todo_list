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
        let id = this.userProjectsList.length

        const newProject = new Project(title, id + length(this.projectsList))

        this.userProjectsList.push(newProject)
    }

    deleteProject(i) {
        this.userProjectsList.splice(i)
        this.compileAllTasks()
    }

    addTask(projectIndex) {
        if (projectIndex < 3) {
            this.projectsList[projectIndex].addTask()
        } else {
            this.userProjectsList[projectIndex].addTask()
        }
        this.compileAllTasks()
    }

    expandTask(projectIndex, taskIndex) {
        if (projectIndex < 3) {
            this.projectsList[projectIndex].expandTask(taskIndex)
        } else {
            this.userProjectsList[projectIndex].expandTask(taskIndex)
        }
    }

    compileAllTasks() {
        // this.all.taskList.splice(this.all.taskList.length + 1, this.all.taskList.length - 1)
        this.all.taskList = []

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