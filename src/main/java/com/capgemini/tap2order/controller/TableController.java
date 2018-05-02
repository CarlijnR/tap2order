package com.capgemini.tap2order.controller;

import com.capgemini.tap2order.model.Order;
import com.capgemini.tap2order.model.Table;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/restaurant/table")
public class TableController {

    private OrderController orderController = new OrderController();
    private MenuController menuController = new MenuController();
    private Table table;




}