import {Component,ViewEncapsulation} from 'angular2/core';
import {Config} from './config.service';
import {Router, RouteParams, RouterLink} from 'angular2/router';
// import {PageScroll} from 'ng2-page-scroll';

@Component({
	 selector: 'banner',
	 templateUrl: 'app/banner.component.html',
	 directives: [RouterLink],
	 styleUrls: ['./app/bannerstyle.css'],
  	 encapsulation: ViewEncapsulation.None
})

export class BannerComponent{
	mainHeading = Config.MAIN_HEADING;
	// quotes:Array<String>;
	//displayString = "please work my god";
	myQuotes = new Array("The successful warrior is the average man, with laser-like focus. -Bruce Lee",
								"The people who are crazy enough to think they can change the world, are the ones who do -Rob Siltanen",
								"Opportunities don’t happen, you create them. -Chris Grosser",
								"Knowing is not enough; we must apply. Wishing is not enough; we must do. -Johann Wolfgang Von Goethe")
	displayQuote = this.myQuotes[randomIntFromInterval(0, this.myQuotes.length - 1)];
	// 	this.quotes = [
	// 	new String("If you want to achieve greatness stop asking for permission."),
	// 	new String("To live a creative life, we must lose our fear of being wrong."),
	// 	new String("Success is walking from failure to failure with no loss of enthusiasm."),
	// 	new String("Opportunities don’t happen, you create them. -Chris Grosser"),
	// 	]
	constructor(){
		// var displayString: string;
		// var display: string;
		// var myQuotes = new Array("If you want to achieve greatness stop asking for permission.",
		// 						"Success is walking from failure to failure with no loss of enthusiasm.",
		// 						"Opportunities don’t happen, you create them. -Chris Grosser",
		// 						"To live a creative life, we must lose our fear of being wrong.")
		//quotes(randomIntFromInterval(0,quotes.length -1));
		//displayString = quotes[randomIntFromInterval(0,quotes.length() -1)]
		// display = "Display me";
		
	}


}


// @RouteConfig([
//     {path:'/routing-test', name: 'RoutingTest', component: RoutingTestComponent, useAsDefault: true},
// ])

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max - min + 1) + min);
}