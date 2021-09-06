import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { Inventory } from '../../models/inventory.model';
import { InventoryService } from '../../services/inventory.service';

@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.scss'],
})
export class AddInventoryComponent implements OnInit {
  form: FormGroup;

  constructor(
    private readonly service: InventoryService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      quantity: new FormControl(0, [Validators.required, Validators.min(0)]),
    });
  }

  formSubmit(): void {
    this.service
      .save(this.form.value as Inventory)
      .pipe(take(1))
      .subscribe(
        () => {
          this.router.navigate(['/inventory/view']);
        },
        (error) => console.error(error)
      );
  }
}
