package com.dimitar.ranga.todos.rangatodos.service;

import com.dimitar.ranga.todos.rangatodos.entities.Todo;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

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

    public Todo deleteById(final long id) {
        Optional<Todo> todo = todos.stream().filter(tod -> tod.getId() == id).findFirst();

        if(todo.isPresent() && todos.remove(todo.get())) {
            return todo.get();
        } else {
            return null;
        }
    }
}
