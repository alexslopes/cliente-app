import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;
  nome: string = 'Fulano';

  constructor( private service: ClientesService ) {
    this.cliente = service.getCliente();
  }

  ngOnInit(): void {
  }

  clicar() {
    console.log(this.cliente);
  }

  onSubmit() {
    console.log(this.cliente);
  }

}
