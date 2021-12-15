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
            const projectItem = document.createElement('button')

            projectItem.className = 'navButton list'
            projectItem.innerHTML = `${project.title}`
            projectItem.dataset.index = i

            projectItem.addEventListener('click', () => {
                changeProjectDisplay(i)
            })

            userProjectsListElement.appendChild(projectItem)
        })

        let addProjectButton = document.getElementById('addProjectButton')

        addProjectButton.addEventListener('click', () => {
            this.addProject()
        })
    }

    clearSideBarDisplay() {
        const userProjectsList = document.getElementById('userProjectsList')

        while (userProjectsList.hasChildNodes()) {
            userProjectsList.removeChild(userProjectsList.lastChild)
        }
    }

    createProjectLoadDisplay() {
        this.projectsCompiler.all.taskList.push(new Task('Mock', '05/15/2022', 'medium', '', this.projectsCompiler.all.title))

        this.taskDisplayBox.append(this.projectsCompiler.projectsList[0].createProjectDisplay())
    }

    createProjectDisplay(i) {
        this.taskDisplayBox.append(this.projectsCompiler.projectsList[i].createProjectDisplay())
    }

    changeProjectDisplay(i) {
        clearProjectDisplay()

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