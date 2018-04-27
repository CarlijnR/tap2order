package com.capgemini.tap2order.controller;
import com.capgemini.tap2order.model.*;
import com.capgemini.tap2order.view.MenuItemView;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
@RequestMapping("api/restaurant/menu")

public class MenuItemController {

    private MenuItemView menuItemView = new MenuItemView();
    private IngredientController ing = new IngredientController();
    private ArrayList<MenuItem> foodList = new ArrayList<>();
    private ArrayList<MenuItem> drinkList = new ArrayList<>();
    private MenuItem menuItem;


    public MenuItemController() {
        MenuItem soup = new Food(1, EMenuItem.Starter, "soup", 10, ing.getListOfIngredients());
        MenuItem pizza = new Food(2, EMenuItem.Main, "pizza", 3, ing.getListOfIngredients());
        MenuItem tiramisu = new Food(3, EMenuItem.Desert, "tiramisu", 8, ing.getListOfIngredients());
        MenuItem lasagna = new Food(5, EMenuItem.Main, "lasagna", 5, ing.getListOfIngredients());
        MenuItem pastaBolognese = new Food(6, EMenuItem.Main, "pastaBolognese", 3, ing.getListOfIngredients());
        MenuItem ceaserSalad = new Food(7, EMenuItem.Starter, "ceaserSalad", 8, ing.getListOfIngredients());
        MenuItem burger = new Food(8, EMenuItem.Main, "burger", 2, ing.getListOfIngredients());
        MenuItem fragolo = new Food(9, EMenuItem.Starter, "fragolo", 2, ing.getListOfIngredients());

        MenuItem beer = new Drink(10, EMenuItem.Drink, "beer", 3);
        MenuItem water = new Drink(4, EMenuItem.Drink, "water", 2);

        this.foodList.add(lasagna);
        this.foodList.add(pizza);
        this.foodList.add(pastaBolognese);
        this.foodList.add(soup);
        this.foodList.add(tiramisu);
        this.foodList.add(ceaserSalad);
        this.foodList.add(burger);
        this.foodList.add(fragolo);

        this.drinkList.add(beer);
        this.drinkList.add(water);
    }


    public void showMenuItem() {
        menuItemView.printListOfMenuItem(foodList);
    }

    public MenuItemView getMenuItemView() {
        return menuItemView;
    }

    public void setMenuItemView(MenuItemView menuItemView) {
        this.menuItemView = menuItemView;
    }

    public IngredientController getIng() {
        return ing;
    }

    public void setIng(IngredientController ing) {
        this.ing = ing;
    }

    @GetMapping ("/list/food")
    public ArrayList<MenuItem> getFoodList() {
        return foodList;
    }

    public void setFoodList(ArrayList<MenuItem> foodList) {
        this.foodList = foodList;
    }

    @GetMapping ("/list/drinks")
    public ArrayList<MenuItem> getDrinkList() {
        return drinkList;
    }

    public void setDrinkList(ArrayList<MenuItem> drinkList) {
        this.drinkList = drinkList;
    }
}
