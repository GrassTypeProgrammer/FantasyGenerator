(()=>{"use strict";function t(t,e){return Math.random()*(e-t)+t}function e(t,e){const n=Math.ceil(t),a=Math.floor(e);return Math.floor(Math.random()*(a-n)+n)}function n(){var n,a,o,i,r;n=["name","attitudeToOutsiders","mainIndustry"],(a=[]).name="Gravehold",a.attitudeToOutsiders="Friendly",a.mainIndustry="Mining",function(){r={year:0,population:e(30,300),crimeRate:t(.1,5).toFixed(2)},o=["year","population","crimeRate"],(i=[]).push(r);for(let e=1;e<10;e++){const n=1+t(-.2,.4);i.push({year:5*e,population:Math.trunc(i[e-1].population*n),crimeRate:t(.1,5).toFixed(2)})}}(),d={oneOffDataPoints:n,oneOffData:a,censusDataPoints:o,initialCensusData:r,censusData:i},c=document.getElementById("table"),s(),document.getElementById("cityName").innerHTML=d.oneOffData.name}window.addEventListener("load",n),document.getElementById("button").addEventListener("click",n);const a=document.getElementById("sideBarButtons"),o=document.createElement("button");o.innerText="One Off Data",o.addEventListener("click",s),o.classList.add("sideBarButton"),a.appendChild(o);const i=document.createElement("button");var d,c;function s(){r();const t=document.createElement("thead"),e=document.createElement("th");e.innerText="One Off Data Points",e.setAttribute("colspan","100%"),t.appendChild(e),c.appendChild(t);for(let t=0;t<d.censusDataPoints.length;t++){const e=d.oneOffDataPoints[t],n=document.createElement("tr"),a=document.createElement("th");a.innerText=e;const o=document.createElement("td");o.innerText=d.oneOffData[e],o.setAttribute("colspan","50%"),n.appendChild(a),n.appendChild(o),c.appendChild(n)}}function r(){for(;null!=c.firstChild;)c.removeChild(c.firstChild)}i.innerText="Population",i.addEventListener("click",(function(){r();const t=document.createElement("thead"),e=document.createElement("th");e.innerText="census Data Points",e.setAttribute("colspan","100%"),t.appendChild(e),c.appendChild(t);for(let t=0;t<d.censusDataPoints.length;t++){const e=d.censusDataPoints[t],n=document.createElement("tr"),a=document.createElement(0==t?"th":"td");a.innerText=e,n.appendChild(a);for(let a=0;a<d.censusData.length;a++){const o=document.createElement(0==t?"th":"td");o.innerText=d.censusData[a][e],n.appendChild(o)}c.appendChild(n)}})),i.classList.add("sideBarButton"),a.appendChild(i)})();