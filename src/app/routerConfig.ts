import { Routes } from '@angular/router';
import { UserListComponent } from './components/user/userlist.component';
import { UserComponent } from './components/user/user.component';

const appRoutes: Routes = [
  { path: 'user/:id', 
    component: UserComponent
  },
  {
    path: 'userlist',
    component: UserListComponent
  },
];
export default appRoutes;