import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import PRAYERS from '../../../assets/prayers.json'

@Component({
  selector: 'app-final-prayers',
  templateUrl: './final-prayers.component.html',
  styleUrls: ['./final-prayers.component.scss'],
})
export class FinalPrayersComponent implements OnInit {
  constructor(private router: Router) {}

  hail_holy_queen = PRAYERS.HAIL_HOLY_QUEEN
  final_prayer = PRAYERS.FINAL_PRAYER
  st_michael = PRAYERS.ST_MICHAEL

  ngOnInit(): void {
    document.getElementById('top-box')?.scrollIntoView(true)
  }

  navHome() {
    this.router.navigateByUrl('/')
  }
}
