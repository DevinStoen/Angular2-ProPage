import { Component, ViewEncapsulation} from 'angular2/core';
import {Video} from './video';
import {PlaylistComponent} from './playlist.component';
import {BannerComponent} from './banner.component';
import {SkillsComponent} from './skills.component';
import {ProjectsComponent} from './projects.component';
import {Config} from './config.service';
// import {PageScroll} from 'ng2-page-scroll';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [PlaylistComponent, BannerComponent, SkillsComponent, ProjectsComponent],
  styleUrls: ['./app/style.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
	mainHeading = Config.MAIN_HEADING;
	videos:Array<Video>;

	constructor(){
		this.videos = [
			new Video(1, "Unity Game Development", "W5Spp05zckU", "Devin's game development projects."),
			new Video(2, "Unity FPS Project", "OLh99476Zeo", "Devin's game development projects.")
		]
	}
}



//The directives array tells Angular that our template depends upon the HeroFormComponent 
//which is itself a Directive (as are all Components).

//The template is simply the new element tag identified by the component's selector property.
