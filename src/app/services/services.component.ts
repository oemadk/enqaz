import { Component,ViewChild } from '@angular/core';
import { DatatableComponent } from "@swimlane/ngx-datatable/release";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import {HttpClient, HttpParams, HttpHeaders} from "@angular/common/http";
import { RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx'
import { Headers } from '@angular/http';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

declare var require: any;
const data: any = require('../shared/data/services.json');

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})

export class ServicesComponent {
     rows = [];
     selected: any[] = [];
     closeResult: string;
     modalReference: any;
     token;
     temp = [];
     addServiceForm;
     public errorMsg = '';
    // Table Column Titles
 columns = [

        { name:'name' },
        { name: 'Base Fare',
          prop:'base_fare'
         },
        { name: 'Price Per KM',
          prop:'price_km'
         },
         { name: 'Price Per Minutes',
          prop:'price_minutes'
         }

    ];
    @ViewChild(DatatableComponent) table: DatatableComponent;
constructor(private http:HttpClient,private modalService: NgbModal,public toastr: ToastsManager, private _fbuilder: FormBuilder,
  ) {

       this.addServiceForm = _fbuilder.group({

        name: [''],
        type: [''],
        status: [''],
      });
  
        this.temp = [...data];
        this.rows = this.temp;

        
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

 onSelect(event, modal) {
        console.log(event);
        this.modalService.open(modal).result.then((result) => {
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

close(a , b){
  var config = {
      headers: {
          'Content-Type': 'application/json',
          'authorization': "Bearer" + " " + this.token
      }}
         const body = JSON.stringify({status: b});
         console.log(b);
        this.http.patch('http://3.86.186.71:8080/api/services/' + a ,body, config)
     .subscribe(res=>{
       
       console.log(res, 'result from post')
     });
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

    addNew(modal2){
                this.modalService.open(modal2).result.then((result) => {
     console.log(event)
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  addService(user){
    if (this.addServiceForm) {
        console.log(this.addServiceForm.value)
      // if(this.loginForm.username !== undefined && this.loginForm.username !== null &&
      //   this.loginForm.password !== undefined && this.loginForm.password !== null){
      //     //Call Login service for validate username and password.
         var config = {
      headers: {
          'Content-Type': 'application/json',
          'authorization': "Bearer" + " " + this.token
      }}
         const body = this.addServiceForm.value
         console.log(body)

        this.http.post('http://3.86.186.71:8080/api/services/',body, config)
     .subscribe(res=>{
       
       console.log(res, 'result from post')
     });

     close()

      
    }
    else{
      this.errorMsg = 'Adding Service failed, Please try again!';
    }
  }
  

}
