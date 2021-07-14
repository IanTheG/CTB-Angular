import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './views/home/home.component'
import { MysteryComponent } from './views/mystery/mystery.component'
import { DecadeComponent } from './components/decade/decade.component'
import { FinalPrayersComponent } from './views/final-prayers/final-prayers.component'
import { LandscapeMobileComponent } from './views/landscape-mobile/landscape-mobile.component'
import { LandscapeDesktopComponent } from './views/landscape-desktop/landscape-desktop.component'
import { ImageContainerComponent } from './components/image-container/image-container.component'
import { ServiceWorkerModule } from '@angular/service-worker'
import { environment } from '../environments/environment'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MysteryComponent,
    DecadeComponent,
    FinalPrayersComponent,
    LandscapeMobileComponent,
    LandscapeDesktopComponent,
    ImageContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
