package com.example.control;


import com.example.model.Users;
import com.example.repo.repo_users;
import com.example.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import javax.validation.Valid;

@Controller
public class LoginController {

    @Autowired
    private UserService userService;
@Autowired
    repo_users reus;
    @RequestMapping(value={"/", "/login"}, method = RequestMethod.GET)
    public ModelAndView login(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("login");
        return modelAndView;
    }


    @RequestMapping(value="/registration", method = RequestMethod.GET)
    public ModelAndView registration()
    {
        ModelAndView modelAndView = new ModelAndView();
        Users users = new Users();
        modelAndView.addObject("users", users);
        modelAndView.setViewName("registration");
        return modelAndView;
    }

    @RequestMapping(value = "/registration", method = RequestMethod.POST)
    public ModelAndView createNewUser(@Valid Users users, BindingResult bindingResult)
    {
        ModelAndView modelAndView = new ModelAndView();
        Users usersExists = userService.findUserName(users.getName());
        if (usersExists != null)
        {
            bindingResult.rejectValue("name", "error.users","There is already a users registered with the email provided");
        }
        if (bindingResult.hasErrors()) {
            modelAndView.setViewName("registration");
        }
        else
            {
           userService.saveUser(users);
            modelAndView.addObject("successMessage", "Users has been registered successfully");
            modelAndView.addObject("users", new Users());
            modelAndView.setViewName("registration");

        }
        return modelAndView;
    }

    @RequestMapping(value="/dashboard/index", method = RequestMethod.GET)
    public ModelAndView home(){
        ModelAndView modelAndView = new ModelAndView();
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        Users users = userService.findUserName(auth.getName());
        modelAndView.addObject("userName", "Hai " + users.getName());
        modelAndView.addObject("adminMessage","Content Available Only for Users with Admin Role");
        modelAndView.setViewName("dashboard/index");
        return modelAndView;
    }

}
