package com.capgemini.tap2order.controller;
import com.capgemini.tap2order.model.*;
import com.capgemini.tap2order.view.MenuItemView;
import java.util.ArrayList;

public class MenuItemController {

    private MenuItemView menuItemView = new MenuItemView();
    private IngredientController ing = new IngredientController();
    private ArrayList<MenuItem> listOfMenuItems = new ArrayList<MenuItem>();
    private ArrayList<MenuItem> listOfMenuItems2 = new ArrayList<MenuItem>();
    private MenuItem menuItem;


    public MenuItemController() {
        MenuItem soup = new Food(1, EMenuItem.Starter, "soup", 10, ing.getListOfIngredients());
        MenuItem pizza = new Food(2, EMenuItem.Main, "pizza", 3, ing.getListOfIngredients());
        MenuItem tiramisu = new Food(3, EMenuItem.Desert, "tiramisu", 8, ing.getListOfIngredients());
        MenuItem water = new Drink(4, EMenuItem.Drink, "water", 2);
        MenuItem lasagna = new Food(5, EMenuItem.Main, "lasagna", 5, ing.getListOfIngredients());
        MenuItem pastaBolognese = new Food(6, EMenuItem.Main, "pastaBolognese", 3, ing.getListOfIngredients());
        MenuItem ceaserSalad = new Food(7, EMenuItem.Starter, "ceaserSalad", 8, ing.getListOfIngredients());
        MenuItem burger = new Food(8, EMenuItem.Main, "burger", 2, ing.getListOfIngredients());
        MenuItem fragolo = new Food(9, EMenuItem.Starter, "fragolo", 2, ing.getListOfIngredients());
        MenuItem beer = new Drink(10, EMenuItem.Drink, "beer", 3);

        listOfMenuItems.add(lasagna);
        listOfMenuItems.add(pizza);
        listOfMenuItems.add(pastaBolognese);
        listOfMenuItems.add(beer);

    }


    public void showMenuItem() {
        menuItemView.printListOfMenuItem(listOfMenuItems);
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


    public ArrayList<MenuItem> getListOfMenuItems() {
        return listOfMenuItems;
    }

    public void setListOfMenuItems(ArrayList<MenuItem> listOfMenuItems) {
        this.listOfMenuItems = listOfMenuItems;
    }

    public ArrayList<MenuItem> getListOfMenuItems2() {
        return listOfMenuItems2;
    }

    public void setListOfMenuItems2(ArrayList<MenuItem> listOfMenuItems2) {
        this.listOfMenuItems2 = listOfMenuItems2;
    }
}
