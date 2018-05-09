package com.capgemini.tap2order.controller;

import com.capgemini.tap2order.model.Ingredient;
import com.capgemini.tap2order.repository.IngredientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Optional;


@RestController
@RequestMapping("/api/ingredient/")
public class IngredientController {

    private static ArrayList<Ingredient> ingredients = new ArrayList<>();


    @Autowired
    private IngredientRepository ingredientRepository;

    @GetMapping("/")
    public Iterable<Ingredient> getIngredient() {
        return ingredientRepository.findAll();
    }

    @GetMapping("/{id}")
    public Ingredient getIngredientByID(@PathVariable int id) {
        Optional<Ingredient> ingredient = ingredientRepository.findById(id);

        if (ingredient.isPresent()) {
            return ingredient.get();
        }
        return null;
    }

    @PostMapping("/add")
    public Ingredient registerIngredient(@RequestBody Ingredient ingredient) {
        System.out.println(ingredient);
        ingredients.add(ingredient);
        return ingredientRepository.save(ingredient);
    }

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


//    @GetMapping("/")
//    public ArrayList<Ingredient> getAllIngredients()
//    {return ingredients;}





