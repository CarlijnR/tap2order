package com.capgemini.tap2order.repository;

import com.capgemini.tap2order.model.Drink;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DrinkRepository extends CrudRepository<Drink, Integer> {
}
