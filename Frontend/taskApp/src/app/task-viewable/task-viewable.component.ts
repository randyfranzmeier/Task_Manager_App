import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-viewable',
  imports: [CommonModule],
  templateUrl: './task-viewable.component.html',
  standalone: true,
  styleUrls: ['./task-viewable.component.css']
})
export class TaskViewableComponent {
  @Input() task!: any;
  deleteTask = (event: Event) =>{
    console.log("delete task works!!!");
  }
}
