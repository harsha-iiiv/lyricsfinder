const req = require('request');

var url = 'https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?format=json&callback=callback&q_artist=kaalabhirava&q_track=peniviti&apikey=8421c702ccdffd2c5ec3ecebfce35223';

req(url,(err,res,body)=>{

     var lb = JSON.parse(body);
     console.log(lb.message.body.lyrics.lyrics_body);
     var lbs = JSON.stringify(lb);
     console.log(lbs);
});