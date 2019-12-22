import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IqaListComponent } from './iqa-list/iqa-list.component';
import { MiqaListComponent } from './miqa-list/miqa-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'miq/', pathMatch: 'full' },
  { path: 'miq/:topic', component: MiqaListComponent },
  { path: 'miq/:topic/:id', component: IqaListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
