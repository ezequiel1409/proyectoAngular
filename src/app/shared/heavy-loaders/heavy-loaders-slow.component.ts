import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-heavy-loaders-slow',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './heavy-loaders-show.component.html',
    styleUrl: './heavy-loaders-show.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeavyLoadersSlowComponent { }
