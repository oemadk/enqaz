import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { NgbModule, } from '@ng-bootstrap/ng-bootstrap';

import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { CustomizerComponent } from './customizer/customizer.component';
import { ToggleFullscreenDirective } from "./directives/toggle-fullscreen.directive";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    exports: [
        CommonModule,
        FooterComponent,
        NavbarComponent,
        SidebarComponent,
        CustomizerComponent,
        ToggleFullscreenDirective,
        NgbModule
    ],
    imports: [
        RouterModule,
        CommonModule,
        NgbModule,
        FormsModule
    ],
            schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

    declarations: [
        FooterComponent,
        NavbarComponent,
        SidebarComponent,
        CustomizerComponent,
        ToggleFullscreenDirective
    ]
})
export class SharedModule { }
