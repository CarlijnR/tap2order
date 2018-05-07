package com.capgemini.tap2order.controller;

import com.capgemini.tap2order.model.*;

import com.capgemini.tap2order.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@RestController
@RequestMapping("/api/restaurant/order")
public class OrderController {

    private ArrayList<Order> orders;

    @Autowired
    private OrderRepository orderRepository;

    @GetMapping("/")
    public Iterable<Order> getOrder(){
        return orderRepository.findAll();
    }

    @GetMapping("/{id}")
    public Order getIngredientByID(@PathVariable int id){
        Optional<Order> order = orderRepository.findById(id);

        if(order.isPresent()){
            return order.get();
        }
        return null;
    }

    @PostMapping("/add")
    public Order registerOrder(@RequestBody Order order){
        System.out.println(order);
        orders.add(order);
        return orderRepository.save(order);
    }



}


