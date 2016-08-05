System.register(['angular2/core', './config.service', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, config_service_1, router_1;
    var BannerComponent;
    // @RouteConfig([
    //     {path:'/routing-test', name: 'RoutingTest', component: RoutingTestComponent, useAsDefault: true},
    // ])
    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (config_service_1_1) {
                config_service_1 = config_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            // import {PageScroll} from 'ng2-page-scroll';
            BannerComponent = (function () {
                // 	this.quotes = [
                // 	new String("If you want to achieve greatness stop asking for permission."),
                // 	new String("To live a creative life, we must lose our fear of being wrong."),
                // 	new String("Success is walking from failure to failure with no loss of enthusiasm."),
                // 	new String("Opportunities don’t happen, you create them. -Chris Grosser"),
                // 	]
                function BannerComponent() {
                    // var displayString: string;
                    // var display: string;
                    // var myQuotes = new Array("If you want to achieve greatness stop asking for permission.",
                    // 						"Success is walking from failure to failure with no loss of enthusiasm.",
                    // 						"Opportunities don’t happen, you create them. -Chris Grosser",
                    // 						"To live a creative life, we must lose our fear of being wrong.")
                    //quotes(randomIntFromInterval(0,quotes.length -1));
                    //displayString = quotes[randomIntFromInterval(0,quotes.length() -1)]
                    // display = "Display me";
                    this.mainHeading = config_service_1.Config.MAIN_HEADING;
                    // quotes:Array<String>;
                    //displayString = "please work my god";
                    this.myQuotes = new Array("The successful warrior is the average man, with laser-like focus. -Bruce Lee", "The people who are crazy enough to think they can change the world, are the ones who do -Rob Siltanen", "Opportunities don’t happen, you create them. -Chris Grosser", "Knowing is not enough; we must apply. Wishing is not enough; we must do. -Johann Wolfgang Von Goethe");
                    this.displayQuote = this.myQuotes[randomIntFromInterval(0, this.myQuotes.length - 1)];
                }
                BannerComponent = __decorate([
                    core_1.Component({
                        selector: 'banner',
                        templateUrl: 'app/banner.component.html',
                        directives: [router_1.RouterLink],
                        styleUrls: ['./app/bannerstyle.css'],
                        encapsulation: core_1.ViewEncapsulation.None
                    }), 
                    __metadata('design:paramtypes', [])
                ], BannerComponent);
                return BannerComponent;
            }());
            exports_1("BannerComponent", BannerComponent);
        }
    }
});
//# sourceMappingURL=banner.component.js.map