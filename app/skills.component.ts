import { Component, ViewEncapsulation} from 'angular2/core';
import {Video} from './video';
import {PlaylistComponent} from './playlist.component';
import {BannerComponent} from './banner.component';
import {Config} from './config.service';

@Component({
  selector: 'my-skills',
  templateUrl: 'app/skills.component.html',
  //directives: [PlaylistComponent, BannerComponent],
  styleUrls: ['./app/skillsstyle.css'],
  //encapsulation: ViewEncapsulation.None
})

export class SkillsComponent { 


}

