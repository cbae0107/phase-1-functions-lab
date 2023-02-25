function distanceFromHqInBlocks(x){
    if (x<42){
        return(42-x);
    }
    else{
        return(x-42);
    }
}
function distanceFromHqInFeet(x){
   if (x<42){
        return(42-x)*264;
   } 
   else{
        return(x-42)*264;
   }
}
function distanceTravelledInFeet(x,y){
    if (y>x){
        return((y-x)*264);
   } 
   else{
        return((x-y)*264);
   }
}
function calculatesFarePrice(x, y){
    let distance = distanceTravelledInFeet(x,y)
    if (distance <= 400){
        return 0;
    }
    if (distance >= 400 && distance <= 2000){
        return (distance-400)*.02;
    }
    else if (distance >= 2000 && distance <= 2500){
        return 25;
    }
    else if (distance > 2500){
        return "cannot travel that far";
    }
}