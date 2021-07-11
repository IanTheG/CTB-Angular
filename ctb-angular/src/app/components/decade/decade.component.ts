import { Component, Input, OnChanges, OnInit } from '@angular/core'
import { MysteryService } from '../../services/mystery.service'
import { MysteryI, DecadeI, defaultMystery, defaultDecade } from '../../models/mysteries'
import PRAYERS from '../../../../data/prayers.json'

@Component({
  selector: 'app-decade',
  templateUrl: './decade.component.html',
  styleUrls: ['./decade.component.scss'],
})
export class DecadeComponent implements OnInit, OnChanges {
  constructor(private mysteryService: MysteryService) {}

  @Input() decade!: number
  @Input() mystery!: string

  mysteryData: MysteryI = defaultMystery
  decadeData: DecadeI = defaultDecade

  num: string[] = ['First', 'Second', 'Third', 'Fourth', 'Fifth']
  our_father = PRAYERS.OUR_FATHER

  ngOnInit(): void {
    // Initialize mystery state by calling data from service
    switch (this.mystery) {
      case 'glorious':
        this.mysteryData = this.mysteryService.getGlorious()
        break
      case 'joyful':
        this.mysteryData = this.mysteryService.getJoyful()
        break
      case 'luminous':
        this.mysteryData = this.mysteryService.getLuminous()
        break
      case 'sorrowful':
        this.mysteryData = this.mysteryService.getSorrowful()
        break
      case 'default':
        return
    }
    this.decadeData = this.mysteryData.decades[this.decade - 1]
  }

  ngOnChanges(): void {
    document.getElementById('top-box')?.scrollIntoView(true)
    this.decadeData = this.mysteryData.decades[this.decade - 1]
  }
}
