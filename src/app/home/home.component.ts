import { Component } from "@angular/core";
import { NeuronService } from "../services/neuron.service"; // Importo mi clase del servicio que quiero usar

@Component({
    selector: "home",
    templateUrl: "./home.component.html",
    providers:[NeuronService]

})
export class HomeComponent{
    public  title:string="HOME PAGE";
    private _neuronService:NeuronService;
    public neuronList: Array<string> = [];
    public neuronToSave!: string;
    public fecha:Date; 


    //Inyecto la dependencia del servicio en mi clase de interés
    constructor(neuronService:NeuronService)
    {
        this._neuronService=neuronService;
        this.fecha=new Date(2021, 13, 4);
    }
    ngOnInit()
    {
        this.neuronList=this._neuronService.getNeuron();
        console.log(this.neuronList);
    }

    saveNeuron()
    {
        this._neuronService.addneuron(this.neuronToSave)
        this.neuronToSave="";
    }

    deleteNeuron(index:number)
    {
        this._neuronService.rmNeuron(index);
    }
}