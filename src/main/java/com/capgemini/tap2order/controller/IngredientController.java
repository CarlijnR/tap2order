package com.capgemini.tap2order.controller;

import com.capgemini.tap2order.model.Ingredient;
import com.capgemini.tap2order.repository.IngredientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;


@RestController
public class IngredientController {


    @Autowired
    private IngredientRepository ingredientRepository;

    @GetMapping("/")
    public Iterable<Ingredient> getIngredient(){
        return ingredientRepository.findAll();
    }

    @GetMapping("{/{id}")
    public Ingredient getIngredientByID(@PathVariable int id){
        Optional<Ingredient> ingredient = ingredientRepository.findById(id);

        if(ingredient.isPresent()){
            return ingredient.get();
        }
        return null;
    }


    @GetMapping("/add/{name}/{grams}/{price}")
    public Ingredient addIngredient(@PathVariable String name, @PathVariable int grams,@PathVariable double price){
        Ingredient ingredient = new Ingredient();
        ingredient.setIngredientName(name);
        ingredient.setIngredientGrams(grams);
        ingredient.setIngredientPrice(price);
        return ingredientRepository.save(ingredient);
    }

    @GetMapping("/add/{id}/{name}/{grams}/{price}")
    public Ingredient updateIngredient(@PathVariable int id, @PathVariable String name, @PathVariable int grams, @PathVariable int price){
        Ingredient ingredient = new Ingredient();
        ingredient.setIngredientId(id);
        ingredient.setIngredientName(name);
        ingredient.setIngredientGrams(grams);
        ingredient.setIngredientPrice(price);
        return ingredientRepository.save(ingredient);
    }

}





