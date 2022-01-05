import { DisplayController } from './dom/displayController'


class App {

    constructor() {
        this.display = new DisplayController()
    }

    run() {
        this.display.createSideBarDisplay()
        this.display.createProjectListDisplay()

        let addTaskButton = document.getElementById('addTaskButton')
        let defaultNavButtons = document.querySelectorAll('.default.navButton')
        let addProjectButton = document.getElementById('addProjectButton')

        defaultNavButtons.forEach((button, i)=> {
            button.addEventListener('click', () => {
                this.display.changeProjectDisplay(i)
            })
        })

        addTaskButton.addEventListener('click', () => {
            let i = document.getElementById('displayTitle').dataset.index
            this.addTask(i)
        })

        addProjectButton.addEventListener('click', () => {
            this.display.addProject()
        })
    
        this.setExpandTaskDisplayButton()

        this.setDeleteTaskButton()
    }

    addTask() {
        let i = parseInt(document.getElementById('displayTitle').dataset.index)
        this.display.projectsCompiler.addTask(i)
        this.display.changeProjectDisplay(i)
    }

    setExpandTaskDisplayButton() {
        let taskDisplayList = document.getElementsByClassName('taskTitle')

        for (let i = 0; i < taskDisplayList.length; i++) {
            taskDisplayList[i].addEventListener('click', () => {
                let j = document.getElementById('displayTitle').dataset.index
                this.display.expandTask(j, i)
            })
        }
    }

    setDeleteTaskButton() {
        let tasksList = document.getElementsByClassName('deleteButton')

        for (let i = 0; i < tasksList.length; i++) {
            tasksList[i].addEventListener('click', () => {
                let j = document.getElementById('displayTitle').dataset.index
                this.display.deleteTask(i, j)
                this.display.changeProjectDisplay(j)
            })
        }
    }
}

const taskList = new App

taskList.run()
