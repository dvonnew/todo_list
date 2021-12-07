import {DisplayController} from './dispalyControllerScripts'


class RunApp {
    
    constructor(){
        this.display = new DisplayController()
    }

    runTaskList() {
        this.display.createSideBarDisplay()
        this.display.createProjectLoadDisplay()
        
        let addTaskButton = document.getElementById('addTaskButton')
        let addProjectButton = document.getElementById('addProjectButton')

        addProjectButton.addEventListener('click', ()=>{
            this.addProject()
        })

        addTaskButton.addEventListener('click', ()=>{
            let i = document.getElementById('displayTitle').dataset.index
            this.addTask(i)
        })

        this.changeProject()

        this.expandTaskDisplay()

        this.deleteTask()
    }

    addProject(){
        this.display.projectCompiler.createNewProject()
        this.display.createSideBarDisplay()
        this.display.newProjectDisplay()
    }

    addTask(){
        let i = parseInt(document.getElementById('displayTitle').dataset.index)
        this.display.projectCompiler.addTask(i) 
        this.display.changeProjectDisplay(i)
    }

    changeProject(){
        let navButton = document.getElementsByClassName('navButton')
        
        for (let i=0; i < navButton.length;i++){
            navButton[i].addEventListener('click', ()=>{
                this.display.changeProjectDisplay(i)
                console.log(navButton)
            })
        }
    }

    expandTaskDisplay(){
        let taskDisplayList = document.getElementsByClassName('taskTitle')

        for (let i=0; i < taskDisplayList.length;i++){
            taskDisplayList[i].addEventListener('click', ()=>{
                let j = document.getElementById('displayTitle').dataset.index
                this.display.expandTask(j, i)
            })
        }
    }

    // deleteProject(i){

    // }

    deleteTask(){
        let tasksList = document.getElementsByClassName('deleteButton')

        for (let i=0; i < tasksList.length;i++){
            tasksList[i].addEventListener('click', ()=>{
                let j = document.getElementById('displayTitle').dataset.index
                this.display.deleteTask(i, j)
                this.display.changeProjectDisplay(j)
            })
        }

        
    }
}

const taskList = new RunApp

taskList.runTaskList()
