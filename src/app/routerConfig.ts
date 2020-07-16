import { Routes } from '@angular/router';
import { UserListComponent } from './components/user/userlist.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';

const appRoutes: Routes = [
  { path: '', 
    component: LoginComponent
  },
  { path: 'user/:id', 
    component: UserComponent
  },
  {
    path: 'userlist',
    component: UserListComponent
  },
];
export default appRoutes;