import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './clientes/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  salvar(cliente: Cliente) : Observable<Cliente> {
    return this.http.post<Cliente>('http://localhost:8081/api/clientes',cliente);
  }

  /*getClientes() : Observable<Cliente[]> {
    return null;
  }*/

  getClientes() : Cliente[] {
    let cliente = new Cliente();
    cliente.id = 1;
    cliente.nome = 'Fulano';
    cliente.dataCadastro = '18/04/2020';
    cliente.cpf = '12345678900';
    return [cliente];
  }

}
