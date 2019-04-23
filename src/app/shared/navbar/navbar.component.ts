import { Component } from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders} from "@angular/common/http";
import { RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx'
import { Headers } from '@angular/http';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Injectable } from '@angular/core';

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

	constructor(private http:HttpClient,public toastr: ToastsManager) {
  

    }

	printX:number;
  ngOnInit() {
   
  }

 
}
