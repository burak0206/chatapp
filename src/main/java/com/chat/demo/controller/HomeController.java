package com.chat.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by burakdagli on 27.06.2017.
 */
@Controller
public class HomeController {

    @RequestMapping("/")
    public String login(){ return "login";}

    @RequestMapping("/login")
    public String loginPage(){ return "login";}

    @RequestMapping("/home")
    public String home() {
        return "home";
    }

}
