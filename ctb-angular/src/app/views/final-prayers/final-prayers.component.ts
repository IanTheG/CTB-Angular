import { Component, OnDestroy, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { PrayersI } from 'src/app/models/lang'
import { AnimationsService } from 'src/app/services/animations.service'
import { TranslateService } from 'src/app/services/translate.service'

@Component({
  selector: 'app-final-prayers',
  templateUrl: './final-prayers.component.html',
  styleUrls: ['./final-prayers.component.scss'],
})
export class FinalPrayersComponent implements OnInit {
  prayers: PrayersI = {} as PrayersI
  homeButton: string = ''
  final_prayers_title: string = ''
  end_with: string = ''

  constructor(private router: Router, private animations: AnimationsService, private translate: TranslateService) {
    this.translate.lang.subscribe((e) => {
      this.final_prayers_title = e.home.prayers.final
      this.end_with = e.home.prayers.end_with
      this.prayers = e.prayers
      this.homeButton = e.buttons.home
    })
  }

  ngOnInit(): void {
    this.animations.fadeBoxes()
    document.getElementById('top-box')?.scrollIntoView(true)
  }

  navHome() {
    this.router.navigateByUrl('/')
  }
}
