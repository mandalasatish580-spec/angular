import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { StringComponent } from './string/string.component';
import { PropertyComponent } from './property/property.component';
import { EventComponent } from './event/event.component';
import { CounteventComponent } from './countevent/countevent.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    StringComponent,
    PropertyComponent,
    EventComponent,
    CounteventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
