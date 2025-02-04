import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'blog-post',
  templateUrl: 'blog-post.component.html',
  styleUrls: ['blog-post.component.css'],
})
export class BlogPost {
  rawxl01: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('OTHER PERSPECTIVES - Color')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'OTHER PERSPECTIVES - Color',
      },
    ])
  }
}
