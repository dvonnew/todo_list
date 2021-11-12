import {Task} from './tasksScripts'
import {Project} from './projectsScripts'
import {ProjectCompiler} from './projectCompilerScripts'

class DisplayController {

    constructor(){
        this.projectCompiler = new ProjectCompiler
        this.projectsList = this.projectCompiler.projectsList
        this.userProjectsList = this.projectCompiler.userProjectsList
        this.displayBox = document.getElementById('displayBox')
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
    }

    clearSideBarDisplay(){
        const userProjectDisplay = document.getElementById('userProjectsList')

        while(userProjectDisplay.hasChildNodes()){
            userProjectDisplay.removeChild(userProjectDisplay.lastChild)
        }
    }

    createProjectLoadDisplay(){
        this.projectCompiler.all.taskList.push(new Task('Mock', '05/15/2022', 'Mid', '', this.projectCompiler.all.title))

        this.displayBox.append(this.projectsList[0].createProjectDisplay())    
    }

    changeProjectDisplay(i) {
        this.clearProjectDisplay()

        this.displayBox.append(this.projectsList[i].createProjectDisplay())
    }

    newProjectDisplay(i) {
        this.clearProjectDisplay()

        this.displayBox.append(this.userProjectsList[this.userProjectsList.length-1].createProjectDisplay())

        console.log(this.userProjectsList[this.userProjectsList.length-1].title)
    }

    clearProjectDisplay(){
        while(this.displayBox.hasChildNodes()){
            this.displayBox.removeChild(this.displayBox.lastChild)
        }
    }
}

export{DisplayController}