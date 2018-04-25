package com.capgemini.tap2order.model;

public class Food extends MenuItem {

    //Food inherits from MenuItem, but also has an Ingredient or a list of Ingredients.

    private Ingredient[] listOfIngredients;

    //Constructor that takes the elements of MenuItem + a list of ingredients
    public Food(int newId, EMenuItem newItem, String newName, double newPrice, Ingredient[] newListOfIngredients) {
        super(newId, newItem, newName, newPrice);
        this.listOfIngredients = newListOfIngredients;
    }

    public Ingredient[] getListOfIngredients() {
        return listOfIngredients;
    }

    public void setListOfIngredients(Ingredient[] listOfIngredients) {
        this.listOfIngredients = listOfIngredients;
    }


    //the printMenuItem from the MenuItem class, including the method for printing the list of ingredients

}