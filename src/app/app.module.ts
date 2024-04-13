import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  IconABOff,
  IconBrandAngular,
  TablerIconComponent,
  TablerIconConfig,
  TablerIconModule
} from '@tabler/icons-angular';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TablerIconModule.pick({ IconBrandAngular, IconABOff }), TablerIconComponent],
  // imports: [BrowserModule, TablerIconModule.pick(icons), TablerIconComponent], // import all icons
  bootstrap: [AppComponent],
  providers: [
    { provide: TablerIconConfig, useValue: { color: '#898898', stroke: 2, size: 60 } }
  ]
})
export class AppModule {}
