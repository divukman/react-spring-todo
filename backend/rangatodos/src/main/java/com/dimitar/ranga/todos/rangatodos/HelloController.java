package com.dimitar.ranga.todos.rangatodos;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/hello-world")
    public ResponseEntity<?> helloWorld() {
        return new ResponseEntity<String>("Hello World with Ranga ;)", HttpStatus.OK);
    }
}
