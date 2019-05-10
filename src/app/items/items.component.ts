import { Component,ViewChild } from '@angular/core';
import { DatatableComponent } from "@swimlane/ngx-datatable/release";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from "@angular/router";

import * as alertFunctions from '../shared/data/sweet-alerts';

import swal from 'sweetalert2';
declare var require: any;
const data: any = require('../shared/data/smells.json');

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})

export class ItemsComponent {
    rows = [];
    selected: any[] = [];
    closeResult: string;
  modalReference: any;
    temp = [];
    a =1;

    provider = 0;
    showroom = 0;
    insurance = 1;
    providerindv = 0;
showoffline = 0;


    provider2 = 0;
    showroom2 = 0;
    insurance2 = 0;
    providerindv2 = 0;
showoffline2 = 0;
    // Table Column Titles
    columns = [
        { name: 'id' },
        { prop: 'smell' },
        { name: 'status' },
        { name: 'description' },


    ];
    @ViewChild(DatatableComponent) table: DatatableComponent;
constructor(private modalService: NgbModal, private router: Router,
        private route: ActivatedRoute) {
        this.temp = [...data];
        this.rows = data;
    }


provideron(){
    this.provider = 1;
    this.showroom = 0;
    this.insurance = 0;
    this.providerindv = 0;
this.showoffline = 0;

}

provideron2(){
    this.provider = 0;
    this.showroom = 0;
    this.insurance = 0;
    this.providerindv = 1;
this.showoffline = 0;

}

showofflineF(){
    this.provider = 0;
    this.showroom = 0;
    this.insurance = 0;
    this.providerindv = 0;
this.showoffline = 1;
}
showroomon(){
    this.provider = 0;
    this.showroom = 1;
    this.insurance = 0;
    this.providerindv = 0;
this.showoffline = 0;

}
insuranceon(){
    this.provider = 0;
    this.showroom = 0;
    this.insurance = 1;
    this.providerindv = 0;
this.showoffline = 0;

}


doSomething(choice){
  if(choice == 0){
    //insurance

    this.provider2 = 0;
    this.showroom2 = 0;
    this.insurance2 = 1;
    this.providerindv2 = 0;
    this.showoffline2 = 0;

  } else if(choice == 1){
    //showroom

    this.provider2 = 0;
    this.showroom2 = 1;
    this.insurance2 = 0;
    this.providerindv2 = 0;
    this.showoffline2 = 0;
  }else if(choice == 2){
    //provider company

    this.provider2 = 1;
    this.showroom2 = 0;
    this.insurance2 = 0;
    this.providerindv2 = 0;
    this.showoffline2 = 0;
  }else if(choice == 3){
    //provider company

    this.provider2 = 0;
    this.showroom2 = 0;
    this.insurance2 = 0;
    this.providerindv2 = 1;
    this.showoffline2 = 0;
  }else if(choice == 4){
    //provider company

    this.provider2 = 0;
    this.showroom2 = 0;
    this.insurance2 = 0;
    this.providerindv2 = 0;
    this.showoffline2 = 1;
  }
}
    updateFilter(event) {
        const val = event.target.value.toLowerCase();

        // filter our data
        const temp = this.temp.filter(function (d) {
            return d.service.toLowerCase().indexOf(val) !== -1 || !val;
        });

        // update the rows
        this.rows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    }

      onSelect(modal) {
        console.log(event);
        this.modalService.open(modal).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  addNew2(modal){
  this.modalService.open(modal,  { windowClass : "myCustomModalClass"});

}
  addNew(modal2){
            this.modalService.open(modal2).result.then((result) => {
   console.log(event)
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
onActivate($event){
}
open(content){
  console.log(event)

this.modalService.open(content).result.then((result) => {
   console.log(event)
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
}

close(){
  this.modalReference.close();
}

invoice(){
        this.router.navigate(['invoice'])
    }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }


resetpassword(){
        alertFunctions.typeSuccess('Renewal Reminder Send Successfully');

}
}
