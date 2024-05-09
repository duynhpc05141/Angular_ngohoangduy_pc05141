import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Inventor{
    id: number,
    first: string,
    last: string,
    year: number,
    passed: number
}

@Component({
  selector: 'app-inventor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inventor.component.html',
  styleUrl: './inventor.component.css'
})
export class InventorComponent {
    inventors:Inventor[] = [
        {id:1, first:'demo1', last:'so 1', year:1870, passed:1234 },
        {id:2, first:'demo2', last:'so 2', year:1870, passed:1234 },
        {id:3, first:'demo3', last:'so 3', year:1870, passed:1234 },
        {id:4, first:'demo4', last:'so 4', year:1870, passed:1234 },
        {id:5, first:'demo5', last:'so 5', year:1870, passed:1234 },
        {id:6, first:'demo6', last:'so 6', year:1870, passed:1234 },
    ];
}
