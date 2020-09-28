import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.url;
  }

  public async all(): Promise<any> {
    return await this.http.get<any>(`${this.apiUrl}character/`).toPromise();
  }
}
