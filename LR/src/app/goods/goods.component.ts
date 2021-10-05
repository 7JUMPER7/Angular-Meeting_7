import { Component, OnInit } from '@angular/core';
import Good from './good';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss'],
  providers: [ApiService]
})
export class GoodsComponent implements OnInit {
  goods!: Good[];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getGoods().subscribe(data => this.goods = data);
  }

}
