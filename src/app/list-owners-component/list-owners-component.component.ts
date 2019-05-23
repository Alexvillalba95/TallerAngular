import { Component, OnInit } from '@angular/core';
import { OwnerServiceService } from '../search/owner-service.service';
import { owner } from '../owner';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-list-owners-component',
  templateUrl: './list-owners-component.component.html',
  styleUrls: ['./list-owners-component.component.css']
})
export class ListOwnersComponentComponent implements OnInit {

  results: Array<owner>;
  result: owner;
  urlImagen: String;

  constructor(private route: ActivatedRoute,private router: Router, private service: OwnerServiceService) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.urlImagen = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNEHj4vGyBB4J2nI8OhQaAQz1XgJQo2t9-GYzNmILQaQK6cARS"
    if(id){
    this.results = [];
    this.service.obtenerOwnerById(id).subscribe(data => {
      this.results.push(data);
      return this.results;
  
      })
    }
  }

  obtenerOwners(){

    this.service.obtenerOwners().subscribe(data => {
      this.results = data;
    })

    this.urlImagen = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNEHj4vGyBB4J2nI8OhQaAQz1XgJQo2t9-GYzNmILQaQK6cARS"
    
    return this.results;

  }

  onSelect(owner: owner) {
    this.router.navigate(['/owner', owner.id]);
  }

}
