import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { GenderpipePipe } from './pipes/genderpipe.pipe';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserComponent } from './components/user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { AddUserComponent } from './components/add-user/add-user.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import { BindingdemoComponent } from './components/bindingdemo/bindingdemo.component';
import { NgclassdemoComponent } from './components/ngclassdemo/ngclassdemo.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeComponent,
    GenderpipePipe,
    ContactComponent,
    AboutComponent,
    EmployeeListComponent,
    ReactiveFormComponent,
    UserComponent,
    AddUserComponent,
    DeleteUserComponent,
    BindingdemoComponent,
    NgclassdemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
