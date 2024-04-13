import { Component } from '@angular/core';
import { IconHome } from '@tabler/icons-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-16-sample';
  iconHome = IconHome;
}
