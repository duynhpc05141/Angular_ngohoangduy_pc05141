import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {InventorComponent} from './Inventor/inventor.component';
import {ProductComponent} from "./product/product.component";
 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,InventorComponent,ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    name = 'NgoDuy';
    student = {
        hoTen: 'Ngô Hoàng Duy',
        gioiTinh: 'Nam',
        ngaySinh: '08/10/1999',
        anh: 'demo.jpg',
        diemTB: 9.0,
    }
}

// Angular 17
// Node js 18.20.2