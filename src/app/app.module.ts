import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { ObjectForPipe  } from './utils/object.pipe';
import { StorageService } from './shared/storage.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SelectedComponent} from './selected/selected.component';
import ShipsComponent from './ships/ships.component';
import ShipInfo from './ships/shipInfo/ship-info.component';

import { AppReducer } from './app.reducer'
import { ApiService, SwapiApiService } from './shared';

import { routing } from './app.routing';

import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing,
    StoreModule.provideStore(AppReducer)
  ],
  declarations: [
    ObjectForPipe, 
    AppComponent,
    HomeComponent,
    AboutComponent,
    ShipsComponent,
    SelectedComponent,
    ShipInfo
  ],
  providers: [
    ApiService,
    SwapiApiService,
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {}
  hmrOnInit(store) {
    console.log('HMR store', store);
  }
  hmrOnDestroy(store) {
    let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
