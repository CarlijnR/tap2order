package com.capgemini.tap2order.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@Entity
public class Table {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int tableId;
    private int seatNumber;
    private boolean isReserved;

}