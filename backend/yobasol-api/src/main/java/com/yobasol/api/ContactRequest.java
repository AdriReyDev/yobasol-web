package com.yobasol.api;

public record ContactRequest (
        String name,
        String email,
        String phone,
        String service,
        String message

){}



