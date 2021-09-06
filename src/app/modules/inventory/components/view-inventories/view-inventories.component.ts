import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Inventory } from '../../models/inventory.model';
import { InventoryService } from '../../services/inventory.service';

@Component({
  selector: 'app-view-inventories',
  templateUrl: './view-inventories.component.html',
  styleUrls: ['./view-inventories.component.scss']
})
export class ViewInventoriesComponent implements OnInit {
  inventories$: Observable<Inventory[]>;

  constructor(private readonly service: InventoryService) { }

  ngOnInit(): void {
    this.inventories$ = this.service.getAll();
  }

}
