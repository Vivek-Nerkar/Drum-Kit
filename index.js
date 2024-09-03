let numOfBtn = document.querySelectorAll(".drum").length;



//Done by SWITCH STATEMENT
//detecting button pressed
for (let i = 0; i < numOfBtn; i++) {
     document.querySelectorAll(".drum")[i].addEventListener("click", function () {

           let buttonInnerHtml = this.innerHTML; // Or use another property that identifies the button
           makeSound(buttonInnerHtml);
           
           });
        }
        //detecting keypress
        document.addEventListener("keypress", function(event){
          makeSound(event.key);
        });
        
        function makeSound(key){
          switch (key) {
            case 'w': // Assuming the button has the letter 'w' on it
                let tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            case 'a':
                let tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            case 's':
                let tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
            case 'd':
                let tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
            case 'j':
                let snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
            case 'k':
                let crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;
            case 'l':
                let kickBass = new Audio("sounds/kick-bass.mp3");
                kickBass.play();
                break;
            default:
                console.log(buttonInnerHtml);
        }
        }
        
        //Done by IF-ELSE Statement
        // for(let i = 0; i<numOfBtn; i++){
        //    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        //     if(i === 0){
        //       let audio = new Audio("sounds/tom-1.mp3");
        //       audio.play();
        //     }else if(i === 1){
        //       let audio1 = new Audio("sounds/tom-2.mp3");
        //       audio1.play();
        //     }else if(i === 2){
        //       let audio2 = new Audio("sounds/tom-3.mp3");
        //       audio2.play();
        //     }else if(i === 3){
        //       let audio3 = new Audio("sounds/tom-4.mp3");
        //       audio3.play();
        //     }else if(i === 4){
        //       let audio4 = new Audio("sounds/snare.mp3");
        //       audio4.play();
        //     }else if(i === 5){
        //       let audio5 = new Audio("sounds/crash.mp3");
        //       audio5.play();
        //     }else if(i === 6){
        //       let audio6 = new Audio("sounds/kick-bass.mp3");
        //       audio6.play();
        //     }
        //    });
        // }
        // const soundMap = {
//     0: "sounds/tom-1.mp3",
//     1: "sounds/tom-2.mp3",
//     2: "sounds/tom-3.mp3",
//     3: "sounds/tom-4.mp3",
//     4: "sounds/snare.mp3",
//     5: "sounds/kick-bass.mp3",
//     6: "sounds/crash.mp3",
    
// };

// for (let i = 0; i < numOfBtn; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//       console.log(this.style.color ="white"); 
//       let audioFile = soundMap[i];
//         if (audioFile) {
//             let audio = new Audio(audioFile);
//             audio.play();
//         } else {
//             console.log("No sound available for this button.");
//         }
//     });
// }