import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MostrarComponent } from "./Mostrar.component";

@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],
    declarations: [
        MostrarComponent
    ],
    exports: [
        MostrarComponent
    ]
})
export class MostrarModule {}