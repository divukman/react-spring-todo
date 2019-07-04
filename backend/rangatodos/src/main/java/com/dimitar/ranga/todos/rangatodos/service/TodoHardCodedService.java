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
    private static long counter = 0;

    static {
        todos.add(new Todo(++counter, "dimitar", "Learn to dance", new Date(), false));
        todos.add(new Todo(++counter, "dimitar", "Learn to play games", new Date(), false));
        todos.add(new Todo(++counter, "dimitar", "Learn to do nothing", new Date(), false));
        todos.add(new Todo(++counter, "dimitar", "Learn to do something", new Date(), false));
        todos.add(new Todo(++counter, "dimitar", "Learn to learn", new Date(), false));

        todos.add(new Todo(++counter, "dimitar", "Go hiking", new Date(), false));
        todos.add(new Todo(++counter, "dimitar", "Play PS4", new Date(), false));
        todos.add(new Todo(++counter, "dimitar", "Sleep enough", new Date(), false));
        todos.add(new Todo(++counter, "dimitar", "Meet with friends", new Date(), false));
        todos.add(new Todo(++counter, "dimitar", "Relax", new Date(), false));
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


    public Todo getById(final long id) {
        return todos.stream().filter(todo->todo.getId()==id).findFirst().orElse(null);
    }

    public Todo save(final Todo todo) {
        if (todo.getId() == -1 || todo.getId() == 0) {
            //new
            todo.setId(++counter);
            todos.add(todo);
        } else {
            deleteById(todo.getId());
            todos.add(todo);
        }

        return todo;
    }
}
