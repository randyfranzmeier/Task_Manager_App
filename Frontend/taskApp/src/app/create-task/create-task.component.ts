import { Component } from '@angular/core';
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {
//get data, make sure it is valid, send it to task comp, call fetch, display on screen
titleControl = ''
desControl = ''

taskData(event: Event) {
   event.preventDefault();
   console.log(this.titleControl)
   console.log(this.desControl)
}
}

