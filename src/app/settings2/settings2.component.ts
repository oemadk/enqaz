import { Component,ViewChild } from '@angular/core';
import { DatatableComponent } from "@swimlane/ngx-datatable/release";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from "@angular/router";

import * as alertFunctions from '../shared/data/sweet-alerts';

import swal from 'sweetalert2';

@Component({
  selector: 'app-settings2',
  templateUrl: './settings2.component.html',
  styleUrls: ['./settings2.component.scss']
})
export class Settings2Component {
    rows = [];
    selected: any[] = [];
    closeResult: string;
  modalReference: any;
    temp = [];
    a =1;  constructor(private modalService: NgbModal, private router: Router,
        private route: ActivatedRoute) { }

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
