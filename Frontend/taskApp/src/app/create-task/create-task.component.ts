import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent{

 title!: string;
 description!: string;

  
 setTitle = (e: any) =>{
  this.title = e.target.value;
 }

 setDesc = (e: any) =>{
  this.description = e.target.value;
 }

taskData(e: Event) {
  //e.preventDefault();
  if(this.title == undefined || this.title === '') {
    window.alert("title is required")
  }
  else {   
    const data = {title: this.title, description: this.description, completed: false};
    this.postData(data);
  }
}

 async postData(data:any) { 
  
  try { 
    const response = await fetch('http://localhost:3005/api/addTask', {
      method: "POST",
      mode: 'cors',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    await response.json();
    console.log("task added!"); //display added task on page
  }
  catch(error) {
    console.log("Unable to save task");
  }
  finally {
    window.location.reload();
  }
}
}



