import { DisplayController } from './dom/displayController'


class App {

    constructor() {
        this.display = new DisplayController()
    }

    run() {
        this.display.createSideBarDisplay()
        this.display.createDefaultDisplay()

        let addTaskButton = document.getElementById('addTaskButton')
        let defaultNavButtons = document.querySelectorAll('.default.navButton')
        let addProjectButton = document.getElementById('addProjectButton')

        defaultNavButtons.forEach((button, i)=> {
            button.addEventListener('click', () => {
                this.display.changeProjectDisplay(i)
            })
        })

        addTaskButton.addEventListener('click', () => {
            this.display.createAddTaskDisplay()
        })

        addProjectButton.addEventListener('click', () => {
            this.display.addProject()
        })
    }
}

const taskList = new App

taskList.run()
