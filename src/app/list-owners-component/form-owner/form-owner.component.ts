import { Component, OnInit } from '@angular/core';
import { owner } from 'src/app/owner';
import { OwnerServiceService } from 'src/app/search/owner-service.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-owner',
  templateUrl: './form-owner.component.html',
  styleUrls: ['./form-owner.component.css']
})
export class FormOwnerComponent implements OnInit {

  owner: owner;
  error;
  errorMessage: string;

  constructor(private ownerService: OwnerServiceService, private router: Router) { 

    this.owner = <owner>{};

  }

  ngOnInit() {
  }

  onSubmit(owner: owner){
    this.owner.id = null;
    this.owner.pets = [];
    this.ownerService.addOwner(this.owner).subscribe(new_owner => {
      this.owner = new_owner;
      this.gotoOwnersList();
    },
    error => this.errorMessage = <any>error
    )

  }

  

  gotoOwnersList(){
    this.router.navigate(['/search']);
  }

}
