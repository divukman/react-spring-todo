package com.dimitar.ranga.todos.rangatodos.jwt.resource;

public class AuthenticationException extends RuntimeException {
    public AuthenticationException(String message, Throwable cause) {
        super(message, cause);
    }
}
