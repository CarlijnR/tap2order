package com.capgemini.tap2order.model;

import lombok.Data;
import org.springframework.web.bind.annotation.RestController;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
@Data

public class Ingredient {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int ingredientId;
    private String ingredientName;
    private int ingredientGrams;
    private double ingredientPrice;

}

