package com.dimitar.ranga.todos.rangatodos.repositories;

import com.dimitar.ranga.todos.rangatodos.entities.Todo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TodoRepository extends CrudRepository<Todo, Long> {
}
