package com.capgemini.tap2order.controller;

import com.capgemini.tap2order.model.Drink;
import com.capgemini.tap2order.repository.DrinkRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@RestController
@RequestMapping("/api/drink")
public class DrinkController {
    private static ArrayList<Drink> drinkItems = new ArrayList<>();

    @Autowired
    private DrinkRepository drinkItemRepository;

    @GetMapping("/")
    public Iterable<Drink> getDrinkItem(){return drinkItemRepository.findAll();}

    @GetMapping("/{id}")
    public Drink getDrinkItemByID(@PathVariable int id){
        Optional<Drink> drinkItem = drinkItemRepository.findById(id);

        if (drinkItem.isPresent()){
            return drinkItem.get();
        }
        return null;
    }

    @PostMapping("/add")
    public Drink registerDrinkItem(@RequestBody Drink drink){
        System.out.println(drink);
        drinkItems.add(drink);
        return drinkItemRepository.save(drink);
    }
}
