import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/clientes/cliente';
import { ServicoPrestadoService } from 'src/app/servico-prestado.service';
import { ClientesService } from '../../clientes.service'
import { ServicoPrestado } from '../servicoPrestado';

@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html',
  styleUrls: ['./servico-prestado-form.component.css']
})
export class ServicoPrestadoFormComponent implements OnInit {

  clientes: Cliente[] = [];
  servico: ServicoPrestado;

  constructor(
    private clienteService: ClientesService,
    private service: ServicoPrestadoService
  ) {
    this.servico = new ServicoPrestado();
   }

  ngOnInit(): void {
    this.clienteService
    .getClientes()
    .subscribe( response => this.clientes = response);
  }

  onSubmit(){
    this.service
      .salvar(this.servico)
      .subscribe( reponse => {
        console.log(reponse);
      })
  }

}
