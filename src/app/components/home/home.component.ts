import { Component } from '@angular/core';
import { HeaderComponent } from '@components/header/header.component'
import { MainComponent } from '@components/main/main.component'
import { CardYearComponent } from '@components/card-year/card-year.component'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    MainComponent,
    CardYearComponent
  ],
  templateUrl: './home.component.html',

})
export class HomeComponent {

}
