package com.capgemini.tap2order.model;

import java.util.ArrayList;

public class Food extends MenuItem {

    //Food inherits from MenuItem, but also has an Ingredient or a list of Ingredients.

        private  ArrayList<Ingredient> listOfIngredients = new ArrayList<>();

    //Constructor that takes the elements of MenuItem + a list of ingredients
    public Food(int newId, EMenuItem newItem, String newName, double newPrice, ArrayList<Ingredient> listOfIngredients) {
        super(newId, newItem, newName, newPrice);
        this.listOfIngredients = listOfIngredients;
    }

    public ArrayList<Ingredient> getListOfIngredients() {
        return listOfIngredients;
    }

    public void setListOfIngredients(ArrayList<Ingredient> listOfIngredients) {
        this.listOfIngredients = listOfIngredients;
    }

//the printMenuItem from the MenuItem class, including the method for printing the list of ingredients

}