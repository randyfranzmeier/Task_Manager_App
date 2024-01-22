import { Component, EventEmitter, AfterViewInit} from "@angular/core";
import { TaskViewableComponent } from "../task-viewable/task-viewable.component";
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-task',
    standalone: true,
    imports: [TaskViewableComponent, CommonModule],
    templateUrl: 'task.component.html',
    styleUrls: ['./task.component.css']
})
export class Task implements AfterViewInit{
    public taskArray: Array<{_id: string, title: string, description: string, completed: boolean, __v: number}> = [];
    
    //hook that calls loadAllTasks when the page loads
    ngAfterViewInit(): void {
        this.loadAllTasks()
    }

    
    loadAllTasks = async() =>{
        this.taskArray = await fetch('http://localhost:3005/api/getAllTasks', {
            method: "GET",
            mode: 'cors',
            headers: { "Content-Type": "application/json" },
        }).then(response =>response.json())
        .then(task =>task.task);
        //console.log(this.taskArray[0]._id)
    }

    

//    loadAllTasks = async()=> {
//        let taskArray = await fetch('http://localhost:3005/api/getAllTasks', {
//         method: "GET",
//         mode: 'cors',
//         headers: { "Content-Type": "application/json" },
//     }).then(response =>response.json())
//     .then(task =>task.task);

    //now that I recieved an array of tasks, I want to map the data
    //in each one to the viewer I created where the lorem ipsum is showing.
   // console.log(taskArray);

   //}
//taskArray: any;
   //get all the tasks from the db and display them on the page. will update when new tasks are added
}
// template: '<input type="text" [(ngModel)]="name" ><p>Task Component <p><br><p> Hello {{ name }}<p>'

