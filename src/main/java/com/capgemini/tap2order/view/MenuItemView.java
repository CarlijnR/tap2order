package com.capgemini.tap2order.view;

import com.capgemini.tap2order.model.MenuItem;
import com.capgemini.tap2order.controller.IngredientController;

public class MenuItemView {

    private IngredientController ingredientController = new IngredientController();

    public void printMenuItem(MenuItem menuItemToPrint) {
        System.out.println("Dish:" + menuItemToPrint.getName());
        ingredientController.showIngredients();
    }

    public void printListOfMenuItem(MenuItem[] ListOfMenuItemToPrint) {
        for (MenuItem currentMenuItem : ListOfMenuItemToPrint) {
            printMenuItem(currentMenuItem);
        }
    }

    public void printOrderItems(MenuItem[] ListOfMenuItemToPrint) {
        for (MenuItem currentMenuItem : ListOfMenuItemToPrint) {
            System.out.println(currentMenuItem.getName());
            System.out.println("Price: " + currentMenuItem.getPrice());
        }
    }
}