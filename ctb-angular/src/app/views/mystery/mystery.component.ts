import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-mystery',
  templateUrl: './mystery.component.html',
  styleUrls: ['./mystery.component.scss'],
})
export class MysteryComponent implements OnInit {
  constructor(private router: Router) {
    // Subscribes to changes in the router url, updates state
    this.router.events.subscribe(() => {
      this.route = this.router.url.split('/')
      this.mystery = this.route[1]
      this.decade = Number(this.route[2])
    })
  }

  // Local state
  route: string[] = []
  mystery: string = ''
  decade: number = 1

  nextDecade() {
    if (Number(this.route[2]) < 5) {
      this.router.navigateByUrl(`${this.mystery}/${this.decade + 1}`)
      document.getElementById('top-box')?.scrollIntoView(true)
    } else {
      this.router.navigateByUrl('final-prayers')
    }
  }

  ngOnInit(): void {
    document.getElementById('top-box')?.scrollIntoView(true)
  }
}
