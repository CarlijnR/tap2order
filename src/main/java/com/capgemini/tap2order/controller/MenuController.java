package com.capgemini.tap2order.controller;


import com.capgemini.tap2order.model.EMenuItem;
import com.capgemini.tap2order.model.Food;
import com.capgemini.tap2order.model.MenuItem;
import com.capgemini.tap2order.model.Drink;

import java.util.ArrayList;

public class MenuController {

    private MenuItemController menuItem = new MenuItemController();

    public void printListOfMenuItem(ArrayList<MenuItem> listOfMenuItemsToPrint ) {
        for (MenuItem currentMenuItem : listOfMenuItemsToPrint){
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

    public ArrayList<MenuItem> getMenuItems(){
        return menuItem.getListOfMenuItems();
    }
}
