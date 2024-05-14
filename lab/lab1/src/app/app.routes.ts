import { Routes } from '@angular/router';
import {Lab2Component} from './pages/lab2/lab2.component';
import {Lab3Component} from './pages/lab3/lab3.component';

export const routes: Routes = [
    {
        path: 'lab2',
        component: Lab2Component
    },
    {
        path: 'lab3',
        component : Lab3Component
    }
];
