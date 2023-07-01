
const  getDayHourMinute = (ETA) => {
    var cd = 24 * 60 * 60 * 1000,
        ch = 60 * 60 * 1000,
        d = Math.floor(ETA / cd),
        h = Math.floor( (ETA - d * cd) / ch),
        m = Math.round( (ETA - d * cd - h * ch) / 60000),
        pad = function(n){ return n < 10 ? '0' + n : n; };
  if( m === 60 ){
    h++;
    m = 0;
  }
  if( h === 24 ){
    d++;
    h = 0;
  }
  
 " minutes"
  return (d + (d === 1 ? (" day ") : (" days ")) + h + (h === 1 ? ( " hour and ") : ( " hours and ")) +  m + (m === 1 ? ( " minute") : ( " minutes")))
}

export default getDayHourMinute