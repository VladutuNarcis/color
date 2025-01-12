import { Component, Input } from '@angular/core'

@Component({
  selector: 'member-details',
  templateUrl: 'member-details.component.html',
  styleUrls: ['member-details.component.css'],
})
export class MemberDetails {
  @Input()
  heading11: string = 'WEB DEVELOPER'
  @Input()
  heading1: string = 'Ryan Tompson'
  @Input()
  imageAlt: string = 'image'
  @Input()
  imageSrc: string =
    'https://demos.creative-tim.com/notus-pro-react/static/media/team-1-800x800.fa5a7ac2.jpg'
  constructor() {}
}
