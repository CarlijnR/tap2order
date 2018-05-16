//package com.capgemini.tap2order.controller;
//
//import com.capgemini.tap2order.model.Sitting;
//import com.capgemini.tap2order.repository.SittingRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.ArrayList;
//import java.util.Optional;
//
//@RestController
//@RequestMapping("/api/restaurant/sitting")
//public class SittingController {
//
//
//    private ArrayList<Sitting> sittings;
//    private OrderController orderController;
//
//
//    @Autowired
//    private SittingRepository sittingRepository;
//
//    @GetMapping("/")
//    public Iterable<Sitting> getSittings(){
//        return sittingRepository.findAll();
//    }
//
//    @GetMapping("/{id}")
//    public Sitting getSittingByID(@PathVariable int id){
//        Optional<Sitting> sitting = sittingRepository.findById(id);
//
//        if(sitting.isPresent()){
//            return sitting.get();
//        }
//        return null;
//    }
//
//    //Can be used for reservation
//    @PostMapping("/add")
//    public Sitting registerSitting(Sitting sitting){
//        System.out.println(sitting);
//        sittings.add(sitting);
//        return sittingRepository.save(sitting);
//    }
//
//

//
//
//}
