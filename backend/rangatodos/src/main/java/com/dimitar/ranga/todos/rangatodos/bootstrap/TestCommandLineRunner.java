package com.dimitar.ranga.todos.rangatodos.bootstrap;

import com.dimitar.ranga.todos.rangatodos.entities.Todo;
import com.dimitar.ranga.todos.rangatodos.service.TodoJpaService;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
@Log
public class TestCommandLineRunner implements CommandLineRunner {

    @Autowired
    TodoJpaService todoJpaService;

    @Override
    public void run(String... args) throws Exception {
        final Todo tempTodo = new Todo( );
        tempTodo.setUsername("JURE");
        tempTodo.setDescription("Popravi brod");
        tempTodo.setIsDone(false);
        tempTodo.setTargetDate(new Date());

        log.info("Temp todo: " + tempTodo);
        todoJpaService.save(tempTodo);
        log.info("SAVED remp todo: " + tempTodo);

    }
}
