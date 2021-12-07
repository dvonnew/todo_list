import {Project} from './projectsScripts'

class ProjectCompiler{
    
    constructor(){
        this.all = new Project('All', 0)
        this.today = new Project('Today', 1)
        this.week = new Project('Week', 2)
        this.projectsList = [this.all, this.today, this.week]
        this.userProjectsList = []
    }

    createNewProject(){
        let title = prompt('Project/List Name?')
        let id = this.projectsList.length
        
        const newProject = new Project(title, id)

        this.projectsList.push(newProject)
        this.userProjectsList.push(newProject)
    }
    
    deleteProject(i){
        this.projectsList.splice(i,1)
        this.userProjectsList.splice(i-3,1)
    }

    addTask(i){
        if (i>0){
            this.projectsList[i].addTask()
        }
        else{
            this.all.addTask()
        }

        this.compileAllTasks(i)
    }

    expandTask(j, i){
        this.projectsList[j].expandTask(i)
    }

    compileAllTasks (i){
        if (i>0){
            this.all.taskList.splice(this.all.taskList.length+1, this.all.taskList.length-1)
            console.log(this.all.taskList)

            this.userProjectsList.forEach(project =>{
                project.taskList.forEach(task =>{
                    this.all.taskList.push(task)
                })
            })
        }
    }

    deleteTask(i, j){
        this.projectsList[j].deleteTask(i)
        this.compileAllTasks(i)
    }

    // compileTodaysTasks(){

    // }

    // compileWeeksTasks(){

    // }
}

export {ProjectCompiler}