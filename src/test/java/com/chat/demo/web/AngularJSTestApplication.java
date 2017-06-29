package com.chat.demo.web;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by burakdagli on 29.06.2017.
 */
@SpringBootApplication
@Controller
public class AngularJSTestApplication {

    @RequestMapping("/")
    String home(){
        return "forward:/test.html";
    }

    public static void main(String[] args) {
        new SpringApplicationBuilder(AngularJSTestApplication.class).properties("server.port=9999").run(args);
    }
}
