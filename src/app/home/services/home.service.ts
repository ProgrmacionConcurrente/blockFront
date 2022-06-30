import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Usuario } from "../interfaces/usuario.interface";

@Injectable({
    providedIn: 'root'
  })
  export class HomeService {
  
    private baseUrl: string = "https://serverblockapp.herokuapp.com/api";

    constructor( private http: HttpClient ) { }

    login(): Observable<any> {
        return this.http.get<any>(`${this.baseUrl}/users`);
    }

    userId( id: any ): Observable<any> {
      return this.http.get<any>(`${this.baseUrl}/users/${id}`); 
    }

    registro( usuario: Usuario): Observable<any> {
      return this.http.post<any>(`${this.baseUrl}/user/create`, usuario);
    }

    actualizarId( usuario: Usuario ): Observable<any> {
      return this.http.put<any>(`${this.baseUrl}/users/${usuario.id}`, usuario);
    }
  
  }