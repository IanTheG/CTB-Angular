import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { HomeComponent } from './views/home/home.component'
import { MysteryComponent } from './views/mystery/mystery.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  ...['glorious', 'joyful', 'sorrowful', 'luminous'].map((path) => ({
    path,
    component: MysteryComponent,
  })),
  {
    path: 'final-prayers',
    component: HomeComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
