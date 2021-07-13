import { Component, OnChanges, OnInit } from '@angular/core'
import { ActivationEnd, Event, Router } from '@angular/router'

@Component({
  selector: 'app-image-container',
  templateUrl: './image-container.component.html',
  styleUrls: ['./image-container.component.scss'],
})
export class ImageContainerComponent implements OnInit {
  constructor(private router: Router) {
    // Subscribes to changes in the router url, updates state
    this.router.events.subscribe((event: Event) => {
      // Use ChildActivationEnd or ActivationEnd so code is only executed once
      if (event instanceof ActivationEnd) {
        // Load image for specific mystery and decade
        if (this.router.url !== '/' && this.router.url !== '/final-prayers') {
          this.route = this.router.url.split('/')
          this.mystery = this.route[1]
          this.decade = Number(this.route[2])

          this.image = {
            // url: `https://connectingthebeads-images.s3.amazonaws.com/${this.mystery}/${this.decade}${this.size}.jpg`,
            url: `../../../assets/images/${this.mystery}${this.decade}.jpg`,
            alt: `${this.mystery} ${this.decade}`,
          }
        }
        // Load image for home page
        else {
          this.image = this.homeImage
        }
      }
    })
  }

  // Local state
  route: string[] = []
  mystery: string = ''
  decade: number = 1

  image = {
    url: '',
    alt: '',
  }
  homeImage = {
    url: '',
    alt: '',
  }

  // Initialize home page image
  ngOnInit(): void {
    const randomImageNumber = Math.floor(Math.random() * Math.floor(5)) + 1

    let dailyMystery = ''
    const currentDay = new Date().getDay()
    if (currentDay === 0 || currentDay === 3) dailyMystery = 'glorious'
    else if (currentDay === 1 || currentDay === 6) dailyMystery = 'joyful'
    else if (currentDay === 2 || currentDay === 5) dailyMystery = 'sorrowful'
    else if (currentDay === 4) dailyMystery = 'luminous'

    this.image = {
      // url: `https://connectingthebeads-images.s3.amazonaws.com/${dailyMystery}/${randomImageNumber}${this.size}.jpg`,
      url: `../../../assets/images/${dailyMystery}${randomImageNumber}.jpg`,
      alt: `${dailyMystery} ${randomImageNumber}`,
    }
    this.homeImage = this.image
  }
}
