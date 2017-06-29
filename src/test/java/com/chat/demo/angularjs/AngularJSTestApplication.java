package com.chat.demo.angularjs;

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

    @RequestMapping("/specrunner")
    String specrunner(){
        return "forward:/SpecRunner.html";
    }

    public static void main(String[] args) {
        new SpringApplicationBuilder(AngularJSTestApplication.class).properties("server.port=9999").run(args);
    }
}
