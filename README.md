# CTB-Angular

A rewrite of Connecting The Beads in Angular with PWA enabled for offline caching

Visit https://www.ctb.mobi for the live version on AWS!

## Code snippets I want to keep

### Extract data object from a route defined in the routing module

```ts
// In a component..
mystery: string = ''
decade: number = 0

// Extract data passed from app-routing.module.ts
const data = this.router.routerState.root.firstChild?.snapshot.data
if (data && data.id && data.mystery) {
  this.decade = data.id
  this.mystery = data.mystery
  this.nextUrl = `/${this.mystery}/${this.decade + 1}`
}
console.log(data?.mystery, data?.id)
console.log(this.mystery, this.decade)
```
