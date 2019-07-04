package com.dimitar.ranga.todos.rangatodos.web;

import com.dimitar.ranga.todos.rangatodos.entities.Todo;
import com.dimitar.ranga.todos.rangatodos.service.TodoHardCodedService;
import com.dimitar.ranga.todos.rangatodos.service.TodoJpaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TodoJpaController {

    @Autowired
    private TodoJpaService todoJpaService;

    @GetMapping("/jpa/users/{username}/todos")
    public List<Todo> getAllTodos(@PathVariable String username) {
        return todoJpaService.findAll();
    }

    @DeleteMapping("/jpa/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable Long id) {
       todoJpaService.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/jpa/users/{username}/todos/{id}")
    public ResponseEntity<?> getTodo(@PathVariable final String username, @PathVariable final Long id) {
        final Todo todo = todoJpaService.getById(id);

        return todo != null ? new ResponseEntity<>(todo, HttpStatus.OK) : ResponseEntity.notFound().build();
    }

    @PutMapping("/jpa/users/{username}/todos/{id}")
    public ResponseEntity<?> updateTodo(@PathVariable final String username,@PathVariable final Long id, @RequestBody final Todo todo) {
        todo.setUsername(username);
        final Todo updatedTodo = todoJpaService.save(todo);

        return new ResponseEntity<>(updatedTodo, HttpStatus.OK);
    }

    @PostMapping("/jpa/users/{username}/todos")
    public ResponseEntity<?> createTodo(@PathVariable final String username, @RequestBody final Todo todo) {
        todo.setUsername(username);

        final Todo createdTodo = todoJpaService.save(todo);

        final URI resourceURI = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdTodo.getId()).toUri();

        //return new ResponseEntity<>(resourceURL, HttpStatus.OK);
        return ResponseEntity.created(resourceURI).build();
    }

}
