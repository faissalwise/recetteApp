import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule }  from '@angular/flex-layout';
import { MatListModule, MatInputModule } from '@angular/material';
import { MatGridListModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material';
import { AppRoutingModule } from './app-routing/app-routing.module';


import 'hammerjs';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DetailPlatComponent } from './detail-plat/detail-plat.component';
import { PlatService } from './services/plat.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DetailPlatComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    FlexLayoutModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatCheckboxModule,
    AppRoutingModule
  ],
  providers: [PlatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
