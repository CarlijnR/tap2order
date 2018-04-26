package com.capgemini.tap2order.controller;

import com.capgemini.tap2order.model.Ingredient;
import com.capgemini.tap2order.model.MenuItem;
import com.capgemini.tap2order.view.IngredientView;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

public class IngredientController {

    private IngredientView ingredientView = new IngredientView();
    private Ingredient ingredient;
    private ArrayList<Ingredient> listOfIngredients = new ArrayList<>();

    Ingredient garlic = new Ingredient(1, "garlic", 100, 2);
    Ingredient salt = new Ingredient(2, "salt", 22, 1);
    Ingredient oil = new Ingredient(3, "oil", 78, 3);
    Ingredient cream = new Ingredient(4, "cream", 60, 55);
    Ingredient meat = new Ingredient(5, "meat", 300, 10);
    Ingredient tomato = new Ingredient(6, "tomato", 50, 5.5);
    Ingredient sugar = new Ingredient(7, "sugar", 50, 1.2);
    Ingredient pepper = new Ingredient(8, "pepper", 5, 0.02);
    Ingredient dough = new Ingredient(9, "dough", 250, 1.1);
    Ingredient pasta = new Ingredient(10, "pasta", 220, 1.3);


    public IngredientController() {

        this.listOfIngredients.add(garlic);
        this.listOfIngredients.add(salt);
        this.listOfIngredients.add(oil);
        this.listOfIngredients.add(cream);
    }

    public void showIngredients() {
        ingredientView.printListOfIngredients(listOfIngredients);
    }

    public IngredientView getIngredientView() {
        return ingredientView;
    }

    public void setIngredientView(IngredientView ingredientView) {
        this.ingredientView = ingredientView;
    }

    public Ingredient getIngredient() {
        return ingredient;
    }

    public void setIngredient(Ingredient ingredient) {
        this.ingredient = ingredient;
    }

    public ArrayList<Ingredient> getListOfIngredients() {
        return listOfIngredients;
    }

    public void setListOfIngredients(ArrayList<Ingredient> listOfIngredients) {
        this.listOfIngredients = listOfIngredients;
    }
}





