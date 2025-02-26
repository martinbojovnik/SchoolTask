var Bit = []
var Bitp = []

var BitText = ["1", "1", "1", "1", "0", "0", "0", "1", "1", "1", "1", "0", "0", "1", "1", "1"]

var index = 0

PrewButton = document.getElementById("Prew")
NextButton = document.getElementById("Next")

ContentText = document.getElementById("ContentPrompt")

for (var i = 0; i < 4; i++){
    for (var j = 0; j < 4; j++){
        Bit.push(document.getElementById("Bit"+i+""+j))
        Bitp.push(document.getElementById("Bit"+i+""+j+"p"))
    }
}

function ChangeIndex(change){
    if ((index+change) < 0 || (index+change) > 8) {return}
    index = index + change

    SwitchStates()
}

function classSwitch(element, id){
    switch (id){
        case 0:
            element.classList.add("BitN")
            element.classList.remove("BitG")
            element.classList.remove("BitR")
            break;
        case 1:
            element.classList.remove("BitN")
            element.classList.add("BitG")
            element.classList.remove("BitR")
            break;
        case 2:
            element.classList.remove("BitN")
            element.classList.remove("BitG")
            element.classList.add("BitR")
            break; 
    }
}

function SwitchStates(){
    switch(index){
        case 0:
            for (var i = 0; i < 16; i++){
                Bitp[i].textContent = ""
                classSwitch(Bit[i], 0)
            }
            ContentText.textContent = "Zmackni dalsi pro ukazku"
            break;
        case 1:
            for (var i = 0; i < 16; i++){
                Bitp[i].textContent = BitText[i]             
                classSwitch(Bit[i], 0)
            }
            
            Bitp[0].textContent = ""
            Bitp[1].textContent = ""
            Bitp[2].textContent = ""
            Bitp[4].textContent = ""
            Bitp[8].textContent = ""

            ContentText.textContent = "Zapiseme data"

            break;
        case 2:
            for (var i = 0; i < 16; i++){
                Bitp[i].textContent = BitText[i]             
                classSwitch(Bit[i], 0)
            }
            
            classSwitch(Bit[0], 1)
            classSwitch(Bit[1], 1)
            classSwitch(Bit[2], 1)
            classSwitch(Bit[4], 1)
            classSwitch(Bit[8], 1)

            ContentText.textContent = "Pripravime Humminguv kod"
            break;
        case 3:
            for (var i = 0; i < 16; i++){
                Bitp[i].textContent = BitText[i]             
                classSwitch(Bit[i], 0)
            }

            classSwitch(Bit[13], 2)
            Bitp[13].textContent = 0

            ContentText.textContent = "Zpusobime chybu"
            break;
        case 4:
            for (var i = 0; i < 16; i++){
                Bitp[i].textContent = BitText[i]             
                classSwitch(Bit[i], 0)
            }

            classSwitch(Bit[1], 2)
            classSwitch(Bit[5], 2)
            classSwitch(Bit[9], 2)
            classSwitch(Bit[13], 2)

            classSwitch(Bit[3], 2)
            classSwitch(Bit[7], 2)
            classSwitch(Bit[11], 2)
            classSwitch(Bit[15], 2)

            Bitp[13].textContent = 0

            ContentText.textContent = "Zkontrolujeme 2 a 4 sloupec pomoci Bitu 1 0. zde dojde k chybe"
            break;
        case 5:
            for (var i = 0; i < 16; i++){
                Bitp[i].textContent = BitText[i]             
                classSwitch(Bit[i], 0)
            }    

            classSwitch(Bit[2], 1)
            classSwitch(Bit[6], 1)
            classSwitch(Bit[10], 1)
            classSwitch(Bit[14], 1)

            classSwitch(Bit[3], 1)
            classSwitch(Bit[7], 1)
            classSwitch(Bit[11], 1)
            classSwitch(Bit[15], 1)

            Bitp[13].textContent = 0

            ContentText.textContent = "Zkontrolujeme 3 a 4 sloupec pomoci Bitu 2 0. zde nedojde k chybe"
            break;
        case 6:
            for (var i = 0; i < 16; i++){
                Bitp[i].textContent = BitText[i]             
                classSwitch(Bit[i], 0)
            }  

            classSwitch(Bit[4], 2)
            classSwitch(Bit[5], 2)
            classSwitch(Bit[6], 2)
            classSwitch(Bit[7], 2)

            classSwitch(Bit[12], 2)
            classSwitch(Bit[13], 2)
            classSwitch(Bit[14], 2)
            classSwitch(Bit[15], 2)

            Bitp[13].textContent = 0

            ContentText.textContent = "Zkontrolujeme 2 a 4 radek pomoci Bitu 0 1. zde dojde k chybe"
            break;
        case 7:
            for (var i = 0; i < 16; i++){
                Bitp[i].textContent = BitText[i]             
                classSwitch(Bit[i], 0)
            }  

            classSwitch(Bit[8], 2)
            classSwitch(Bit[9], 2)
            classSwitch(Bit[10], 2)
            classSwitch(Bit[11], 2)

            classSwitch(Bit[12], 2)
            classSwitch(Bit[13], 2)
            classSwitch(Bit[14], 2)
            classSwitch(Bit[15], 2)

            Bitp[13].textContent = 0

            ContentText.textContent = "Zkontrolujeme 3 a 4 radek pomoci Bitu 0 1. zde dojde k chybe"
            break;
        case 8:
            for (var i = 0; i < 16; i++){
                Bitp[i].textContent = BitText[i]             
                classSwitch(Bit[i], 0)
            }  

            classSwitch(Bit[1], 2)
            classSwitch(Bit[5], 2)
            classSwitch(Bit[9], 2)
            classSwitch(Bit[13], 2)

            classSwitch(Bit[12], 2)
            classSwitch(Bit[13], 2)
            classSwitch(Bit[14], 2)
            classSwitch(Bit[15], 2)

            Bitp[13].textContent = 0

            ContentText.textContent = "Jsme schopni definovat chibny bit na polohu 1 4"
            break;
    }
}

SwitchStates()

PrewButton.addEventListener("click", ()=>{ChangeIndex(-1)})
NextButton.addEventListener("click", ()=>{ChangeIndex(1)})