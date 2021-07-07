import { Component, OnInit } from '@angular/core'
import PRAYERS from '../../../../data/prayers.json'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  creed = PRAYERS.CREED
  our_father = PRAYERS.OUR_FATHER
  hail_mary = PRAYERS.HAIL_MARY
  glory_be = PRAYERS.GLORY_BE

  currentDay: number = new Date().getDay()

  ngOnInit(): void {}
}
