import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularToDoList';
  todoTaskList: Array<string> = [];
  doneTaskList: Array<string> = [];
  newTask: string;

  addNewTask() {
    this.todoTaskList.push(this.newTask);
    this.newTask = '';
    console.log(this.todoTaskList);
  }

  finishTask(task) {
    this.doneTaskList.push(task);
    this.cancelTask(task);
  }

  cancelTask(task) {
    this.todoTaskList = this.todoTaskList.filter(e => e !== task);
  }
}
