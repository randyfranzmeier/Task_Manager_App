import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError, retry, catchError } from "rxjs";

@Injectable()
export class ConfigService {
    constructor(private http: HttpClient) {

    }
}