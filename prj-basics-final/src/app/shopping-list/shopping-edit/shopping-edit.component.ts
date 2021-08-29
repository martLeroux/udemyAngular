import { Component, OnInit, OnDestroy, ViewChild, } from '@angular/core';
import { Ingredient } from "../../shared/ingredient.model";
import { ShoppingListService } from '../shopping-list.service';
import { Subscription } from 'rxjs/Subscription';
import { NgForm } from "@angular/forms"

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.slService.startedEditing.subscribe(
      (index: number) => {
        console.log(index);
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.slService.getIngredient(index);

        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
    );
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    console.log(value);
    const newIngredient = new Ingredient(value.name, value.amount);

    this.slService.addIngredient(newIngredient);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
