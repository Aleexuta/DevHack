package com.example.watchapp;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ImageButton;
import android.widget.ImageView;
import android.widget.TextView;



import com.example.watchapp.databinding.ActivityMainBinding;

import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;
import com.example.watchapp.User;

public class menu extends Activity {

    private ImageButton badhabitsBtn;
    private ImageButton moodBtn;
    private ImageButton suggestionsBtn;
    private ActivityMainBinding binding;

    /*retrofit2.Retrofit retrofitApi=new Retrofit.Builder()
            .addConverterFactory(GsonConverterFactory.create())
            .baseUrl("")
            .build();

    final UserController userController=retrofitApi.create(UserController.class);
    retrofit2.Call<User> call=userController.getId();
    */

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.menu);

        badhabitsBtn= (ImageButton) findViewById(R.id.badhabitsBtn);
        badhabitsBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent=new Intent(menu.this, badHabits.class);
                startActivity(intent);
            }
        });

        moodBtn= (ImageButton) findViewById(R.id.moodBtn);
        moodBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent=new Intent(menu.this, mood.class);
                startActivity(intent);
            }
        });

        suggestionsBtn= (ImageButton) findViewById(R.id.suggestionsBtn);
        suggestionsBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent=new Intent(menu.this, suggestions.class);
                startActivity(intent);
            }
        });





    }
}