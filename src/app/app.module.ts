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
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';


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
import { PromotionService } from './services/promotion.service';
import { LoginComponent } from './login/login.component';
import { HttpModule } from '@angular/http';
import { baseURL } from './shared/baseurl';
import { ProcessHttpmsgService } from './services/process-httpmsg.service';




@NgModule({
  entryComponents: [
    LoginComponent
],
  
  declarations: [
    AppComponent,
    MenuComponent,
    DetailPlatComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent
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
    AppRoutingModule,
    FormsModule,
    HttpModule,
    MatProgressSpinnerModule
  ],
  providers: [PlatService,PromotionService,ProcessHttpmsgService,{provide: 'BaseURL', useValue: baseURL}],
  bootstrap: [AppComponent]
})
export class AppModule { }
