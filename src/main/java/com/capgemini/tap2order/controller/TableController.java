package com.capgemini.tap2order.controller;

import com.capgemini.tap2order.model.Order;
import com.capgemini.tap2order.model.Table;
import com.capgemini.tap2order.repository.TableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@RestController
@RequestMapping("/api/restaurant/table")
public class TableController {

    private ArrayList<Table> tables;


    @Autowired
    private TableRepository tableRepository;

    @GetMapping("/")
    public Iterable<Table> getTables(){
        return tableRepository.findAll();
    }

    @GetMapping("/{id}")
    public Table getSittingByID(@PathVariable int id){
        Optional<Table> table = tableRepository.findById(id);

        if(table.isPresent()){
            return table.get();
        }
        return null;
    }

    //Can be used for seperate guest payments
    @PostMapping("/add")
    public Table addTable(Table table){
        System.out.println(table);
        tables.add(table);
        return tableRepository.save(table);
    }

}