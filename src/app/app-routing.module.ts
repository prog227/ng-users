import { NgModule }             from '@angular/core';

// 1. Routing Libraries
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent }   from './articles/articles.component';

// 2. Import the UserComponent
import { UsersComponent }   from './users/users.component';
import { UserViewComponent }   from './user-view/user-view.component';
import { UserCreateComponent }   from './user-create/user-create.component';
import { UserEditComponent }   from './user-edit/user-edit.component';

// 3. Declare your routes
const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'users/view/:id', component: UserViewComponent },
  { path: 'users/create', component: UserCreateComponent },
  { path: 'users/edit/:id', component: UserEditComponent },
  { path: 'articles', component: ArticlesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
