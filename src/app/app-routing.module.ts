import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IqaListComponent } from "./iqa-list/iqa-list.component";

const routes: Routes = [
  { path: "", redirectTo: "/", pathMatch: "full" },
  { path: ":topic", component: IqaListComponent },
  { path: ":topic/:id", component: IqaListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
