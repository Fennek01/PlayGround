import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { JogoVelhaComponent } from "./JogoVelha.component";

@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],
    declarations: [
        JogoVelhaComponent
    ],
    exports: [
        JogoVelhaComponent
    ]
})
export class JogoVelhaModule {}