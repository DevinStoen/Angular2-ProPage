System.register(['angular2/core', './video', './playlist.component', './banner.component', './skills.component', './projects.component', './config.service'], function(exports_1, context_1) {
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
    var core_1, video_1, playlist_component_1, banner_component_1, skills_component_1, projects_component_1, config_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (video_1_1) {
                video_1 = video_1_1;
            },
            function (playlist_component_1_1) {
                playlist_component_1 = playlist_component_1_1;
            },
            function (banner_component_1_1) {
                banner_component_1 = banner_component_1_1;
            },
            function (skills_component_1_1) {
                skills_component_1 = skills_component_1_1;
            },
            function (projects_component_1_1) {
                projects_component_1 = projects_component_1_1;
            },
            function (config_service_1_1) {
                config_service_1 = config_service_1_1;
            }],
        execute: function() {
            // import {PageScroll} from 'ng2-page-scroll';
            AppComponent = (function () {
                function AppComponent() {
                    this.mainHeading = config_service_1.Config.MAIN_HEADING;
                    this.videos = [
                        new video_1.Video(1, "Unity Game Development", "W5Spp05zckU", "Devin's game development projects."),
                        new video_1.Video(2, "Unity FPS Project", "OLh99476Zeo", "Devin's game development projects.")
                    ];
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/app.component.html',
                        directives: [playlist_component_1.PlaylistComponent, banner_component_1.BannerComponent, skills_component_1.SkillsComponent, projects_component_1.ProjectsComponent],
                        styleUrls: ['./app/style.css'],
                        encapsulation: core_1.ViewEncapsulation.None
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//The directives array tells Angular that our template depends upon the HeroFormComponent 
//which is itself a Directive (as are all Components).
//The template is simply the new element tag identified by the component's selector property.
//# sourceMappingURL=app.component.js.map