package com.capgemini.tap2order;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.capgemini.tap2order.controller.OrderController;


@SpringBootApplication
public class Tap2orderApplication {

    public static void main(String[] args) {
        SpringApplication.run(Tap2orderApplication.class, args);

//        OrderController orderController = new OrderController();
//        orderController.printOrder();
        
    }
}
