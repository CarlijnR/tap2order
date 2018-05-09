package com.capgemini.tap2order.controller;

import com.capgemini.tap2order.model.*;

import com.capgemini.tap2order.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
@RequestMapping("/api/restaurant/order")
public class OrderController {

    private ArrayList<Order> orders;


    @Autowired
    private OrderRepository orderRepository;

    @GetMapping("/")
    public Iterable<Order> getOrders() {
        return orderRepository.findAll();
    }



}

//    public double calcTotalOrderPrice() {
//        totalOrderPrice = 0;
//        for (Order currentOrder : orderList) {
//            for (MenuItem item : currentOrder.getMenuItemList()) {
//                totalOrderPrice = totalOrderPrice + item.getPrice();
//            }
//        }
//        return totalOrderPrice;
//    }


//    public double calculateOrderPrice() {
//        for (MenuItem currentItem : menuItemController.getListOfMenuItems()) {
//            if (currentItem instanceof Food) {
//                Food tempFood = (Food) currentItem;
//                orderPrice = tempFood.getPrice() + orderPrice;
//            }
//            if (currentItem instanceof Drink) {
//                Drink temDrink = (Drink) currentItem;
//                orderPrice = temDrink.getPrice() + orderPrice;
//            }
//        }
//        return orderPrice;
//    }

//
//    public ArrayList<Order> getOrderList() {
//        return orderList;
//    }
//
//    public void setOrderList(ArrayList<Order> orderList) {
//        this.orderList = orderList;
//    }
//
//    public double getTotalOrderPrice() {
//        return totalOrderPrice;
//    }
//
//    public void setTotalOrderPrice(double totalOrderPrice) {
//        this.totalOrderPrice = totalOrderPrice;
//    }





