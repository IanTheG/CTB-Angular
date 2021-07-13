import { Component, OnInit } from '@angular/core'
import { AnimationsService } from 'src/app/services/animations.service'
import PRAYERS from '../../../assets/prayers.json'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private animations: AnimationsService) {}

  creed = PRAYERS.CREED
  our_father = PRAYERS.OUR_FATHER
  hail_mary = PRAYERS.HAIL_MARY
  glory_be = PRAYERS.GLORY_BE

  currentDay: number = new Date().getDay()

  ngOnInit(): void {
    document.getElementById('top-box')?.scrollIntoView(true)
    this.animations.fadeBoxes()
  }
}
