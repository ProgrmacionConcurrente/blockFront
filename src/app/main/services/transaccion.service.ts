import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Transaccion } from "../interfaces/transaccion.interface";

@Injectable({
    providedIn: 'root'
  })
  export class TransaccionService {
  
    private baseUrl: string = "https://serverblockapp.herokuapp.com/api";

    constructor( private http: HttpClient ) { }

    obtenerTransacciones(): Observable<any> {
      return this.http.get(`${this.baseUrl}/transactions`);
    }

    registrarTransaccion( transaccion: Transaccion): Observable<any> {
        return this.http.post(`${this.baseUrl}/transactions`, transaccion);
    }
  
  }