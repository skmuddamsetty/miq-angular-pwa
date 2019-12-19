import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListComponent } from "./list/list.component";

const routes: Routes = [
  { path: "", redirectTo: "/", pathMatch: "full" },
  { path: ":topic", component: ListComponent },
  { path: ":topic/:id", component: ListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
