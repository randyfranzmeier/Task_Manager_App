import { Component, EventEmitter} from "@angular/core";

@Component({
    selector: 'app-task',
    templateUrl: 'task.component.html',
    styleUrls: ['./task.component.css']
})
export class Task {
   Task(titleControl:string, desControl: String) {
   }
}
// template: '<input type="text" [(ngModel)]="name" ><p>Task Component <p><br><p> Hello {{ name }}<p>'