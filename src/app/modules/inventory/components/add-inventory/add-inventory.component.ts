import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { InventoryService } from '../../services/inventory.service';
import { Inventory } from '../../store/inventory.reducer';

@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.scss'],
})
export class AddInventoryComponent implements OnInit {
  form: FormGroup;

  constructor(
    private readonly service: InventoryService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required]),
      quantity: new FormControl(0, [Validators.required, Validators.min(0)]),
    });
    this.preFillForm();
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

  private preFillForm(): void {
    const { id } = this.activatedRoute.snapshot.queryParams;
    if (!id) {
      return;
    }
    this.service.getOne(id).pipe((take(1))).subscribe((inventory) => {
      this.form.patchValue(inventory);
    });
  }
}
