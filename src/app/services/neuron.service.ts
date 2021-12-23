import { Injectable } from "@angular/core";

@Injectable()
export class NeuronService
{
    public nombreNeurona:string= "newNeuron"
    public coleccionNeurona:Array<string>=["neu1","neu2"];
    public addneuron(nombreNeurona:string)
    {
        return this.coleccionNeurona.push(nombreNeurona);
    }

    getNeuron()
    {
        return this.coleccionNeurona;
    }

    rmNeuron(index:number)
    {
         this.coleccionNeurona.splice(index,1);
    }

}