package com.capgemini.tap2order.model;

public class Ingredient {

    private int ingredientId;
    private String ingredientName;
    private int ingredientGrams;
    private double ingredientPrice;

    public Ingredient(int ingredientId, String ingredientName, int ingredientGrams, double ingredientPrice) {
        this.ingredientId = ingredientId;
        this.ingredientName = ingredientName;
        this.ingredientGrams = ingredientGrams;
        this.ingredientPrice = ingredientPrice;
    }

    public int getIngredientId() {
        return ingredientId;
    }

    public void setIngredientId(int ingredientId) {
        this.ingredientId = ingredientId;
    }

    public String getIngredientName() {
        return ingredientName;
    }

    public void setIngredientName(String ingredientName) {
        this.ingredientName = ingredientName;
    }

    public int getIngredientGrams() {
        return ingredientGrams;
    }

    public void setIngredientGrams(int ingredientGrams) {
        this.ingredientGrams = ingredientGrams;
    }

    public double getIngredientPrice() {
        return ingredientPrice;
    }

    public void setIngredientPrice(double ingredientPrice) {
        this.ingredientPrice = ingredientPrice;
    }
}



