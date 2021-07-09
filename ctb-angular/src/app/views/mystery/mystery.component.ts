import { Component, Input, OnChanges, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-mystery',
  templateUrl: './mystery.component.html',
  styleUrls: ['./mystery.component.scss'],
})
export class MysteryComponent implements OnInit, OnChanges {
  constructor(private router: Router) {}

  mystery: string = ''
  decade: number = 0 // zero based to fetch correct index from json file inside data

  nextDecade() {
    if (this.decade < 4) this.decade += 1
    else this.router.navigateByUrl('final-prayers')
    // Push new path onto history stack to enable forward / backward nav
    // this.router
    // Update this component to render next mystery, or final prayers
    // if (this.decade < 5) this.decade = this.decade + 1
  }

  ngOnInit(): void {
    const route = this.router.url.split('/')
    this.mystery = route[1]
    // this.decade = Number(route[2])
    // this.nextUrl = `/${this.mystery}/${this.decade + 1}`

    // const test = route.match(/\/(\w+)\/(\d)/gi)
    // Extract data passed from app-routing.module.ts
    // const data = this.router.routerState.root.firstChild?.snapshot.data
    // if (data && data.id && data.mystery) {
    //   this.decade = data.id
    //   this.mystery = data.mystery
    //   this.nextUrl = `/${this.mystery}/${this.decade + 1}`
    // }
    // // console.log(data?.id, data?.mystery)

    // console.log(this.mystery, this.decade)
  }

  ngOnChanges(): void {}
}
