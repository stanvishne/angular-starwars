import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import ShipsComponent from './ships/ships.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'ships', component: ShipsComponent}
];

export const routing = RouterModule.forRoot(routes);
