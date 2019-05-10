import { Component } from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders} from "@angular/common/http";
import { RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx'
import { Headers } from '@angular/http';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Injectable } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import * as alertFunctions from '../../shared/data/sweet-alerts';

import swal from 'sweetalert2';
declare var require: any;

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent{

    rows:any[] = [];
    selected: any[] = [];
  	closeResult: string;
    modalReference: any;
    token;
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
	constructor(private http:HttpClient,public toastr: ToastsManager, private modalService: NgbModal,
    ) {
  

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


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }


	printX:number;
  ngOnInit() {
   
  }

 
}
