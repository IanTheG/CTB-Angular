import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { HomeComponent } from './views/home/home.component'
import { MysteryComponent } from './views/mystery/mystery.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'glorious',
    component: MysteryComponent,
  },
  {
    path: 'joyful',
    component: MysteryComponent,
  },
  {
    path: 'sorrowful',
    component: MysteryComponent,
  },
  {
    path: 'luminous',
    component: MysteryComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
