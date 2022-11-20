package com.example.watchapp;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ImageButton;
import android.widget.TextView;

public class smokingMenu extends Activity {

    TextView ciggaretesText;
    TextView timeText;
    int ciggaretesLeft;
    int hour;
    Button smokeBtn;

    @SuppressLint("MissingInflatedId")
    @Override
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setContentView(R.layout.smoking_menu);
        ciggaretesText=(TextView)findViewById(R.id.ciggaretesText);
        timeText=(TextView)findViewById(R.id.timeText);

        //Get the value of ciggaretesLeft and last time you smoked;

        ciggaretesText.setText(new String().valueOf((ciggaretesLeft)));
        timeText.setText(new String().valueOf((hour)));

        smokeBtn= (Button) findViewById(R.id.smokeBtn);
        smokeBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent=new Intent(smokingMenu.this, smokeDecide.class);
                startActivity(intent);
            }
        });
        //Modify the values after function if the answer was affirmative
        // ciggaretesLeft=? hour=?
        ciggaretesText.setText(new String().valueOf((ciggaretesLeft)));
        timeText.setText(new String().valueOf((hour)));



    }

}
