package com.dimitar.ranga.todos.rangatodos.config;

import com.dimitar.ranga.todos.rangatodos.config.AuthenticationBean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class BasicAuthenticationController {

    @GetMapping("/basicauth")
    public AuthenticationBean basicAuth() {
        return new AuthenticationBean("Authenticated");
    }
}
