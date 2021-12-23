import {Neuron} from "./Neuron"; //importo mi modelo de datos Neuron
import { Component} from "@angular/core";
import { PeticionesService } from "../services/peticones.service"; //Inyeccion de dependencias de mi servicio de peticiones Http


//El componente es como un atributo que añade metadatos a la clase. Como el template html a introducir así como el 
//tag del selector donde se va a incluir el componente en el componente principal de la app---app.component.html
@Component({
    selector: "app-neu",
    templateUrl: "./neuronas.component.html",
    providers:[PeticionesService] //Inyeccion de dependencias de mi servicio de peticiones Http

})
export class NeuronasComponent
{
    public tipos:Array<Neuron>;
    public eventType:boolean=true;
    public backColor:string="blue";
    public classification:string="morphology";
    public neuron:Neuron;
    private _peticionesService:PeticionesService;
    public listaPostPrueba:any;


    constructor(peticionesService:PeticionesService)
    {
    
        this.tipos=[new Neuron("Piramidal","Piramid","layer 4",134,"Excitadora"),
        new Neuron("Basket","Basketball","layer 3",200,"Inhibidora"),
        new Neuron("Chandelier","Random","layer 1",100,"Inhibidora"),
        new Neuron("","","",0,"")]
        
       this.neuron=new Neuron("","","",0,"");

       this._peticionesService=peticionesService;  //Inyeccion de dependencias de mi servicio de peticiones Http
    }

    //What about NGInit??
    //NG init corre inmediamente despues del constructor. Es decir, en cuanto se instancia una clase
    //lo primero que se lee es el constructor y luego, NGinit

    ngOnInit(){
        console.log(this.tipos);
        console.log(this.neuron);
        console.log("ngOnInit es un método global (o algo así) que corre justo despues del controlador")
        console.log("peticion prueba hhtp " + this._peticionesService.getPrueba());

        this._peticionesService.getArticulos().subscribe(result=>
            {this.listaPostPrueba=result
                if (!this.listaPostPrueba)
            {
                console.log("error en el servidor");
            }
        });
    }

    ChangeEvent(value:boolean){
        this.eventType=value;
    };

    onSubmit()
    {
        this.tipos.push(this.neuron);
    }
    
    
}