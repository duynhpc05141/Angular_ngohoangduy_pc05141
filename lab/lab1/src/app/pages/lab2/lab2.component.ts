import { CommonModule } from '@angular/common';
import { Lab3Component } from './../lab3/lab3.component';
import { Component } from '@angular/core';
@Component({
  selector: 'app-lab2',
  standalone: true,
  imports: [Lab3Component,CommonModule],
  templateUrl: './lab2.component.html',
  styleUrl: './lab2.component.css'
})
export class Lab2Component {
    title:string = 'demo2';
    isCheck: boolean = false;
    arrStudent = [
        {
            name: 'duy',
            age: 18
        },
        {
            name: 'duy 2',
            age: 19
        },
        {
            name: 'duy 3',
            age: 20
        },

    ];
    getTitel(){
    }
    open(){
        this.isCheck = true;
    }

    close(){
        this.isCheck = false;
    }
}
