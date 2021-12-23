export class Neuron  //la palabra export me permite luego importar la clase en otro sitio. As algo así como un namespace.
{
    public name:string;
    public morphology:string;
    public location:string;
    public density:number;
    public activity:string;

    constructor(name:string, morphology:string, location:string,density:number,activity:string) 
    {    
        this.name=name;
        this.morphology=morphology;
        this.location=location;
        this.density=density;
        this.activity=activity;
    }
}