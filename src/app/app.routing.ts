// script necesario para el routing en angular, hay que importar ciertos modulos y realizar otras configuraciones

//-------------------------- IMPORTAR MODULOS-----------------------------------------------------------//

import { ModuleWithProviders } from "@angular/core";
import { Routes } from "@angular/router";
import { RouterModule } from "@angular/router";



//Importar mis componentes creados

import { EmpleadoComponent}from "./empleados/empleado.component"
import { HomeComponent } from "./home/home.component";
import { NeuronasComponent } from "./neuronas/neuronas.component";
import { ContactComponent } from "./contacto/contacto.component";
import { PlantillasComponent } from "./plantillas/plantillas.component";

//Constante que define un json con las rutas y los componenentes asociados
const appRoutes: Routes=[
    {path: "", component: HomeComponent}, //ruta vacía nos carga el componente neuronas
    {path: "home", component: HomeComponent},
    {path: "neuronillas", component:NeuronasComponent},// ruta /empleado
    {path: "empleados", component:EmpleadoComponent},
    {path:"contact", component:ContactComponent},
    {path:"contact/:id", component:ContactComponent}, // Se el pueden añadir parámetros a las rutas
    {path: "plantillas", component:PlantillasComponent},
    {path:"**", component: HomeComponent}, //ruta cuando ocurra un error en la ruta y no exista el componente, en ese caso me cargas el neuronas component
];

export const appRoutingProvider:Array<any>=[]; //procedimientoque necesita angular
export const routing:ModuleWithProviders<any>=RouterModule.forRoot(appRoutes); //inyectamos a rutas a nuestro servicio 