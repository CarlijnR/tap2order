package com.capgemini.tap2order.repository;

import com.capgemini.tap2order.model.Ingredient;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IngredientRepository extends CrudRepository<Ingredient, Integer> {

}
