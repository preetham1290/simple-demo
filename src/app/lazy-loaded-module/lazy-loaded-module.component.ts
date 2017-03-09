import { Component, OnInit } from '@angular/core';
import {SimpleService} from '../shared/simple.service';

@Component({
  selector: 'app-lazy-loaded-module',
  templateUrl: './lazy-loaded-module.component.html',
  styleUrls: ['./lazy-loaded-module.component.css']
})
export class LazyLoadedModuleComponent implements OnInit {

  test:boolean = true;

  constructor(private simpleService:SimpleService) { }

  ngOnInit() {
    console.log(this.simpleService.demo);
  }

}
