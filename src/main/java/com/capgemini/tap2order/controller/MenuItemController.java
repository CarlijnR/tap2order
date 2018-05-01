//package com.capgemini.tap2order.controller;
//import com.capgemini.tap2order.model.*;
//import com.capgemini.tap2order.repository.MenuItemRepository;
//import com.capgemini.tap2order.view.MenuItemView;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RestController;
//
//import java.util.ArrayList;
//import java.util.Optional;
//
//@RestController
//public class MenuItemController {
//
//
//    @Autowired
//    private MenuItemRepository menuItemRepository;
//
//    @GetMapping("/")
//    public Iterable<MenuItem> getMenuItem(){
//        return menuItemRepository.findAll();
//    }
//
//    @GetMapping("{/{id}")
//    public MenuItem getMenuItemByID(@PathVariable int id){
//        Optional<MenuItem> menuItem = menuItemRepository.findById(id);
//
//        if(menuItem.isPresent()){
//            return menuItem.get();
//        }
//        return null;
//    }
//
//    @GetMapping("/add/food/{name}/{price}")
//    public MenuItem addFoodItem(@PathVariable String name, @PathVariable double price){
//        MenuItem food = new Food();
//        food.setName(name);
//        food.setPrice(price);
//
//        return menuItemRepository.save(food);
//    }
//
//    @GetMapping("/add/drink/{name}/{price}")
//    public MenuItem addDrinkItem(@PathVariable String name, @PathVariable double price){
//        MenuItem drink = new Drink();
//        drink.setName(name);
//        drink.setPrice(price);
//
//        return menuItemRepository.save(drink);
//    }
//
//
//
//
//
//}