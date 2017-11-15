import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  featureAdded = 'recipe';

  onNavigation(feature: string){
    this.featureAdded = feature;
  }

}
