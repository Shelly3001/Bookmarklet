Bookmarklets = [' 1 Kickass',' 2 Katamari',' 3 Snake',' 4 Memory Ball',' 5 Tic Tac Toe',' 6 Refresh',' 7 Editor',' 8 3D',' 9 Color Changer',' 10 Auto Read',' 11 Rotate Screen',' 12 Rotate Images',' 13 Justin Bieber',' 14 No Typing',' 15 Flying Images',' 16 Random Orientations',' 17 Piano',' 18 Flashlight']

header(‘Content-Type: application/javascript‘);

Select = prompt("What is the number of the code you would like?  "+Bookmarklets)

if Select = 1 then:
  var%20KICKASSVERSION='2.0';var%20s%20=%20document.createElement('script');s.type='text/javascript';document.body.appendChild(s);s.src='//hi.kickassapp.com/kickass.js';void(0);
if Select = 2 then:
  var i,s,ss=['http://kathack.com/js/kh.js','http://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js'];for(i=0;i!=ss.length;i++){s=document.createElement('script');s.src=ss[i];document.body.appendChild(s);}void(0);
if Select = 3 then:
  Q=64;m=b=Q*Q;a=[P=l=u=d=p=S=w=0];u=89;f=(h=j=t=(b+Q)/2)-1;(B=(D=document).body).appendChild(x=D.createElement("p"));(X=x.style).position="fixed";X.left=X.top=0;X.background="#FFF%22;x.innerHTML=%22%3Cp%3E%3C/p%3E%3Ccanvas%3E%22;v=(s=x.childNodes)[0];(s=s[1]).width=s.height=5*Q;c=s.getContext(%222d%22);%20onkeydown=onblur=F=function(e,g){g?a[f]?(w+=m,f=Math.random(l+=8)*(R=Q-2)*R|(u=0),F(f+=Q+1+2*(f/R|0),g)):F(f):0%3Ee?(l?--l:(y=t,t=a[t]-2,F(y)),S+=(w*=0.8)/4,m=999/(u++%20+10),a[h+=[-1,-Q,1,Q][d=p]]?B.removeChild(x,alert(%22Game%20Over%22)):(F(h),F(e,j=h),v.innerHTML=P?(setTimeout(F,50,e,0),S|0):%22Press%20P%22)):-e?(y=(a[e]=e%3CQ|e%3E=Q*Q-Q|!(e%Q)|e%Q==Q-1|2*(e==h))+(e==f),e==h&&(a[j]=2+h),c.fillStyle=%22hsl(%22+99*!a[e]+%22,%22+2*m+%22%,%22+50*y+%22%)%22,c.fillRect(e%Q*5,5*(e/Q|0),5,5)):isNaN(y=e.keyCode-37)|43==y?(P=y&&!P)&&F(-1):%20p=!P|y&-4|!(y^2^d)?p:y;return!1};for(;--b;F(b));void%20F(-1);
if Select = 4 then:
  
if Select = 5 then:
  (function(){var js=document.body.appendChild(document.createElement("script"));js.onerror=function(){alert("Sorry, the script could not be loaded.")};js.src="https://rawgit.com/Krazete/bookmarklets/master/tic.js"})();
if Select = 6 then:
   location.reload()
if Select = 7 then:
  document.body.contentEditable = 'true'; document.designMode='on'; void 0
if Select = 8 then:
  (function(){var js=document.body.appendChild(document.createElement("script"));js.onerror=function(){alert("Sorry, the script could not be loaded.")};js.src="https://rawgit.com/Krazete/bookmarklets/master/tri.js"})();
if Select = 9 then:
  (function(){var el=document.createElement('script');el.type='text/javascript';el.src='https://rawgit.com/ApoorvSaxena/colordrop/master/dist/production.min.js';el.onerror=function(){alert("Looks like the Content Security Policy directive is blocking the use of bookmarklets\n\nYou can copy and paste the content of:\n\n\"https://rawgit.com/ApoorvSaxena/colordrop/master/dist/production.min.js\"\n\ninto your console instead\n\n(link is in console already)");console.log("https://rawgit.com/ApoorvSaxena/colordrop/master/dist/production.min.js");};document.getElementsByTagName('body')[0].appendChild(el);})();
if Select = 10 then:
  (function(){function loadScript()%7Bif(console %26%26 typeof(console.log)===%27function%27)%7Bconsole.log(%27SpritzletInit v1.1.12 - Loading https://sdk.spritzinc.com/bookmarklet/latest/js/SpritzletOuter.js%27);}var script=document.createElement(%27script%27);script.setAttribute(%27type%27,%27text/javascript%27);script.setAttribute(%27charset%27,%27UTF-8%27);script.setAttribute(%27async%27,%27true%27);script.setAttribute(%27src%27,%27https://sdk.spritzinc.com/bookmarklet/latest/js/SpritzletOuter.js%3F%27+(new Date().getTime()).toString().substring(0,7));document.documentElement.appendChild(script);setTimeout(function()%7Bif(Spritzlet.timedOut===true)%7Balert("Sorry, it looks like this site doesn%27t allow bookmarklets to be run or Spritz servers aren%27t responding.");}},3000);script.onload=function()%7BSpritzlet.timedOut=false;var rs=script.readyState;if(!rs || rs===%27loaded%27 || rs===%27complete%27)%7Bscript.onload=script.onreadystatechange=null;Spritzlet.init();}};}if(window.Spritzlet)%7BSpritzlet.activate();}else%7Bwindow.Spritzlet=window.Spritzlet ||%7B};window.Spritzlet=%7Borigin:window.location.protocol+%27//%27+window.location.host,loaderVersion:1.1,timedOut:true};loadScript();}})();
if Select = 11 then:
   ['', '-ms-', '-webkit-', '-o-', '-moz-'].map(function(prefix){document.body.style[prefix + 'transform'] = 'rotate(180deg)';});
if Select = 12 then:
   ['', '-ms-', '-webkit-', '-o-', '-moz-'].map(function(prefix){Array.prototype.slice.call(document.querySelectorAll('img')).map(function(el){el.style[prefix + 'transform'] = 'rotate(180deg)';});});
if Select = 13 then:
   Array.prototype.slice.call(document.querySelectorAll('img')).map(function(el){el.src = '//codebox.net/assets/images/monkeyshine/bieber.jpg';});
if Select = 14 then:
   (function(){var TEXT = 'YOU CANT TYPE LOL   ';Array.prototype.slice.call(document.querySelectorAll('input[type=text],textarea')).map(function(el){el.onkeypress=function(evt){var charCode = typeof evt.which == "number" ? evt.which : evt.keyCode;if (charCode && charCode > 31) {var start = this.selectionStart, end = this.selectionEnd;this.value = this.value.slice(0, start) + TEXT[start % TEXT.length] + this.value.slice(end);this.selectionStart = this.selectionEnd = start + 1;}return false;}});}());
if Select = 15 then:
  R=0;x1=.1;y1=.05;x2=.25;y2=.24;x3=1.6;y3=.24;x4=300;y4=200;x5=300;y5=200;DI=document.getElementsByTagName("img");DIL=DI.length;function A(){for(i=0;i-DIL;i++){DIS=DI[i].style;DIS.position='fixed';DIS.left=(Math.sin(R*x1+i*x2+x3)*x4+x5)+"px";DIS.top=(Math.cos(R*y1+i*y2+y3)*y4+y5)+"px"}R++}setInterval('A()',3000);void(0);
if Select = 16 then:
  (function(){['', '-ms-', '-webkit-', '-o-', '-moz-'].map(function(prefix){Array.prototype.slice.call(document.querySelectorAll('div,p,span,img,a,body')).map(function(el){el.style[prefix + 'transform'] = 'rotate(' + (Math.floor(Math.random() * 3) - 1) + 'deg)';});});}())
if Select = 17 then:
  (function(){var js=document.body.appendChild(document.createElement("script"));js.onerror=function(){alert("Sorry, the script could not be loaded.")};js.src="https://rawgit.com/Krazete/bookmarklets/master/piano.js"})();
if Select = 18 then:
  (function(){var js=document.body.appendChild(document.createElement("script"));js.onerror=function(){alert("Sorry, the script could not be loaded.")};js.src="https://rawgit.com/Krazete/bookmarklets/master/mouselight.js"})();
              
