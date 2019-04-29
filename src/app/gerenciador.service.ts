import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GerenciadorService {
  noticias = [];
  publicadas = [];
  autores = ['Fabiano Fagundes', 'Cristina Filipakis', 'Jackson Gomes'];

  constructor() { }
  
  salvarNoticia(autor, titulo, conteudo, views, img, publicada){
    const noticia = {
      id: this.noticias.length,
      titulo: titulo,
      autor: autor,
      conteudo: conteudo,
      views: views,
      img: img,
      publicada: publicada,
    }
    this.noticias.push(noticia);
  }

  publicar(noticia){
    noticia.publicada = true;
    this.publicadas.push(noticia);
  }

  noticiasPorAutor(a){
    var qnt = 0
    for(let n of this.noticias){
      if (n.autor === a){
        qnt++
      }
    }
    if(!qnt){
      return 0
    }
    return qnt
  }

  autorMaisPublica(){
    var maior_qnt = 0
    var autor = null
    for(let a of this.autores){
      var qnt = 0
      for(let p of this.publicadas){
        if (p.autor === a){
          qnt++
        }
      }
      if(qnt > maior_qnt && a != autor){
        maior_qnt = qnt
        autor = a
      }
    }
    return autor
  }

  noticiaMaisViews(){
    var resultado = this.publicadas.sort(function(a,b){ return b.views - a.views }).slice(0,5)
    if(!resultado){
      return 0
    }
    return resultado
  }
  
  
}
