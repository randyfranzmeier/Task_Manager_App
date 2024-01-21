import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { Task } from './task/task.component';
import { FormsModule } from '@angular/forms';
import { Layout } from './layout/layout.component';
import { SearchComponent } from './search/search.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { HttpClientModule } from '@angular/common/http';
import { Task } from "./task/task.component";
//import { TaskViewableComponent } from './task-viewable/task-viewable.component';


@NgModule({
    declarations: [
        AppComponent,
        // Task,
        Layout,
        SearchComponent,
        CreateTaskComponent,
        //TaskViewableComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        Task
    ]
})
export class AppModule {}
