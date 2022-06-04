$('#calc').on('click', async function() {
    $('#steps').text('');
    var a = Number($('#a').val());
    var b = Number($('#b').val());
    var doloop=true;
    if(isNaN(a)){
        $('.j').text('ERREUR   Enlevez toutes les lettres de la première case svp');
        doloop=false;
    }
    if(isNaN(b)){
        $('.j').text('ERREUR   Enlevez toutes les lettres de la deuxième case svp');
        doloop=false;
    }
    if(isNaN(a)&&isNaN(b)){
        
        $('.j').text('ERREUR   Enlevez toutes les lettres des cases svp');
        doloop=false;
    }
    if(a==0){
        doloop=false;
        $('.j').text('Le pgdc de '+String(a)+' et '+String(b)+' vaut '+String(b));

    }if(b==0){
        doloop=false;
        $('.j').text('Le pgdc de '+String(a)+' et '+String(b)+' vaut '+String(a));

    }
    var temp;
    if(a<b){
        $('#steps').append('<p>Comme '+String(a)+' < '+String(b)+', on les inverse </p>');
        temp=a;
        a=b;
        b=temp;
    }
    var a1=a;
    var b1=b;
    var output = 0;
    var q = mxdy(a,b);
    var r = a-(b*q);
    if(a%b==0){ 
        doloop=false;
        
        $('.j').text('Le pgdc de '+String(a)+' et '+String(b)+' vaut '+String(b)+' car '+String(b)+' divise '+String(a)+'.');
    }
    while(doloop){
        if(a==b){
            $('.j').text('Le pgdc de '+String(a1)+' et '+String(b1)+' vaut '+String(a1) + ' parce qu`ils sont égaux, car ('+String(a1)+', '+String(a1)+')=('+String(a1)+', 0)='+String(a1));
            break;
        }
        $('#steps').append($('<p>'+String(a)+' = '+String(q)+' * '+String(b)+' + '+String(r)+'</p>')[0]);
        
        a=b;
        b=r;
        q=mxdy(a,b);
        if(a-(b*q)==0){ 
            output=r;
            
        a=b;
        b=r;
        q=mxdy(a,b);
        r=a-(b*q);
        $('#steps').append($('<p>'+String(a)+' = '+String(q)+' * '+String(b)+' + '+String(r)+'</p>')[0]);
        if(output==-1||output==1){

            $('.j').text('Les nombres '+String(a1)+' et '+String(b1)+' sont premiers entre eux ou leur pgdc est égal à 1.');
        }else{

            $('.j').text('Le pgdc de '+String(a1)+' et '+String(b1)+' vaut '+String(output));
        }
            break;
        }else{
            r=a-(b*q);
        }
    }
});



function mxdy(x,y){
    if(Math.floor(x/y)==0){ console.log(Math.floor(x/y),x,y)}
    var h = Math.floor(x/y);
    return h
}