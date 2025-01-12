import { Component, Input } from '@angular/core'

@Component({
  selector: 'article-card',
  templateUrl: 'article-card.component.html',
  styleUrls: ['article-card.component.css'],
})
export class ArticleCard {
  @Input()
  avatarSrc: string = '15958451-f790-4024-a70e-cc38b82637f2'
  @Input()
  name: string = 'A. G.'
  @Input()
  newProp: string = 'Portofino one of the best for remote working'
  @Input()
  imageSrc: string = '/assets/rainbow.jpg'
  @Input()
  time: string = 'Medicine student'
  @Input()
  avatarAlt: string = 'avatar'
  @Input()
  description: string =
    "I think of a rainbow, it combines all the primary colors. And I also remember when I learned the acronym 'ROGVAIV' in elementary school. And one more thing, a black and white image. You only appreciate colors after you see a black and white image, because you have to think about where each color would have been."
  @Input()
  imageAlt: string = 'image'
  constructor() {}
}
