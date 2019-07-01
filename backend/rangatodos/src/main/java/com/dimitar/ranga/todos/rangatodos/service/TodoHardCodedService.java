package com.dimitar.ranga.todos.rangatodos.service;

import com.dimitar.ranga.todos.rangatodos.entities.Todo;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoHardCodedService {

    private static List<Todo> todos = new ArrayList<Todo>();
    private static int counter = 1;

    static {
        todos.add(new Todo(counter++, "dimitar", "Learn to dance", new Date(), false));
        todos.add(new Todo(counter++, "dimitar", "Learn to play games", new Date(), false));
        todos.add(new Todo(counter++, "dimitar", "Learn to do nothing", new Date(), false));
        todos.add(new Todo(counter++, "dimitar", "Learn to do something", new Date(), false));
        todos.add(new Todo(counter++, "dimitar", "Learn to learn", new Date(), false));
    }

    public List<Todo> findAll() {
        return  todos;
    }
}
