class MyTime{

    constructor(hours,minutes) {
        this.hours = hours;
        this.minutes = minutes;
    }

}

const isTimeEquals = (t1, t2) => {

    if ( t1.hours == t2.hours && 
        t1.minutes == t2.minutes)
        return true;
    return false;    
}

const timeSum = (t1,t2) => {
    let h = t1.hours + t2.hours;
    let m = t1.minutes + t2.minutes;

    if( m >= 60){
        m -= 60;
        h++;
    }
    if (h >= 24)
        h -= 24;

    return new MyTime(h,m);
}

const timeSubtraction = (time1, time2) => {
    let hours = time1.hours - time2.hours;
    let minutes = time1.minutes - time2.minutes;
    hours > 24 ? hours -= 24 : {}
    
    if (minutes < 0){
        minutes = 60 + minutes;
        hours --;
    }

    return new MyTime(hours,minutes);
}

const offsetNumber= (time) => {
    var contador = 0;
    let minutes = time.minutes;
    let hours = time.hours;
    while (hours > 0){
        minutes = time.minutes -15;
        if (minutes < 0){
            minutes = 60 + minutes;
            hours --;
        }
        contador++;
    }    
    return contador;
}

MyTime.prototype.toString = function(){
    let output = "";
    this.hours < 10 ?  output += "0" :{}
    output += this.hours + `:` ;        
    this.minutes < 10 ? output += "0" :{}
    output+= this.minutes
    return output;
}

const days = {
    Lun: 1,
    Mar: 2,
    Mie: 3,
    Jue: 4,
    Vie: 5,
    Sab: 6
}

const p_day = (day) => {
    if ( day === 1 ) return "Lun";
    if ( day === 2 ) return "Mar";
    if ( day === 3 ) return "Mie";
    if ( day === 4 ) return "Jue";
    if ( day === 5 ) return "Vie";
    if ( day === 6 ) return "Sab";

    return "";
}

const p_days = (days) => {
    let output = "";

    for (const day of days) {
        day === 1 ? output += "Lun" : {}
        day === 2 ? output += "Mar" : {}
        day === 3 ? output += "Mie" : {}
        day === 4 ? output += "Jue" : {}
        day === 5 ? output += "Vie" : {}
        day === 6 ? output += "Sab" : {}
        output += ", "
    }
    /* le quitamos los últimos 2 lugares, uno corresponde 
    al del espacio en blanco y el otro al de la coma */
    return output.slice(0,output.length-2);
}