import { Component, EventEmitter} from "@angular/core";

@Component({
    selector: 'app-task',
    template: '<input type="text" [(ngModel)]="name" ><p>Task Component <p><br><p> Hello {{ name }}<p>'
})
export class Task {
    name = 'myName';
}