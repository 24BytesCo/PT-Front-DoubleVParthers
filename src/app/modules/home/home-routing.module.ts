import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SessionGuard } from 'src/app/core/guards/session.guard';

const routes: Routes =
  [
    
    {
      path: "user",
      loadChildren: () => import("../user/user.module").then(m => m.UserModule),
      canActivate: [SessionGuard]
    },
    {
      path: "person",
      loadChildren: () => import("../person/person.module").then(m => m.PersonModule),
      canActivate: [SessionGuard]

    },
    {
      path: "**",
      redirectTo: "/",

    }
    
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
