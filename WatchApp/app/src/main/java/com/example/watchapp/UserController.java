package com.example.watchapp;

import com.example.watchapp.User;
import retrofit2.Call;
import retrofit2.http.GET;

public interface UserController {

    @GET("/")
    Call<User> getId();
}
