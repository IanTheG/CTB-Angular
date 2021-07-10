import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DecadeComponent } from './components/decade/decade.component'

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
    children: [
      ...['1', '2', '3', '4', '5'].map((path) => ({
        path,
        component: DecadeComponent,
      })),
    ],
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
