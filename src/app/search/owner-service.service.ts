import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { owner } from '../owner';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OwnerServiceService {

  constructor(private http: HttpClient) {

  }

  obtenerOwners() {

    return this.http.get<owner[]>('http://10.125.124.75:9966/petclinic/api/owners');

  }

  obtenerOwnerById(id) {

    return this.http.get<owner>('http://10.125.124.75:9966/petclinic/api/owners/' + id);

  }

  addOwner(owner: owner): Observable<owner>{
    const headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    headers.append('Accept', 'application/json');
    return this.http.post<owner>('http://10.125.124.75:9966/petclinic/api/owners', owner, {headers});
  }

}

