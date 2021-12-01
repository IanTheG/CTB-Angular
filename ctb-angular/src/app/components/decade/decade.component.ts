import { AfterViewChecked, Component, Input, OnChanges, OnInit } from '@angular/core'
import { MysteryService } from '../../services/mystery.service'
import { MysteryI, DecadeI, defaultMystery, defaultDecade } from '../../models/mysteries'
import { AnimationsService } from 'src/app/services/animations.service'
import { TranslateService } from 'src/app/services/translate.service'
import { PrayersI } from 'src/app/models/lang'

@Component({
  selector: 'app-decade',
  templateUrl: './decade.component.html',
  styleUrls: ['./decade.component.scss'],
})
export class DecadeComponent implements OnInit, OnChanges, AfterViewChecked {
  @Input() decade!: number
  @Input() mystery!: string

  // Limits calls to AfterViewChecked to initialize fadeBoxes() only once
  decadeChange = false

  mysteryData: MysteryI = defaultMystery
  decadeData: DecadeI = defaultDecade

  prayers: PrayersI = {} as PrayersI

  constructor(private animations: AnimationsService, private translate: TranslateService) {}

  ngOnInit(): void {
    // Initialize mystery state by calling data from service
    this.translate.lang.subscribe((e) => {
      this.prayers = e.prayers
      switch (this.mystery) {
        case 'glorious':
          this.mysteryData = e.glorious
          break
        case 'joyful':
          this.mysteryData = e.joyful
          break
        case 'luminous':
          this.mysteryData = e.luminous
          break
        case 'sorrowful':
          this.mysteryData = e.sorrowful
          break
        case 'default':
          return
      }
    })
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
