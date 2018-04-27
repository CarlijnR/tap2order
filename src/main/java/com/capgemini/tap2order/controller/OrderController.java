package com.capgemini.tap2order.controller;

import com.capgemini.tap2order.model.*;
import com.capgemini.tap2order.view.OrderView;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
@RequestMapping("api/restaurant/order")

public class OrderController {

    private ArrayList<Order> orderList = new ArrayList<Order>();
    private MenuItemController menuItemController = new MenuItemController();
    private OrderView orderView = new OrderView();
    private Order order;
    private double totalOrderPrice = 0;
    private double orderPrice;


    public OrderController() {

        Order order1 = new Order(6, menuItemController.getFoodList(), 2);
        Order order2 = new Order(7, menuItemController.getDrinkList(), 2);
        orderList.add(order1);
        orderList.add(order2);
        calculateOrderPrice();
        calcTotalOrderPrice();
    }


    @GetMapping("/printOrder")
    public ArrayList<Order> printOrder() {
        return this.orderList;
    }


    public OrderController(ArrayList<Order> orderlist, int tableId) {
        this.orderList = orderList;
        tableId = order.getTableId();

    }

    @GetMapping("/printTotalOrderPrice")
    //Before I had the OrderPrice be calculated out of the prices of the MenuItems, but had them hardcoded
    //this calculator, that takes all the orders together DID work!!!
    public double calcTotalOrderPrice() {
        totalOrderPrice = 0;
        for (Order currentOrder : orderList) {
            for (MenuItem item : currentOrder.getMenuItemList()) {
                totalOrderPrice = totalOrderPrice + item.getPrice();
            }
        }
        return totalOrderPrice;
    }

    //method to print the order
    //this does print anything anymore, it did work before.

    @GetMapping ("/printSingleOrderPrice")
    public double calculateOrderPrice() {
        for (MenuItem currentItem : menuItemController.getFoodList()) {
            if (currentItem instanceof Food) {
                Food tempFood = (Food) currentItem;
                orderPrice = tempFood.getPrice() + orderPrice;
            }
            if (currentItem instanceof Drink) {
                Drink temDrink = (Drink) currentItem;
                orderPrice = temDrink.getPrice() + orderPrice;
            }
        }
        return orderPrice;
    }


    public ArrayList<Order> getOrderList() {
        return orderList;
    }

    public void setOrderList(ArrayList<Order> orderList) {
        this.orderList = orderList;
    }

    public double getTotalOrderPrice() {
        return totalOrderPrice;
    }

    public void setTotalOrderPrice(double totalOrderPrice) {
        this.totalOrderPrice = totalOrderPrice;
    }


}


