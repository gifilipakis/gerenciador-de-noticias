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
  img = null;
  publicada = false;
  visualizar = null;
  voltar = null;

  constructor(private service: GerenciadorService) {}

  telaInicial(){
    this.voltar = this.tela;
    this.tela = 'inicial';
  }

  telaLer(){
    this.voltar = this.tela;
    this.tela = 'ler';
  }

  telaCadastro(){
    this.voltar = this.tela;
    this.tela = 'cadastro';
  }

  telaSalvas(){
    this.voltar = this.tela;
    this.tela = 'salvas';
  }

  telaEstatisticas(){
    this.voltar = this.tela;
    this.tela = 'estatisticas';
  }

  salvar(){
    this.voltar = this.tela;
    this.tela = 'salvas';
    this.service.salvarNoticia(this.autor, this.titulo, this.conteudo, this.views, this.img, this.publicada);
    this.autor = null;
    this.titulo = null;
    this.conteudo = null;
    this.img = null;
  }

  ler(publicada){
    this.voltar = this.tela;
    publicada.views++;
    this.tela = 'ler';
    this.visualizar = publicada
  }

  telaVoltar(){
    var aux = this.tela
    this.tela = this.voltar
    this.voltar = aux
  }

}


  