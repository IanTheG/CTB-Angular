import { Component, OnDestroy, OnInit } from '@angular/core'
import { ContactI, LandscapeDesktopI } from 'src/app/models/lang'
import { TranslateService } from 'src/app/services/translate.service'

@Component({
  selector: 'app-landscape-desktop',
  templateUrl: './landscape-desktop.component.html',
  styleUrls: ['./landscape-desktop.component.scss'],
})
export class LandscapeDesktopComponent implements OnInit {
  title: string = ''
  text: LandscapeDesktopI = {} as LandscapeDesktopI
  copyright: ContactI = {} as ContactI

  constructor(private translate: TranslateService) {
    this.translate.lang.subscribe((e) => {
      this.title = e.home.title
      this.text = e.landscape_desktop
      this.copyright = e.home.contact
    })
  }

  ngOnInit(): void {
    this.fadeDesktopBox()
  }

  fadeDesktopBox(): void {
    const container = document.getElementById('desktop-box') as HTMLElement
    const options = {
      rootMargin: '0px',
      threshold: 0.75,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const { target } = entry

        if (entry.intersectionRatio >= 0.75) {
          target.classList.add('visible')
        } else {
          // target.classList.remove('visible')
        }
      })
    }, options)

    const childElements = container.children
    if (childElements) {
      const containerChildren = Array.from(childElements) as HTMLElement[]

      containerChildren.forEach((el, index: number) => {
        el.style.setProperty('--delay', `${index * 250}ms`)
      })

      observer.observe(container)
    }
  }
}
