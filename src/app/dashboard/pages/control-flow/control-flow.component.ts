import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
    selector: 'app-control-flow',
    standalone: true,
    imports: [
        CommonModule,
    ],
    template: `<p>control-flow works!</p>`,
    styleUrl: './control-flow.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export  default class ControlFlowComponent { 
    public showComponent = signal(false);

    public toggleContent(){
        this.showComponent.update(value => !value);
    };
}
