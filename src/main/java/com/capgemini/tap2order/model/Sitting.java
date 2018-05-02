package com.capgemini.tap2order.model;

import lombok.Data;

import javax.persistence.Entity;
import java.util.ArrayList;

@Entity
@Data
public class Sitting {

    private int id;
    private ArrayList<Order> order;
    private double price;



}



