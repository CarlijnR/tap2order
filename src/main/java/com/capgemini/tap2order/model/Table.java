package com.capgemini.tap2order.model;

public class Table {

    private int tableId;

    private int seatNumber;

    public Table(int tableId, int seatNumber) {
        this.tableId = tableId;
        this.seatNumber = seatNumber;
    }

    public int getTableId() {
        return tableId;
    }

    public void setTableId(int tableId) {
        this.tableId = tableId;
    }



    public int getSeatNumber() {
        return seatNumber;
    }

    public void setSeatNumber(int seatNumber) {
        this.seatNumber = seatNumber;
    }
}