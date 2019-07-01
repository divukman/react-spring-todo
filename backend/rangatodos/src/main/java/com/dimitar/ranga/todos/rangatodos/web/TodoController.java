package com.dimitar.ranga.todos.rangatodos.web;

import com.dimitar.ranga.todos.rangatodos.entities.Todo;
import com.dimitar.ranga.todos.rangatodos.service.TodoHardCodedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TodoController {

    @Autowired
    private TodoHardCodedService todoHardCodedService;

    @GetMapping("/users/{username}/todos")
    public List<Todo> getAllTodos(@PathVariable String username) {
        return todoHardCodedService.findAll();
    }
}
