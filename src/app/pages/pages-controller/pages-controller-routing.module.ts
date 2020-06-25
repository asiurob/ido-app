import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesControllerComponent } from './pages-controller.component';


const routes: Routes = [
  { path: '', component: PagesControllerComponent },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module')
    .then( m => m.RegisterModule )
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesControllerRoutingModule { }
