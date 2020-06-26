import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";

interface Location {
  latitude: string;
  longitude: string;
  country_name: string;
  country_calling_code: string;
  city: string;
  ip: 0;
}
@Injectable({
  providedIn: "root",
})
export class MapsService {
  constructor(private http: HttpClient) {}

  getLocation() {
    //return this.http.get<Location>("https://ipapi.co/json/");


    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    let body = new HttpParams();
    body = body.set('usuarioid', "703021");
    //body = body.set('password', "das");
    return this.http
      .post('http://157.245.227.216:3000/api/obtieneCoordenadasXUsuario', body, {
        headers: myheader,
      });
      //.subscribe();


      
  }
}
