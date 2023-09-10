import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgModel} from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {
//  send it to task comp, call fetch, display on screen
  // @Input() title!: string;
  // @Input() description!: string;
  // @Output() titleChange = new EventEmitter<string>();
  // @Output() descriptionChange = new EventEmitter<string>();
  title!: string;
  description!: string;
  
 setTitle = (e: any) =>{
  this.title = e.target.value
 }

 setDesc = (e: any) =>{
  this.description = e.target.value
 }

taskData(e: Event) {
  e.preventDefault();
  if(this.title == undefined || this.title === '') {
    window.alert("title is required")
  }
  else {
    window.alert("title: " + this.title + " description: " + this.description)
  }
}
}

