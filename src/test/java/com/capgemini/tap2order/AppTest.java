package com.capgemini.tap2order;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import com.capgemini.tap2order.model.*;
import org.junit.Test;

import java.lang.reflect.Array;
import java.util.ArrayList;

/**
 * Unit test for simple App.
 */
public class AppTest
{
    /**
     * Rigorous Test :-)
     */
    @Test
    public void testMenu() {
        Ingredient garlic = new Ingredient(1, "garlic", 100, 2);
        ArrayList<Ingredient> ingredients = new ArrayList<>();
        ingredients.add(garlic);
        MenuItem soup = new Food(1, EMenuItem.Starter, "soup", 2, ingredients);
        ArrayList<MenuItem>menuItems= new ArrayList<>();
        menuItems.add(soup);
        Menu newItemList = new Menu(menuItems);


        assertEquals(soup, newItemList.getMenuItemList().get(0));

    }
}
