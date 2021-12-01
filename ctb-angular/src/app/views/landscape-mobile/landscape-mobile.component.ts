import { Component, OnDestroy, OnInit } from '@angular/core'
import { TranslateService } from 'src/app/services/translate.service'

@Component({
  selector: 'app-landscape-mobile',
  templateUrl: './landscape-mobile.component.html',
  styleUrls: ['./landscape-mobile.component.scss'],
})
export class LandscapeMobileComponent implements OnInit {
  text: string = ''

  constructor(private translate: TranslateService) {
    this.translate.lang.subscribe((e) => {
      this.text = e.landscape_mobile
    })
  }

  ngOnInit(): void {}
}
