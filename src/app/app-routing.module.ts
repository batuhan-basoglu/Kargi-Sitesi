import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HizmetlerimizComponent } from './hizmetlerimiz/hizmetlerimiz.component';
import { SitegörselleriComponent } from './sitegörselleri/sitegörselleri.component';
import { GenelkurulComponent } from './genelkurul/genelkurul.component';
import { KurumsalComponent } from './kurumsal/kurumsal.component';
import { IletisimComponent } from './iletisim/iletisim.component';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';
import { FaaliyetComponent } from './faaliyet/faaliyet.component';
import { DuyurularComponent } from './duyurular/duyurular.component';
import { Duyuru1Component } from './duyurular/duyuru1/duyuru1.component';
import { Duyuru2Component } from './duyurular/duyuru2/duyuru2.component';
import { Duyuru3Component } from './duyurular/duyuru3/duyuru3.component';

const routes: Routes = [
  { path: '', redirectTo: '/Anasayfa', pathMatch: 'full' },
  { path: 'Anasayfa', component: AnasayfaComponent },
  { path: 'Kurumsal', component: KurumsalComponent },
  { path: 'Hizmetlerimiz', component: HizmetlerimizComponent },
  { path: 'Sitegörselleri', component: SitegörselleriComponent },
  { path: 'Duyurular', component: DuyurularComponent },
  { path: 'Duyurular/Duyuru1', component: Duyuru1Component },
  { path: 'Duyurular/Duyuru2', component: Duyuru2Component },
  { path: 'Duyurular/Duyuru3', component: Duyuru3Component },
  { path: 'Genelkurul', component: GenelkurulComponent },
  { path: 'Faaliyet', component: FaaliyetComponent },
  { path: 'Iletisim', component: IletisimComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
  ]
})

export class AppRoutingModule { }
