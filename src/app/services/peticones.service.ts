import {Injectable} from "@angular/core";
import {HttpClientModule, HttpClient} from "@angular/common/http";

// import { Http2ServerRequest } from "http2";
 import { map } from "rxjs";
 import { Observable } from "rxjs";


@Injectable()
export class PeticionesService
{
    public url:string;
    private _http:HttpClient;

    constructor(http:HttpClient)
    {
        this.url="https://jsonplaceholder.typicode.com/posts";
        this._http=http;
    }


    getPrueba()
    {
        return "hola mundo";
    }

    getArticulos()
    {
        return this._http.get(this.url);
    }
}