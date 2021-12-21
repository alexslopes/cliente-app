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

  getCliente() : Cliente {
    let cliente : Cliente = new Cliente();
    cliente.nome = 'Fulano de tal';
    cliente.cpf = '8888888888';
    return cliente;
  }
}
