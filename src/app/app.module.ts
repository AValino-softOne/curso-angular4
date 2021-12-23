import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //Imprescindible para el two way data binding
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadoComponent } from './empleados/empleado.component';
import { NeuronasComponent } from './neuronas/neuronas.component';
import { routing,appRoutingProvider } from './app.routing';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contacto/contacto.component';
import { ConversorPipe } from './pipes/conversor.pipes'; //Añado pipes customizadas
import {HttpClientModule } from '@angular/common/http';
import { PlantillasComponent } from './plantillas/plantillas.component';

@NgModule({
  declarations: [ //Aquí van mis componentes
    AppComponent, 
    EmpleadoComponent, 
    NeuronasComponent,
    HomeComponent,
    ContactComponent, 
    ConversorPipe,
    PlantillasComponent
  ],
  imports: [ // Aquí van otras importanciones que añaden funcionalidades a mis componentes como el formsModule
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    routing //añado la variable routing
  ],
  providers: [appRoutingProvider], //proveeo las direcciones de ruta
  bootstrap: [AppComponent]
})
export class AppModule { }

