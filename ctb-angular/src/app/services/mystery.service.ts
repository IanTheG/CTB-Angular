import { Injectable } from '@angular/core'
import { ActivationEnd, Event, Router } from '@angular/router'
import { Observable, of } from 'rxjs'

import glorious from '../../../data/glorious.json'
import joyful from '../../../data/joyful.json'
import luminous from '../../../data/luminous.json'
import sorrowful from '../../../data/sorrowful.json'
// import { MysteryI, DecadeI, defaultMystery, defaultDecade } from '../models/mysteries'

@Injectable({
  providedIn: 'root',
})
export class MysteryService {
  constructor() {}
  // constructor(private router: Router) {
  //   // Subscribes to changes in the router url, updates state
  //   this.router.events.subscribe((event: Event) => {
  //     // Use ChildActivationEnd or ActivationEnd so code is only executed once
  //     if (event instanceof ActivationEnd) {
  //       console.log('test')
  //       this.route = this.router.url.split('/')
  //       this.mystery = this.route[1]
  //       this.decade = Number(this.route[2])
  //     }
  //   })
  // }

  // // Local state
  // // mysteryData: MysteryI = defaultMystery
  // // decadeData: DecadeI = defaultDecade

  // route: string[] = []
  // mystery: string = ''
  // decade: number = 1

  // // Enable components to subscribe to changes in the route, mystery, and decade
  // getRoute(): Observable<string[]> {
  //   return of(this.route)
  // }
  // getMystery(): Observable<string> {
  //   return of(this.mystery)
  // }
  // getDecade(): Observable<number> {
  //   return of(this.decade)
  // }

  getGlorious() {
    return glorious
  }
  getJoyful() {
    return joyful
  }
  getLuminous() {
    return luminous
  }
  getSorrowful() {
    return sorrowful
  }
}
