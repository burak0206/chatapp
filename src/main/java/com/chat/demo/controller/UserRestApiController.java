package com.chat.demo.controller;

import com.chat.demo.domain.User;
import com.chat.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by burakdagli on 29.06.2017.
 */
@RestController
public class UserRestApiController {
    @Autowired
    public UserService userService;

    @RequestMapping(value = "/user",method = RequestMethod.GET)
    public User user(@RequestParam("username") String username){
        if (username == null || username.isEmpty()){
            username = "username";
        }
        return userService.findByUsername(username);
    }
}
