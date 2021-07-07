import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './views/home/home.component'
import { MysteryComponent } from './views/mystery/mystery.component'

@NgModule({
  declarations: [AppComponent, HomeComponent, MysteryComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
