import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { StorageService } from './shared/storage.service';
import '../style/app.scss';

@Component({
  selector: 'my-app', // <my-app></my-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  url = 'https://github.com/preboot/angular2-webpack';
  title: string;
  currentUrl: string;
  constructor(private storageService: StorageService, private _router:Router) { 
    this._router.events.subscribe(ev => {
      console.log('router subscribe');
      if (ev instanceof NavigationEnd) {
         console.log(ev['url']);
         this.currentUrl = ev['url'];
      }
      //this.currentUrl = ev.NavigationEnd.url;
       
    });  
  }

  ngOnInit() {
   
  }  
  saveBookmarks() {
    this.storageService.saveData();
  }
}
