package com.dimitar.ranga.todos.rangatodos.web;

import com.dimitar.ranga.todos.rangatodos.entities.Todo;
import com.dimitar.ranga.todos.rangatodos.service.TodoHardCodedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TodoController {

    @Autowired
    private TodoHardCodedService todoHardCodedService;

    @GetMapping("/users/{username}/todos")
    public List<Todo> getAllTodos(@PathVariable String username) {
        return todoHardCodedService.findAll();
    }

    @DeleteMapping("/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable Long id) {
       final Todo todo = todoHardCodedService.deleteById(id);
       //@todo exception handling, throw from service etc... here just return OK
        //return new ResponseEntity<>(todo != null, HttpStatus.OK);
        return todo != null ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }

}
