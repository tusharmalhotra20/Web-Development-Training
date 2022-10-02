import React from "react";

function Text() {
    let greetings;
    const currentTime = new Date().getHours();
    const customStyle={
        color: ""
    };

    if(currentTime >=0 && currentTime < 12)
    {
        greetings = "Good Morning";
        customStyle.color = "red";
    }
    else if(currentTime >=12 && currentTime < 18)
    {
        greetings = "Good Afternoon";
        customStyle.color = "green";
    }
    else if(currentTime >=18 && currentTime < 23)
    {
        greetings = "Good Evening";
        customStyle.color = "blue";
    }

  return (
    <div>
      <h1 className="heading" style = {customStyle}>{greetings}</h1>
    </div>
  );
}

export default Text;
