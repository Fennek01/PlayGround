import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { MostrarComponent } from "./pages/Mostrar/Mostrar.component";
import { DataBindingComponent } from './pages/data-binding/data-binding.component';
import { TestesComponent } from "./pages/Testes/Testes.component";
import { JogoVelhaComponent } from "./pages/JogoVelha/JogoVelha.component";

const routes: Route[] = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'data-binding',
        component: DataBindingComponent
      },
    {
        path: 'Mostrar',
        component: MostrarComponent
    },
    {
        path: 'JogoVelha',
        component: JogoVelhaComponent
    },
    {
        path: 'Testes',
        component: TestesComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRountingModule { }