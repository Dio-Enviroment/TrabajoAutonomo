let buts=[document.getElementById("hom"),
his=document.getElementById("his"),
gas=document.getElementById("gas"),
tur=document.getElementById("tur"),
asi=document.getElementById("asi")];

let from=0;
to=0;

for (const key in buts) {
    const but = buts[key];
    but.addEventListener("click",(e)=>{
        from=to;
        //asi.classList.remove("animation-run");
        switch (e.target.value) {
            case "Home":
                to=0;
                break;

            case "Historia":
                to=-25;
                break;
            
            case "Gastronomia":
                to=-50;
                break;
            
            case "Turismo":
                to=-75;
                break;
        }
        console.log(`from: ${from} to: ${to}`);
        document.documentElement.style.setProperty('--start-animation', `${from}%`);
        document.documentElement.style.setProperty('--end-animation', `${to}%`);
        asi.style.animation = 'none';
        asi.offsetHeight; 
        asi.style.animation = null; 
    });
}