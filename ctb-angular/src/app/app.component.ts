import { Component, OnDestroy, OnInit } from '@angular/core'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Connecting The Beads'

  // Watch for window resize changes to change viewport window size
  setDocHeight() {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight / 100}px`)
  }

  ngOnInit() {
    window.addEventListener('load', this.setDocHeight)
    window.addEventListener('resize', this.setDocHeight)
    window.addEventListener('orientationchange', this.setDocHeight)
  }

  ngOnDestroy() {
    window.removeEventListener('load', this.setDocHeight)
    window.removeEventListener('resize', this.setDocHeight)
    window.removeEventListener('orientationchange', this.setDocHeight)
  }
}
