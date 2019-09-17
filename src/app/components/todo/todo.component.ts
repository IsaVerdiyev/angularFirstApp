import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  tasks = new Array<Task>();
  
  newTask:Task = new Task();
  newTaskDesciption: string;

  editMode: boolean = false;

  constructor() { }

  ngOnInit() {
    this.tasks.push(new Task('One', 'Lorem ipsun'));
    this.tasks.push(new Task('Two', 'Lorem ipsun'));
    this.tasks.push(new Task('Three', 'Lorem ipsun'));
  }

  onFormSubmit(): void{
    this.tasks.push(this.newTask);
    this.newTask = new Task();
  }

  onTaskClick(task:Task):void{
    task.done = !task.done;
  }

  onTaskDelete(task:Task):void{
    this.tasks = this.tasks.filter(item => item != task);

  }

  onTaskEdit(task:Task):void{
    this.newTask = task;
    this.editMode = true;
  }

  onDoneClick():void{
    this.newTask = new Task();
    this.editMode = false;
  }
  
}

