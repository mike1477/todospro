import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent }      from './users/login/login.component';
import { RegisterComponent } from "./users/register/register.component";
import { EditUserComponent } from "./users/edit-user/edit-user.component";

import { BoardComponent } from "./boards/board/board.component";
import { ProjectCreateComponent } from "./boards/project-create/project-create.component";
import { ProjectEditComponent } from "./boards/project-edit/project-edit.component";
import { ProjectViewComponent } from "./boards/project-view/project-view.component";
import { TaskCreateComponent} from "./boards/task-create/task-create.component";
import { TaskEditComponent } from "./boards/task-edit/task-edit.component";
import { TaskViewComponent } from "./boards/task-view/task-view.component";
import { DeletedComponent } from "./boards/deleted/deleted.component";

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'edituser', component: EditUserComponent },

  { path: 'overview', component: BoardComponent },
  { path: 'create', component: ProjectCreateComponent },
  { path: 'edit', component: ProjectEditComponent },
  { path: 'view', component: ProjectViewComponent },

  { path: 'createtask', component: TaskCreateComponent },
  { path: 'edittask', component: TaskEditComponent },
  { path: 'viewtask', component: TaskViewComponent },
  { path: 'delete', component: DeletedComponent },

];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
