package com.capgemini.tap2order.model;


import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Data
public abstract class MenuItem {
    //Parent class for Food and Drink
    //is abstract because a MenuItem is never instantiated in reality

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String name;
    private EMenuItem item;
    private double price;

}
