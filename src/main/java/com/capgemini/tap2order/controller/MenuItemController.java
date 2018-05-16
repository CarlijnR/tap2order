package com.capgemini.tap2order.controller;

import com.capgemini.tap2order.model.MenuItem;
import com.capgemini.tap2order.repository.MenuItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Optional;

@RestController
@RequestMapping("/api/menuItem")
public class MenuItemController {

    private static ArrayList<MenuItem> menuitems = new ArrayList<>();


    @Autowired
    private MenuItemRepository menuItemRepository;

    @GetMapping("/")
    public Iterable<MenuItem> getMenuItem() {
        return menuItemRepository.findAll();
    }

    @GetMapping("/{id}")
    public MenuItem getMenuItemByID(@PathVariable int id) {
        Optional<MenuItem> menuItem = menuItemRepository.findById(id);

        if (menuItem.isPresent()) {
            return menuItem.get();
        }
        return null;
    }


    @PostMapping("/add")
    public MenuItem registerMenuItem(@RequestBody MenuItem menuItem) {
        System.out.println(menuItem);
        menuitems.add(menuItem);
        return menuItemRepository.save(menuItem);
    }

}
