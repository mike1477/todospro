import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgProgressModule } from '@ngx-progressbar/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule } from '@angular/forms';
import { MessageComponent } from './feedback/message/message.component';
import { HttpClientModule } from  '@angular/common/http';
import { PasswordsMatchDirective } from './users/passwords-match.directive';
import { ProjectViewComponent } from './boards/project-view/project-view.component';
import { ProjectCreateComponent } from './boards/project-create/project-create.component';
import { ProjectEditComponent } from './boards/project-edit/project-edit.component';
import { TaskViewComponent } from './boards/task-view/task-view.component';
import { TaskCreateComponent } from './boards/task-create/task-create.component';
import { TaskEditComponent } from './boards/task-edit/task-edit.component';
import { BoardComponent } from './boards/board/board.component';
import { DeletedComponent } from './boards/deleted/deleted.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    EditUserComponent,
    HeaderComponent,
    MessageComponent,
    PasswordsMatchDirective,
    ProjectViewComponent,
    ProjectCreateComponent,
    ProjectEditComponent,
    TaskViewComponent,
    TaskCreateComponent,
    TaskEditComponent,
    BoardComponent,
    DeletedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgProgressModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
