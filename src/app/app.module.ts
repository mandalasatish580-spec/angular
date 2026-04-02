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
    ArrayobjComponent
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
