package com.chat.demo.controller;

import com.chat.demo.domain.ChatMessage;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

/**
 * Created by burakdagli on 27.06.2017.
 */

@Controller
public class ChatMessageController {

    @MessageMapping("/hello")
    @SendTo("/topic/newMessage")
    public ChatMessage save(ChatMessage chatMessage) {
        return chatMessage;
    }


}
