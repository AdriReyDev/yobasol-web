package com.yobasol.api;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record ContactRequest(
        @NotBlank String name,
        @NotBlank @Email String email,
        String phone,
        @NotBlank String service,
        @NotBlank @Size(min=10) String message

) {
}



