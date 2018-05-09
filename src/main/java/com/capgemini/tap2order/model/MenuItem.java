package com.capgemini.tap2order.model;

public abstract class MenuItem {

    //Parent class for Food and Drink
    //is abstract because a MenuItem is never instantiated in reality


    private int id;
    private EMenuItem item;
    private double price;
    private String name;


    public MenuItem(int newId, EMenuItem newItem, String newName, double newPrice) {
        this.id = newId;
        this.item = newItem;
        this.price = newPrice;
        this.name = newName;
    }



    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public EMenuItem getItem() {
        return item;
    }

    public void setItem(EMenuItem item) {
        this.item = item;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}
