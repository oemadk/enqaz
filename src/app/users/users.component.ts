import { Component,ViewChild } from '@angular/core';
import { DatatableComponent } from "@swimlane/ngx-datatable/release";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from "@angular/router";

import * as alertFunctions from '../shared/data/sweet-alerts';

import swal from 'sweetalert2';
declare var require: any;
const data: any = require('../shared/data/smells.json');

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent {
    rows = [];
    selected: any[] = [];
    closeResult: string;
  modalReference: any;
    temp = [];
    a =1;

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
        alertFunctions.typeSuccess('password has been resetted');

}
}
