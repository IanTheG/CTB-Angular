import { AfterViewChecked, Component, Input, OnChanges, OnInit } from '@angular/core'
import { MysteryService } from '../../services/mystery.service'
import { MysteryI, DecadeI, defaultMystery, defaultDecade } from '../../models/mysteries'
import PRAYERS from '../../../assets/prayers.json'
import { AnimationsService } from 'src/app/services/animations.service'

@Component({
  selector: 'app-decade',
  templateUrl: './decade.component.html',
  styleUrls: ['./decade.component.scss'],
})
export class DecadeComponent implements OnInit, OnChanges, AfterViewChecked {
  constructor(private mysteryService: MysteryService, private animations: AnimationsService) {}

  @Input() decade!: number
  @Input() mystery!: string

  // Limits calls to AfterViewChecked to initialize fadeBoxes() only once
  decadeChange = false

  mysteryData: MysteryI = defaultMystery
  decadeData: DecadeI = defaultDecade

  // num: string[] = ['First', 'Second', 'Third', 'Fourth', 'Fifth']
  our_father = PRAYERS.OUR_FATHER
  hail_mary = PRAYERS.HAIL_MARY

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
    this.decadeChange = true
  }

  ngOnChanges(): void {
    document.getElementById('top-box')?.scrollIntoView(true)
    this.decadeData = this.mysteryData.decades[this.decade - 1]
    this.decadeChange = true
  }

  ngAfterViewChecked() {
    if (this.decadeChange == true) {
      this.animations.fadeBoxes()
      this.decadeChange = false
    }
  }
}
