package com.dimitar.ranga.todos.rangatodos;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/hello-world")
    public ResponseEntity<?> helloWorld() {
        return new ResponseEntity<String>("Hello World with Ranga ;)", HttpStatus.OK);
    }

    @GetMapping("/hello-world-bean")
    public ResponseEntity<?> helloWorldBean() {
        return new ResponseEntity<HelloBean>(new HelloBean("Hello Ranga from the Bean!"), HttpStatus.OK);
    }


    @GetMapping("/hello-world/{name}")
    public ResponseEntity<?> helloWorldBeanPath(@PathVariable final String name) {
        return new ResponseEntity<HelloBean>(new HelloBean(String.format("Hello World and hello %s!", name)), HttpStatus.OK);
    }
}
