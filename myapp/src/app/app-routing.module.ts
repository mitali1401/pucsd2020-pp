import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { GruopComponent } from './gruop/gruop.component';
import { HomePageComponent } from './home-page/home-page.component';
import { GroupListComponent } from './group-list/group-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserGroupComponent } from './user-group/user-group.component';
import { EditUserComponent } from './edit-user/edit-user.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent },
    { path: 'create-user', component: CreateUserComponent },
    { path: 'create-group', component: GruopComponent },
    {path:'homepage',component: HomePageComponent},
    {path:'groupList',component: GroupListComponent},
    {path:'userList',component: UserListComponent},
    {path:'userGroup',component: UserGroupComponent},
    {path:'userEdit',component: EditUserComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
