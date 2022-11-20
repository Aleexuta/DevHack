package com.example.watchapp;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ImageButton;
import android.widget.TextView;


public class badHabits extends Activity {

    private ImageButton smokingBtn;
    private ImageButton coffeBtn;
    private ImageButton junkfoodBtn;
    private ImageButton alcoolBtn;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.bad_habits);
        smokingBtn= (ImageButton) findViewById(R.id.smokingBtn);
        smokingBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent=new Intent(badHabits.this, smokingMenu.class);
                startActivity(intent);
            }
        });


    }
}