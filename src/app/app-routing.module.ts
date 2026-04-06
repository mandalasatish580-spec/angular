import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AaboutComponent } from './aabout/aabout.component';
import { ServiceComponent } from './service/service.component';
import { GallaryComponent } from './gallary/gallary.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
        {path:"",component:HomeComponent},
        {path:"home",component:HomeComponent},
        {path:"about",component:AaboutComponent},
        {path:"service",component:ServiceComponent},
        {path:"gallary",component:GallaryComponent},
        {path:"contact",component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
