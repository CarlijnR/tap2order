package com.capgemini.tap2order.model;


import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Data
public class MenuItem {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int menuItemId;
    private String menuItemName;
    private double menuItemPrice;
    private int quantity;

}
