package com.capgemini.tap2order;

//package com.capgemini.tap2order.controller;

import com.capgemini.tap2order.controller.DrinkController;
import com.capgemini.tap2order.model.Drink;
import com.capgemini.tap2order.repository.DrinkRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Before;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.MethodSorters;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;


import java.util.Optional;

import static org.hamcrest.core.Is.is;
import static org.mockito.Mockito.any;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

// for referall if you might remove the code above (if it happens this still remains)
/*
import static org.hamcrest.core.Is.is;
import static org.mockito.Mockito.any;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
 */


@RunWith(MockitoJUnitRunner.class)
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class DrinkControllerTest {

    @InjectMocks
    private DrinkController drinkController;

    @Mock
    private DrinkRepository drinkRepository;

    private MockMvc mockMvc;

    @Before
    public void setUp() {
        this.mockMvc = MockMvcBuilders.standaloneSetup(this.drinkController).build();
    }

    @Test
    public void testCreateDrink()
            throws Exception {
        Drink drink = new Drink();
        drink.setDrinkId(1);
        drink.setDrinkName("Beer");
        drink.setDrinkPrice(3.5);
        ObjectMapper mapper = new ObjectMapper();
        String jsonSport = mapper.writeValueAsString(drink);

        Mockito.when(this.drinkRepository.save(any(Drink.class))).thenReturn(drink);

        this.mockMvc.perform(post("/api/drink/add")
                .contentType(MediaType.APPLICATION_JSON)
                .content(jsonSport)).andDo(print())
                .andExpect(jsonPath("$.drinkId", is(Long.valueOf(drink.getDrinkId()).intValue())))
                .andExpect(jsonPath("$.drinkName", is(drink.getDrinkName())))
                .andExpect(jsonPath("$.drinkPrice", is(drink.getDrinkPrice())))
                .andExpect(status().isOk()
                );
    }

    @Test
    public void testGetDrink() throws Exception {
        Drink drink = new Drink();
        drink.setDrinkId(2);
        drink.setDrinkName("Cola");
        drink.setDrinkPrice(2.0);
        ObjectMapper mapper = new ObjectMapper();
        String jsonSport = mapper.writeValueAsString(drink);

        Mockito.when(this.drinkRepository.findById(2)).thenReturn(Optional.of(drink));

        this.mockMvc.perform(get("/api/drink/2")
                .contentType(MediaType.APPLICATION_JSON)
                .content(jsonSport)).andDo(print())
                .andExpect(jsonPath("$.drinkId", is(Long.valueOf(drink.getDrinkId()).intValue())))
                .andExpect(jsonPath("$.drinkName", is(drink.getDrinkName())))
                .andExpect(jsonPath("$.drinkPrice", is(drink.getDrinkPrice())))
                .andExpect(status().isOk()
                );
    }
}