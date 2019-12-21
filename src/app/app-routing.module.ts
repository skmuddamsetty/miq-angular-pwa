import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IqaListComponent } from './iqa-list/iqa-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'miq/', pathMatch: 'full' },
  { path: 'miq/:topic', component: IqaListComponent },
  { path: 'miq/:topic/:id', component: IqaListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
