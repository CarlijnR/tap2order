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


    //    @GetMapping("/add/{name}/{grams}/{price}")
//    public Ingredient addIngredient(@PathVariable String name, @PathVariable int grams,@PathVariable double price){
//        Ingredient ingredient = new Ingredient();
//        ingredient.setIngredientName(name);
//        ingredient.setIngredientGrams(grams);
//        ingredient.setIngredientPrice(price);
//
//    }
//
//    @GetMapping("/remove/{id}")
//    public void removeIngredient(@PathVariable int id){
//        ingredientRepository.deleteById(id);
//    }

    @PostMapping("/add")
    public MenuItem registerMenuItem(@RequestBody MenuItem menuItem) {
        System.out.println(menuItem);
        menuitems.add(menuItem);
        return menuItemRepository.save(menuItem);
    }


    //TODO: putmapping

    @PutMapping(value = "/{id}")
    public MenuItem putById(@PathVariable int id, @RequestBody MenuItem menuItem) {
        Optional<MenuItem> optionalMenuItem = this.menuItemRepository.findById(id);
        if (optionalMenuItem.isPresent()) {
            MenuItem updatedMenuItem = optionalMenuItem.get();
            updatedMenuItem.setQuantity(menuItem.getQuantity());
            return updatedMenuItem;
        }
        return menuItem;
    }

//    @GetMapping("/")
//    public ArrayList<Ingredient> getAllIngredients()
//    {return ingredients;}
}
