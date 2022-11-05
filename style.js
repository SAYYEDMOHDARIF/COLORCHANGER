let color=['#0E5E6F','#F2DEBA','#425F57','#749F82','#A8E890','#CFFF8D','#FFF5E4','#FD841F','#E14D2A','#9C2C77']
document.getElementById('btn')
btn.addEventListener('click',myfunction)
function myfunction()
{
   randomcolor=color[Math.floor(Math.random()*color.length)]; 
   document.body.style.background=randomcolor;
   document.getElementById("demo").innerHTML =color[Math.floor(Math.random()*color.length)].toUpperCase()

   
}



