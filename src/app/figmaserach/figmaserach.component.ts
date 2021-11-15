import { Component, OnInit } from '@angular/core';
import { Figma } from 'src/figma';

@Component({
  selector: 'app-figmaserach',
  templateUrl: './figmaserach.component.html',
  styleUrls: ['./figmaserach.component.css']
})

export class FigmaserachComponent implements OnInit {
  color = '';
  configService: any;
  figma: {};

  constructor() { }

  showConfig() {
    this.configService.getConfig()
      .subscribe((data: Figma) => this.figma = {

      });
  }

  clickedButton(event){console.log(event)
    let temp= event.srcElement.parentNode;
    for(let i = 0; i < temp.childNodes.length; i++){
      if(temp.childNodes[i].nodeName === 'BUTTON'){
      if(temp.childNodes[i].classList.contains('active')){
        temp.childNodes[i].classList.remove('active');
      }  }
    }
    event.srcElement.classList.add('active')

  }

  ngOnInit(): void {
  }


}
