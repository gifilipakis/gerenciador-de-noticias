import { Component } from '@angular/core';
import { GerenciadorService } from './gerenciador.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tela = 'inicial';
  autor = null;
  titulo = null;
  conteudo = null;
  views = 0;
  visualizar = null;

  constructor(private service: GerenciadorService) {}

  telaInicial(){
    this.tela = 'inicial';
  }

  telaLer(){
    this.tela = 'ler';
  }

  telaCadastro(){
    this.tela = 'cadastro';
  }

  telaSalvas(){
    this.tela = 'salvas';
  }

  telaEstatisticas(){
    this.tela = 'estatisticas';
  }

  salvar(){
    this.tela = 'salvas';
    this.service.salvarNoticia(this.autor, this.titulo, this.conteudo, this.views);
    this.autor = null;
    this.titulo = null;
    this.conteudo = null;
  }

  ler(publicada){
    publicada.views++;
    this.tela = 'ler'
    this.visualizar = publicada
  }

}


  