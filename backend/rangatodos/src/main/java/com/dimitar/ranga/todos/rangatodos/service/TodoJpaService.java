package com.dimitar.ranga.todos.rangatodos.service;

import com.dimitar.ranga.todos.rangatodos.entities.Todo;
import com.dimitar.ranga.todos.rangatodos.repositories.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TodoJpaService {

    @Autowired
    TodoRepository todoRepository;

    public List<Todo> findAll() {
        List <Todo> list = new ArrayList<>();
        for (Todo todo : todoRepository.findAll()) {
            list.add(todo);
        }
        return list;
    }

    public void  deleteById(final Long id) {
        todoRepository.deleteById(id);
    }

    public Todo getById(final Long id) {
        return todoRepository.findById(id).orElse(null);
    }

    public Todo save(final Todo todo) {
        return todoRepository.save(todo);
    }
}
