import {Project} from './projectsScripts'

class ProjectCompiler{
    
    constructor(){
        this.all = new Project('All')
        this.today = new Project('Today')
        this.week = new Project('Week')
        this.projectsList = [this.all, this.today, this.week]
        this.userProjectsList = []
    }

    createNewProject(){
        let title = prompt('Project/List Name?')
        
        const newProject = new Project(title)

        this.projectsList.push(newProject)
        this.userProjectsList.push(newProject)
    }
    
    deleteProject(i){
        this.projectsList.splice(i+3,1)
        this.userProjectsList.splice(i,1)
    }

    addTask(i){
        this.userProjectsList[i].addTask()
        this.projectsList[i+3].addTask()
    }

    compileAllTasks(){
        this.userProjectsList.forEach(project =>{
            project.forEach(task =>{
                this.all.taskList.push(task)
            })
        })
    }

    // compileTodaysTasks(){

    // }

    // compileWeeksTasks(){

    // }
}

export {ProjectCompiler}