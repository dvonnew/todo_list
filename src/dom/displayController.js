import { Task } from '../app/task'
import { ProjectsCompiler } from '../app/projectsCompiler'

class DisplayController {

    constructor() {
        this.projectsCompiler = new ProjectsCompiler
        this.taskDisplayBox = document.getElementById('taskDisplayBox')
    }

    createSideBarDisplay() {
        this.clearSideBarDisplay()

        const userProjectsListElement = document.getElementById('userProjectsList')

        this.projectsCompiler.userProjectsList.forEach((project, i) => {
            let projectButton = document.createElement('button')

            projectButton.className = 'navButton list'
            projectButton.innerHTML = `${project.title}`
            projectButton.dataset.index = i +3

            projectButton.addEventListener('click', () => {
                this.changeProjectDisplay(i+3)
            })

            userProjectsListElement.appendChild(projectButton)
        })

    }

    addProject() {
        this.projectsCompiler.createNewProject()
        this.createSideBarDisplay()
        this.newProjectDisplay()
    }

    clearSideBarDisplay() {
        const userProjectsList = document.getElementById('userProjectsList')

        while (userProjectsList.hasChildNodes()) {
            userProjectsList.removeChild(userProjectsList.lastChild)
        }
    }

    createProjectListDisplay() {
        this.projectsCompiler.all.taskList.push(new Task('Mock', '05/15/2022', 'medium', '', this.projectsCompiler.all.title))

        this.taskDisplayBox.append(this.projectsCompiler.projectsList[0].createProjectDisplay())
    }

    createProjectDisplay(i) {
        this.taskDisplayBox.append(this.projectsCompiler.projectsList[i].createProjectDisplay())
    }

    changeProjectDisplay(i) {
        this.clearProjectDisplay()
        console.log(i)
        this.taskDisplayBox.append(this.projectsCompiler.projectsList[i].createProjectDisplay())
    }

    newProjectDisplay() {
        this.clearProjectDisplay()

        this.taskDisplayBox.append(this.projectsCompiler.projectsList[this.projectsCompiler.projectsList.length - 1].createProjectDisplay())

        console.log(this.projectsCompiler.projectsList[this.projectsCompiler.projectsList.length - 1].title)
    }

    clearProjectDisplay() {
        while (this.taskDisplayBox.hasChildNodes()) {
            this.taskDisplayBox.removeChild(this.taskDisplayBox.lastChild)
        }
    }

    expandTask(projectIndex, taskIndex) {
        this.projectsCompiler.expandTask(projectIndex, taskIndex)
    }

    deleteTask(projectIndex, taskIndex) {
        this.projectsCompiler.deleteTask(projectIndex, taskIndex)
    }
}

export { DisplayController }