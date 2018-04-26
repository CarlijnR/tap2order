package com.capgemini.tap2order.view;


import com.capgemini.tap2order.controller.OrderController;
import com.capgemini.tap2order.model.MenuItem;
import com.capgemini.tap2order.model.Order;

import java.util.ArrayList;


public class OrderView {

    public void printOrder(MenuItem[] menuItemList) {
        for (MenuItem currentItem : menuItemList) {
            System.out.println(currentItem.getName());
            System.out.println("Price: " + currentItem.getPrice());
        }
    }

    public void printOrderList(ArrayList<Order> orderList) {
        OrderController tempCont = new OrderController();
        for (Order currentOrder : orderList) {

            System.out.println();
//              System.out.println("id: " + currentOrder.getOrderId());
            System.out.print(currentOrder);
//            MenuItem[] tempArray = currentOrder.getMenuItemList();
//            printOrder(tempArray);
//
//            System.out.println("The price of this order: " + currentOrder.;
////                System.out.println("The total order price: " + calcTotalOrderPrice());
        }
        System.out.println("-----------");
        System.out.println("The total order price: " + tempCont.calcTotalOrderPrice());
    }
//    public void printOrderList(Order[] orderList){
//        for(Order currentOrder : orderList){
//            System.out.println("id: " + currentOrder.getOrderId() + "order: ");
//            System.out.println( "orderprice: " + currentOrder.getOrderPrice() + "for table: " + currentOrder.getTableId());
//        }
//    }
}
