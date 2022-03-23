import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { Mdp2Component } from './mdp2/mdp2.component';
import { ClusterSingoliComponent } from './cluster-singoli/cluster-singoli.component';
import { RiconciliazioneComponent } from './riconciliazione/riconciliazione.component';
import { NuovoPeriodoComponent } from './nuovo-periodo/nuovo-periodo.component';
import { NuovaVersioneComponent } from './nuova-versione/nuova-versione.component';
import { SwitchComponent } from './switch/switch.component';
import { StoricoElaborazioneComponent } from './storico-elaborazione/storico-elaborazione.component';
import { LancioProcedureComponent } from './lancio-procedure/lancio-procedure.component';

const routes: Routes = [
  { path: 'mdp', component: HomeComponent },
  { path: 'lancia-procedure', component: LancioProcedureComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'cluster-singoli', component: ClusterSingoliComponent, canActivate: [AuthGuard] },
  { path: 'mdp2', component: Mdp2Component, canActivate: [AuthGuard] },
  { path: 'nuovo-periodo', component: NuovoPeriodoComponent, canActivate: [AuthGuard] },
  { path: 'nuova-versione', component: NuovaVersioneComponent, canActivate: [AuthGuard] },
  { path: 'switch', component: SwitchComponent, canActivate: [AuthGuard] },
  { path: 'riconciliazione', component: RiconciliazioneComponent, canActivate: [AuthGuard] },
  { path: 'storico/:idElaborazione', component: StoricoElaborazioneComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'mdp' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
