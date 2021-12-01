import { Component, OnInit } from '@angular/core'
import { HomeI, PrayersI } from 'src/app/models/lang'
import { AnimationsService } from 'src/app/services/animations.service'
import { TranslateService } from 'src/app/services/translate.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // Initialize text and prayers, subscribe to the current language in translate service
  text: HomeI = {} as HomeI
  prayers: PrayersI = {} as PrayersI
  checked: boolean = false

  constructor(private animations: AnimationsService, private translate: TranslateService) {
    this.translate.lang.subscribe((e) => {
      this.prayers = e.prayers
      this.text = e.home
    })
  }

  currentDay: number = new Date().getDay()

  ngOnInit(): void {
    if (this.translate.getLangInStorage()) this.checked = true
    document.getElementById('top-box')?.scrollIntoView(true)
    this.animations.fadeBoxes()
  }

  toggleLang(): void {
    if (this.checked) this.translate.setLang('es')
    else if (!this.checked) this.translate.setLang('en')
  }
}
