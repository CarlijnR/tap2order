package com.capgemini.tap2order.model;

public class Table {

    private int tableId;
    private Order orderId;
    private int seatNumber;

    public Table(int tableId, Order orderId, int seatNumber) {
        this.tableId = tableId;
        this.orderId = orderId;
        this.seatNumber = seatNumber;
    }
}