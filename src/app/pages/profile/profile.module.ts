import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import {YouTubePlayerModule} from '@angular/youtube-player'


import { Profile } from './profile.component'
import { ComponentsModule } from 'src/app/components/components.module'

const routes = [
  {
    path: '',
    component: Profile,
  },
]

@NgModule({
  declarations: [Profile],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes), YouTubePlayerModule],
  exports: [Profile],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProfileModule {}
