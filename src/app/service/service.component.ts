import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})

export class Service {
  private url: string = 'http://localhost:8080/api/Lynxes';
  constructor (private http: HttpClient) {}

  findAll(): Observable<any[]>{
    return this.http.get<any>(`${this.url}`);
  }
  findById(id:number): Observable<any>{
    return this.http.get<any>(`${this.url}/${id}`);
  }
create (solicitud: any): Observable<any> {
  return this.http.post<any>(`${this.url}/${solicitud.id}`, solicitud);
}
update(solicitud: any): Observable<any>{
  return this.http.put<any>(`${this.url}/${solicitud.id}`, solicitud);
}
remove(id: number): Observable<void>{
  return this.http.delete<void>(`${this.url}/${id}`);
}


}