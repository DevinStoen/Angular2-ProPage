import {Component} from 'angular2/core';
import {Video} from './video';

@Component({
	 selector: 'playlist',
	 templateUrl: 'app/playlist.component.html',
	 inputs: ['videos'],
	 styles: [`
	 		h2{
	 			background: black;
	 			color:white;
	 		}	 
	 `]


	 //'app/ts/playlist.component.html'
})

export class PlaylistComponent{

	onSelect(vid:Video){
		console.log(JSON.stringify(vid));
	}

}