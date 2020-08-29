import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Actividad } from "../types/actividad";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ActividadService {

  constructor(private _httpClient:HttpClient) { }
  
  getActividad(activityID:string):Observable<Actividad>{
    return this._httpClient.get<Actividad>(API + "/id/" + activityID);
  }
  getAllActividades(){
    return this._httpClient.get<Actividad[]>(API);
  }
}


const API = "https://orangevalleycaa.org/api/videos";