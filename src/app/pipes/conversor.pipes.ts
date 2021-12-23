import {Pipe,PipeTransform} from "@angular/core"

@Pipe({name:'conversor'})
export class ConversorPipe implements PipeTransform
{
    transform(value: string, por:string)
    {
        let valueOne=parseInt(value);
        let valueTwo=parseInt(por);

        let result= "la multiplicacion: " + valueOne + "x" + valueTwo  + "=" +
         (valueOne*valueTwo);  
         return result;  
    }
}