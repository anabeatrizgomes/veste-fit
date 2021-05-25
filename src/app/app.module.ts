import { VestefitService } from './vestefit/vestefit.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { VestefitComponent } from './vestefit/vestefit.component';
import { MercadoriaComponent } from './vestefit/mercadoria/mercadoria.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    VestefitComponent,
    MercadoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [VestefitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
