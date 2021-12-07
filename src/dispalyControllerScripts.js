import {Task} from './tasksScripts'
import {Project} from './projectsScripts'
import {ProjectCompiler} from './projectCompilerScripts'

class DisplayController {

    constructor(){
        this.projectCompiler = new ProjectCompiler
        this.projectsList = this.projectCompiler.projectsList
        this.userProjectsList = this.projectCompiler.userProjectsList
        this.taskDisplayBox = document.getElementById('taskDisplayBox')
    }
    
    createSideBarDisplay(){
        const userProjectDisplay = document.getElementById('userProjectsList')

        this.clearSideBarDisplay()

        this.userProjectsList.forEach((project, i)=>{
            const projectItem = document.createElement('button')
            
            projectItem.className = 'navButton list'
            projectItem.innerHTML = `${project.title}`
            projectItem.dataset.index = i+3

            userProjectDisplay.appendChild(projectItem)
        })
        return userProjectDisplay
    }

    clearSideBarDisplay(){
        const userProjectDisplay = document.getElementById('userProjectsList')

        while(userProjectDisplay.hasChildNodes()){
            userProjectDisplay.removeChild(userProjectDisplay.lastChild)
        }
    }

    createProjectLoadDisplay(){
        this.projectCompiler.all.taskList.push(new Task('Mock', '05/15/2022', 'medium', '', this.projectCompiler.all.title))

        this.taskDisplayBox.append(this.projectsList[0].createProjectDisplay())    
    }

    createProjectDisplay(i){

        this.taskDisplayBox.append(this.projectsList[i].createProjectDisplay())    
    }

    changeProjectDisplay(i) {
        this.clearProjectDisplay()

        this.taskDisplayBox.append(this.projectsList[i].createProjectDisplay())
    }

    newProjectDisplay() {
        this.clearProjectDisplay()

        this.taskDisplayBox.append(this.projectsList[this.projectsList.length-1].createProjectDisplay())

        console.log(this.projectsList[this.projectsList.length-1].title)
    }

    clearProjectDisplay(){
        while(this.taskDisplayBox.hasChildNodes()){
            this.taskDisplayBox.removeChild(this.taskDisplayBox.lastChild)
        }
    }

    expandTask(j, i){
        this.projectCompiler.expandTask(j,i)
    }

    deleteTask(i, j){
        this.projectCompiler.deleteTask(i, j)
    }
}

export{DisplayController}