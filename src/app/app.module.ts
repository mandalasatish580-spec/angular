import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { StringComponent } from './string/string.component';
import { PropertyComponent } from './property/property.component';
import { EventComponent } from './event/event.component';
import { CounteventComponent } from './countevent/countevent.component';
import { TwowaydatabindingComponent } from './twowaydatabinding/twowaydatabinding.component';
import { FormsModule } from '@angular/forms';
import { NpifdirectivesComponent } from './npifdirectives/npifdirectives.component';
import { IfelseDirComponent } from './ifelse-dir/ifelse-dir.component';
import { SwitchDirComponent } from './switch-dir/switch-dir.component';
import { ForDirComponent } from './for-dir/for-dir.component';
import { ArrayobjComponent } from './arrayobj/arrayobj.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { PipesPipe } from './pipes.pipe';
import { PipesComponent } from './pipes/pipes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { GallaryComponent } from './gallary/gallary.component';
import { ContactComponent } from './contact/contact.component';
import { AaboutComponent } from './aabout/aabout.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    StringComponent,
    PropertyComponent,
    EventComponent,
    CounteventComponent,
    TwowaydatabindingComponent,
    NpifdirectivesComponent,
    IfelseDirComponent,
    SwitchDirComponent,
    ForDirComponent,
    ArrayobjComponent,
    NgStyleComponent,
    NgClassComponent,
    PipesPipe,
    PipesComponent,
    NavbarComponent,
    HomeComponent,
    ServiceComponent,
    GallaryComponent,
    ContactComponent,
    AaboutComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
