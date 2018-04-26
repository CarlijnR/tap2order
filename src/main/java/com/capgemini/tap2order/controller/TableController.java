package com.capgemini.tap2order.controller;

import com.capgemini.tap2order.model.Order;
import com.capgemini.tap2order.model.Table;

public class TableController {

    private OrderController orderController = new OrderController();
    private MenuController menuController = new MenuController();
    private Table table;


    public void showMenu() {
        menuController.printListOfMenuItem(menuController.getMenuItems());
    }

    public void getOrder(){
        orderController.getOrderList();
    }

    public void pay(){

    }

    public void callWaiter(){

    }

    public void reserveTable(){
        table.setReserved(true);
    }
}