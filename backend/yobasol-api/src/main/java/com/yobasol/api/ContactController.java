package com.yobasol.api;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import jakarta.validation.Valid;

@RestController
public class ContactController {

    @PostMapping("/api/contact")
    public String contact(@Valid @RequestBody ContactRequest request){
        return "Solicitud recibida de " + request.name();
    }
}
