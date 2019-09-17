import { Component, OnInit } from '@angular/core';
import { ROUTES } from './sidebar-routes.config';
import { OperatorROUTES } from './sidebar-routes.config';
import { InsuranceROUTES } from './sidebar-routes.config';
import { CompanyProviderROUTES } from './sidebar-routes.config';
import { ShowroomROUTES } from './sidebar-routes.config';
import { RouteInfo } from "./sidebar.metadata";
import { Router, ActivatedRoute } from "@angular/router";

declare var $: any;

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    public role;

    constructor(private router: Router,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
       this.role = localStorage.getItem('role');
       if(this.role == 2){
        
        $.getScript('./assets/js/app-sidebar.js');
        this.menuItems = OperatorROUTES.filter(menuItem => menuItem);

       }else if(this.role == 3){
        $.getScript('./assets/js/app-sidebar.js');
        this.menuItems = InsuranceROUTES.filter(menuItem => menuItem);

       }else if(this.role == 4){
        $.getScript('./assets/js/app-sidebar.js');
        this.menuItems = ShowroomROUTES.filter(menuItem => menuItem);

       }else if(this.role == 5){
        $.getScript('./assets/js/app-sidebar.js');
        this.menuItems = CompanyProviderROUTES.filter(menuItem => menuItem);

       }else if(this.role == 1){
        $.getScript('./assets/js/app-sidebar.js');
        this.menuItems = ROUTES.filter(menuItem => menuItem);

       }

    }

    //NGX Wizard - skip url change
    ngxWizardFunction(path: string) {
        if (path.indexOf('forms/ngx') !== -1)
            this.router.navigate(['forms/ngx/wizard'], { skipLocationChange: false });
    }
}
