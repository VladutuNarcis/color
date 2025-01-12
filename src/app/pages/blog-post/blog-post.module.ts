import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { BlogPost } from './blog-post.component'
import { ComponentsModule } from 'src/app/components/components.module'

const routes = [
  {
    path: '',
    component: BlogPost,
  },
]

@NgModule({
  declarations: [BlogPost],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [BlogPost],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BlogPostModule {}
