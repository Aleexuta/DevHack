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

public class MainActivity extends Activity {

    private ImageButton badhabitsBtn;
    private ImageButton moodBtn;
    private ImageButton suggestionsBtn;
    private ActivityMainBinding binding;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
            super.onCreate(savedInstanceState);

            binding = ActivityMainBinding.inflate(getLayoutInflater());
            setContentView(binding.getRoot());

            badhabitsBtn= (ImageButton) findViewById(R.id.badhabitsBtn);
        badhabitsBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent=new Intent(MainActivity.this, badHabits.class);
                startActivity(intent);
            }
        });




    }
}