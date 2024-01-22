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
  
  deleteTask = async(id: number) =>{
    await fetch(`http://localhost:3005/api/deleteTask/${id}`, {
      method: "DELETE",
      mode: "cors",
      headers: {"content-type":"application/json"},
    }).then(response =>{ if(response.ok) {
      console.log("successfully deleted task!")
    }})
    .catch(err =>console.log(err))
    .finally(() =>{
      window.location.reload();
    })
  }
}
