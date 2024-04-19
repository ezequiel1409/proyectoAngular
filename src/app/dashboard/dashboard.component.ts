import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidemenuComponent } from '../shared/sidemenu/sidemenu.component';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [
       RouterModule, SidemenuComponent
    ],
    template: '<p>control-flow works!</p>',
    templateUrl: './dashboard.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DashboardComponent { }
