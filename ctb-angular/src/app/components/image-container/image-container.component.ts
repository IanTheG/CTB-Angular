import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-image-container',
  templateUrl: './image-container.component.html',
  styleUrls: ['./image-container.component.scss'],
})
export class ImageContainerComponent implements OnInit {
  constructor(private router: Router) {}

  image = {
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

    let size = 'S'
    if (window.innerHeight > 900) size = 'M'
    if (window.innerHeight > 1200) size = 'L'

    this.image = {
      url: `https://connectingthebeads-images.s3.amazonaws.com/${dailyMystery}/${randomImageNumber}${size}.jpg`,
      alt: `${dailyMystery} ${randomImageNumber}`,
    }
  }
}
