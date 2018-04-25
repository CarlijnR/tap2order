package com.capgemini.tap2order.controller;


import com.capgemini.tap2order.model.EMenuItem;
import com.capgemini.tap2order.model.Food;
import com.capgemini.tap2order.model.MenuItem;
import com.capgemini.tap2order.model.Drink;
import com.capgemini.tap2order.view.MenuView;


public class MenuController {

    private MenuItemController menuItem = new MenuItemController();

    public void printListOfMenuItem(MenuItem[] ListOfMenuItemToPrint) {
        for (MenuItem currentMenuItem : ListOfMenuItemToPrint){
            if(currentMenuItem instanceof Food && currentMenuItem.getItem() == EMenuItem.Starter) {
                menuItem.showMenuItem();
            }
            else if(currentMenuItem instanceof Food && currentMenuItem.getItem() == EMenuItem.Main ){
                menuItem.showMenuItem();
            }
            else if(currentMenuItem instanceof Food && currentMenuItem.getItem() == EMenuItem.Desert ){
                menuItem.showMenuItem();
            }
            else if(currentMenuItem instanceof Drink){
                menuItem.showMenuItem();
            }
            else{
                System.out.println("Error: this item is not part of the Menu");
            }
        }
    }
}
