import { Component } from "@angular/core";
import {Router,ActivatedRoute,Params} from "@angular/router" //Para usar parámetros

@Component({
    selector: "contact",
    templateUrl: "./contacto.component.html"

})
export class ContactComponent{
    title="CONTACT PAGE";

    private _route:ActivatedRoute;
    private _router:Router;
    public parametro: Params | undefined;
    //Inyecto los depedencias relacionadas con el routing y rutas con parámetros
    //Se hace automáticamente la instanciación de los objetos.
    constructor(route:ActivatedRoute,router:Router)
    {
        this._route=route;
        this._router=router;
    }

    ngOnInit()
    {
        this._route.params.forEach((params:Params) =>{
            this.parametro=params['id']; //recojo la variable del parámetro introducida
            console.log("ruta parametro="+ this.parametro);

        });
    }

    redirigir()
    {
        this._router.navigate(["/home"]);
    };
}