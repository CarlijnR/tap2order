package com.capgemini.tap2order.repository;

        import com.capgemini.tap2order.model.Order;
        import org.springframework.data.repository.CrudRepository;
        import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends CrudRepository<Order, Integer> {
}
