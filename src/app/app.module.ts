import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HizmetlerimizComponent } from './hizmetlerimiz/hizmetlerimiz.component';
import { SitegörselleriComponent } from './sitegörselleri/sitegörselleri.component';
import { GenelkurulComponent } from './genelkurul/genelkurul.component';
import { FaaliyetComponent } from './faaliyet/faaliyet.component';
import { KurumsalComponent } from './kurumsal/kurumsal.component';
import { FooterComponent } from './footer/footer.component';
import { DuyurularComponent } from './duyurular/duyurular.component';
import { IletisimComponent } from './iletisim/iletisim.component';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';
import { SocialComponent } from './social/social.component';
import { NavigationComponent } from './navigation/navigation.component';
import { Duyuru1Component } from './duyurular/duyuru1/duyuru1.component';
import { Duyuru2Component } from './duyurular/duyuru2/duyuru2.component';
import { Duyuru3Component } from './duyurular/duyuru3/duyuru3.component';
import { AppRoutingModule } from './app-routing.module';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicesService } from './services.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HizmetlerimizComponent,
    SitegörselleriComponent,
    GenelkurulComponent,
    FaaliyetComponent,
    KurumsalComponent,
    FooterComponent,
    IletisimComponent,
    DuyurularComponent,
    AnasayfaComponent,
    Duyuru1Component,
    Duyuru2Component,
    Duyuru3Component,
    SocialComponent,
    NavigationComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule, 
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC5TiZoTEwEcB_HUZRhe_rXrcSWW1Z5x8I'
    })
  ],
  providers: [
    ServicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
