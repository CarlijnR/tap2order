package com.capgemini.tap2order.model;

import com.capgemini.tap2order.model.MenuItem;

import java.util.ArrayList;

public class Menu {


    private static ArrayList<MenuItem> menuItemList = new ArrayList<>();

    public Menu() {
    }

    public static ArrayList<MenuItem> getMenuItemList() {
        return menuItemList;
    }

    public static void setMenuItemList(ArrayList<MenuItem> menuItemList) {
        Menu.menuItemList = menuItemList;
    }
}