package com.example.watchapp;
import java.util.Calendar;
import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ImageButton;
import android.widget.TextView;

public class smokeDecide extends Activity {

    int ciggaretesLeft;
    int hour;
    int currentHour=Calendar.HOUR_OF_DAY;
    //You need to put the values!!!
    TextView question;
    Button yesBtn;
    Button noBtn;



    @SuppressLint("MissingInflatedId")
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setContentView(R.layout.smoke_decide);

        question=(TextView) findViewById(R.id.question);
        yesBtn=(Button) findViewById(R.id.yesBtn);
        noBtn=(Button) findViewById(R.id.noBtn);
        if(currentHour-hour>0)
        {
            question.setText("Are you sure you dont want to delay this?");
            yesBtn.setText("I think I will delay this");
            noBtn.setText("I really want to smoke");

            noBtn.setOnClickListener(new View.OnClickListener() {
                public void onClick(View v) {

                    Intent intent=new Intent(smokeDecide.this, smokingMenu.class);
                    startActivity(intent);

                }
            });

            yesBtn.setOnClickListener(new View.OnClickListener() {
                public void onClick(View v) {

                    question.setText("Do you want suggestions instead?");
                    yesBtn.setText("Sure");
                    noBtn.setText("Not really");

                }
            });
        }
        else
        {
            question.setText("Don't you believe it's to soon for another one?");
            yesBtn.setText("Abort");
            noBtn.setText("I don't care");

            noBtn.setOnClickListener(new View.OnClickListener() {
                public void onClick(View v) {

                    Intent intent=new Intent(smokeDecide.this, smokingMenu.class);
                    startActivity(intent);

                }
            });

            yesBtn.setOnClickListener(new View.OnClickListener() {
                public void onClick(View v) {

                    question.setText("Do you want suggestions instead?");
                    yesBtn.setText("Sure");
                    noBtn.setText("Not really");

                }
            });
        }
    }

}
