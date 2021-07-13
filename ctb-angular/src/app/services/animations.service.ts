import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class AnimationsService {
  constructor() {}

  fadeBoxes(): void {
    const containers = Array.from(document.querySelectorAll('.box')) as HTMLElement[]
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
          target.classList.remove('visible')
        }
      })
    }, options)

    containers.forEach((container, index) => {
      const childElements = container.children
      if (childElements) {
        const containerChildren = Array.from(childElements) as HTMLElement[]

        containerChildren.forEach((el, index: number) => {
          el.style.setProperty('--delay', `${index * 250}ms`)
        })

        observer.observe(container)
      }
    })
  }
}
