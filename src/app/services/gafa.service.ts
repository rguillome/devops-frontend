import { Injectable } from '@angular/core';
import Gafa from '../model/Gafa';
import { HttpClient } from '@angular/common/http';



@Injectable()
export default class GafaService {

    constructor(private http: HttpClient) { }


    getGafaStatus(){
        const API_BASE_URL: string = 'http://localhost:8080'; 
        const API_GAFAS: string = '/gafas';

        return this.http.get(`${API_BASE_URL}${API_GAFAS}/status`);
    }
}