import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';
import { UserComponent } from './user.component';
import { UserDetailComponent } from './user-detail.component';
export const ROUTES: Routes = [
  { path: '',      component: UserComponent },
  { path: 'user/:id', component: UserDetailComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'user',  component: UserComponent },
  { path: 'about', component: AboutComponent },
  { path: 'detail', loadChildren: './+detail#DetailModule'},
  { path: 'barrel', loadChildren: './+barrel#BarrelModule'},
  { path: '**',    component: NoContentComponent },
];
