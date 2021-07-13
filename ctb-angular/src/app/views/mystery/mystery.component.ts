import { Component, OnInit } from '@angular/core'
import { ActivationEnd, Event, Router } from '@angular/router'
import { AnimationsService } from 'src/app/services/animations.service'

@Component({
  selector: 'app-mystery',
  templateUrl: './mystery.component.html',
  styleUrls: ['./mystery.component.scss'],
})
export class MysteryComponent implements OnInit {
  constructor(private router: Router, private animations: AnimationsService) {
    // Subscribes to changes in the router url, updates state
    this.router.events.subscribe((event: Event) => {
      // Use ChildActivationEnd or ActivationEnd so code is only executed once
      if (event instanceof ActivationEnd) {
        this.route = this.router.url.split('/')
        this.mystery = this.route[1]
        this.decade = Number(this.route[2])
      }
    })
  }

  // Local state
  route: string[] = []
  mystery: string = ''
  decade: number = 1

  nextDecade() {
    if (Number(this.route[2]) < 5) {
      this.router.navigateByUrl(`${this.mystery}/${this.decade + 1}`)
    } else {
      this.router.navigateByUrl('final-prayers')
    }
  }

  ngOnInit(): void {
    // this.animations.fadeBoxes()
    document.getElementById('top-box')?.scrollIntoView(true)
  }
}
