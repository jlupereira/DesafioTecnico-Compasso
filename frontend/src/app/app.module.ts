import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './component/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './component/template/footer/footer.component';
import { NavComponent } from './component/template/nav/nav.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HomeComponent } from './views/home/home.component';
import { PautasComponent } from './views/pautas/pautas.component';
import { AssociadosComponent } from './views/associados/associados.component';
import { SessaoVotacaoComponent } from './views/sessao-votacao/sessao-votacao.component';
import { VotosComponent } from './views/votos/votos.component';
import { PautasCadastrarComponent } from './component/pautas/pautas-cadastrar/pautas-cadastrar.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PautasListaComponent } from './component/pautas/pautas-lista/pautas-lista.component';
import { PautasLista2Component } from './component/pautas/pautas-lista2/pautas-lista2.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AssociadosCadastrarComponent } from './component/associados/associados-cadastrar/associados-cadastrar.component';
import { AssociadosListarComponent } from './component/associados/associados-listar/associados-listar.component';
import { SessaoVotacaoCadastrarComponent } from './component/sessao_votacao/sessao-votacao-cadastrar/sessao-votacao-cadastrar.component';
import { SessaoVotacaoListarComponent } from './component/sessao_votacao/sessao-votacao-listar/sessao-votacao-listar.component';
import { VotosCadastrarComponent } from './component/votos/votos-cadastrar/votos-cadastrar.component';
import { VotosListarComponent } from './component/votos/votos-listar/votos-listar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    PautasComponent,
    AssociadosComponent,
    SessaoVotacaoComponent,
    VotosComponent,
    PautasCadastrarComponent,
    PautasListaComponent,
    PautasLista2Component,
    AssociadosCadastrarComponent,
    AssociadosListarComponent,
    SessaoVotacaoCadastrarComponent,
    SessaoVotacaoListarComponent,
    VotosCadastrarComponent,
    VotosListarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
