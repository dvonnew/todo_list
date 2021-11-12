import {Task} from './tasksScripts'
import {Project} from './projectsScripts'
import {DisplayController} from './dispalyControllerScripts'


class RunApp {
    
    constructor(){
        this.display = new DisplayController
    }

    runTaskList() {
        this.display.createSideBarDisplay()
        this.display.createProjectLoadDisplay()
        this.addProject()
        this.changeProject()
    }

    addProject(){
        let addProjectButton = document.getElementById('addProjectButton')

        addProjectButton.addEventListener('click', ()=>{
            this.display.projectCompiler.createNewProject()
            this.display.newProjectDisplay()
        })
    }

    addTask(){
        let addTaskButton = document.getElementById('addTaskButton')

        addTaskButton.addEventListener('click', ()=>{
            this.display.projectCompiler.addTask(i) 
        })
    }

    changeProject(){
        let navButton = document.querySelectorAll('.navButton')
        
        navButton.forEach((button, i) =>{ 
            button.addEventListener('click', ()=>{
                this.display.changeProjectDisplay(i)
            })
        })
    }
}

const taskList = new RunApp

taskList.runTaskList()
