import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class GafaService {

    constructor(private http: HttpClient) { }


    getGafaStatus(){
        const API_BASE_URL: string = environment.apiUrl; 
        const API_GAFAS: string = '/gafas';

        return this.http.get(`${API_BASE_URL}${API_GAFAS}/status`);
    }
}