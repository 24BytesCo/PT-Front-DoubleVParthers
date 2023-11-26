import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes =
  [
    
    {
      path: "user",
      loadChildren: () => import("../user/user.module").then(m => m.UserModule)
    },
    {
      path: "person",
      loadChildren: () => import("../person/person.module").then(m => m.PersonModule)
    },
    
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
