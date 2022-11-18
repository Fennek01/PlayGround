import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ContentComponent } from "./content.component";
import { ConteudoCustomizadoComponent } from "./conteudo-customizado/conteudo-customizado.component";


@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],
    declarations: [
        ContentComponent,
        ConteudoCustomizadoComponent
    ],
    exports: [
        ContentComponent
    ]
})
export class ContentModule {}