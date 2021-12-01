import { Component, OnInit } from '@angular/core'
import { ActivationEnd, Event, Router } from '@angular/router'
import { TranslateService } from 'src/app/services/translate.service'

interface PrayerI {
  title: string
  text: string[]
}
@Component({
  selector: 'app-mystery',
  templateUrl: './mystery.component.html',
  styleUrls: ['./mystery.component.scss'],
})
export class MysteryComponent implements OnInit {
  glory_be: PrayerI = {} as PrayerI
  fatima_prayer: PrayerI = {} as PrayerI
  continue: string = ''

  constructor(private router: Router, private translate: TranslateService) {
    // Subscribes to changes in the router url, updates state
    this.router.events.subscribe((event: Event) => {
      // Use ChildActivationEnd or ActivationEnd so code is only executed once
      if (event instanceof ActivationEnd) {
        this.route = this.router.url.split('/')
        this.mystery = this.route[1]
        this.decade = Number(this.route[2])
      }
    })
    this.translate.lang.subscribe((e) => {
      this.glory_be = e.prayers.GLORY_BE
      this.fatima_prayer = e.prayers.FATIMA_PRAYER
      this.continue = e.buttons.continue
    })
  }

  // Local state
  route: string[] = []
  mystery: string = ''
  decade: number = 1

  nextDecade() {
    if (Number(this.route[2]) < 5) {
      this.router.navigateByUrl(`${this.mystery}/${this.decade + 1}`)
    } else {
      this.router.navigateByUrl('final-prayers')
    }
  }

  ngOnInit(): void {
    // this.animations.fadeBoxes()
    document.getElementById('top-box')?.scrollIntoView(true)
  }
}
