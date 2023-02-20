import { Component } from '@angular/core';
import { exampleProducts } from '@monorepo-app/products';

@Component({
  selector: 'monorepo-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'store';
  products = exampleProducts;
}
