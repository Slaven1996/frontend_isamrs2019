import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { BranchOffice} from '../model/branchOffice';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BranchOfficeService {
  private officeUrl = "http://localhost:8080/api/branchOffice";
  private branchOfficesource = new BehaviorSubject<BranchOffice[]>([]);
  branchOfficeObservable = this.branchOfficesource.asObservable();
  private branchOffices = [];

  constructor(private http: HttpClient) {}

  findAll(){
    this.http.get<BranchOffice[]>(this.officeUrl + "/admin")
    .subscribe(branchOffices => {
      this.branchOffices = branchOffices;
      this.branchOfficesource.next(this.branchOffices);
    });
  }
  
  deleteOffice(id){
  this.http.delete<BranchOffice>(this.officeUrl + "/" + id)
    .subscribe(
      response =>{
        for (var i = 0; i < this.branchOffices.length; i++){
          if (id === this.branchOffices[i].id){
            this.branchOffices.splice(i, 1);
            this.branchOfficesource.next(this.branchOffices);
            return;
          }
        }
      }
    )
  }

  //ODRADITI BACKEND
  editOffice(office){
    this.http.put<BranchOffice>(this.officeUrl, office)
    .subscribe( editedOffice=>{
      for (var i = 0; i < this.branchOffices.length; i++){;
        if (editedOffice.id === this.branchOffices[i].id){
          this.branchOffices[i] = editedOffice;
          this.branchOfficesource.next(this.branchOffices);
          return;
        }
      }
    });
  }


}