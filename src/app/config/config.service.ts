import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Figma } from 'src/figma';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  configUrl = 'assets/figma.json';

  constructor(private http: HttpClient) { 
    this.getConfig().subscribe(data => {
      console.log("Figma Data",data);
  });
  }
 
 public getConfig() {
    return this.http.get<Figma>(this.configUrl);
  }
}
