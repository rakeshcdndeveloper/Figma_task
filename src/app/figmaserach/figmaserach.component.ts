import { Component, OnInit } from '@angular/core';
import { Figma } from 'src/figma';
import { ConfigService } from '../config/config.service';

@Component({
  selector: 'app-figmaserach',
  templateUrl: './figmaserach.component.html',
  styleUrls: ['./figmaserach.component.css']
})

export class FigmaserachComponent implements OnInit {
  color = '';
  configService: any;
  figma: {};

  constructor( private config:ConfigService) { }

  showConfig() {
    this.configService.getConfig()
      .subscribe((data: Figma) => this.figma = {

      });
  }  

  ngOnInit(): void {
    this.configService.getJSON().subscribe(data => {
      console.log("New Data",data);
  });
}

}
