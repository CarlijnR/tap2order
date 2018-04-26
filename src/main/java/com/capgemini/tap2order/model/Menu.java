package com.capgemini.tap2order.model;

import com.capgemini.tap2order.model.MenuItem;

import java.util.ArrayList;

public class Menu {


    private static ArrayList<MenuItem> menuItemList = new ArrayList<>();

    //constructor: a menu requires a list of MenuItem

    public Menu(ArrayList<MenuItem> menuItemList ){

        this.menuItemList = menuItemList;
    }

    public static ArrayList<MenuItem> getMenuItemList() {
        return menuItemList;
    }

    public static void setMenuItemList(ArrayList<MenuItem> menuItemList) {
        Menu.menuItemList = menuItemList;
    }
}