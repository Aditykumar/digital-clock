function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session= hh >= 12 ? 'PM' : 'AM';
  
    if(hh === 0){
        hh = 12;
      
    }
    if(hh > 12){
        hh = hh - 12;
        
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let timeH = hh ;
     let timeM =  mm ;
     let timeS = ss;
     let timeA =  session;
  
    document.getElementById("clockH").innerText = timeH; 
    document.getElementById("clockM").innerText = timeM; 
    document.getElementById("clockS").innerText = timeS; 
    document.getElementById("clockA").innerText = timeA; 
    let t = setTimeout(function(){ currentTime() }, 1000);




}   
  
  currentTime();



  function dynamicTimeSet() {
    let newDate = new Date();
    let hour = newDate.getHours();
    // let minute = newDate.getMinutes();

    const value1 = document.getElementById("wakeUpTime").value;
    const value2 = document.getElementById("lunchTime").value;
    const value3 = document.getElementById("napTime").value;

    const dropDown1 = document.getElementById("wakeUpTime");
    const dropDown2 = document.getElementById("lunchTime");
    const dropDown3 = document.getElementById("napTime");
    const value11 = dropDown1.options[dropDown1.selectedIndex].text;
    const value22 = dropDown2.options[dropDown2.selectedIndex].text;
    const value33 = dropDown3.options[dropDown3.selectedIndex].text;

    const img=document.getElementById("dynamic-text")

    

    const image = document.getElementById("myImageId");
    const massages=document.getElementById("dynamicMsg");


        if (value1 != hour && value2 != hour && value3 != hour) {
        image.setAttribute("src", "image/d.jpg");
       
        }
        if (value1 >= hour && value1 < hour + 1) { 
            image.setAttribute("src", "./image/wake1.jpg");
            massages.innerText="Wake time"+" "+value11;
            img.innerText="Wake up Now"
        }
        if (value2 >= hour && value2 < hour + 1) { 
             image.setAttribute("src", "./image/lunch.jpg");
             massages.innerText="Lunch time"+" "+value22;
             img.innerText="Time for Lunch"
        }
        if (value3 >= hour && value3 < hour + 1) { 
             image.setAttribute("src", "./image/gn.jpg");
             massages.innerText="Sleeping time"+ " "+value33;
             img.innerText="Good Night"

        }

  }
  dynamicTimeSet()