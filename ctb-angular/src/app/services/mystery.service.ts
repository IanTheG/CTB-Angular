import { Injectable } from '@angular/core'
import glorious from '../../../data/glorious.json'
import joyful from '../../../data/joyful.json'
import luminous from '../../../data/luminous.json'
import sorrowful from '../../../data/sorrowful.json'

@Injectable({
  providedIn: 'root',
})
export class MysteryService {
  constructor() {}

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
