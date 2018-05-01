package com.capgemini.tap2order.model;

import lombok.Data;
import org.hibernate.validator.constraints.EAN;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
public class Food extends MenuItem {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String name;
    private double price;
    private List<Ingredient> ingredients;

}