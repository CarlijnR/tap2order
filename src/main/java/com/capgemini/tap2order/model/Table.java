package com.capgemini.tap2order.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@Entity
public class Table {

    @Id
    private int tableId;
    private int seatNumber;
    private boolean isReserved;



}