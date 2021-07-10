class RippleEffect {
    constructor(){
    this.buttonHolder = document.querySelector(".button");
    this.rippleHolder = document.querySelector(".ripple-effect");
    this.holder = document.querySelector(".holder");
    this.buttonListener();
    }
    buttonListener(){
        this.buttonHolder.addEventListener("click", (e)=>{
            e.preventDefault();
            this.rippleHolder.classList.remove("ripple");
            setTimeout(()=>{
                console.log(e);
                let postionXtoParent = e.clientX - this.rippleHolder.parentElement.getBoundingClientRect().x;
                let postionYtoParent = e.clientY - this.rippleHolder.parentElement.getBoundingClientRect().y;
                this.rippleHolder.style.top = `${postionYtoParent}px`;
                this.rippleHolder.style.left = `${postionXtoParent}px`;
                this.rippleHolder.classList.add("ripple");
            },1);

        })
    }
    
};
const rippleEffect = new RippleEffect();



















































// class Counter {
//     constructor(el,follower,sec){
//     this.followers = follower;
//     this.element = el;
//     this.seconds = sec*1000;
//     this.counter = 0;
//     this.setInt;
//     this.counts();
//     }
//     counts(){
//         this.setInt = setInterval(()=> {
//             if (this.counter < this.followers){
//                 this.counter += Math.round(this.followers/(this.seconds/100)); 
//                 if (this.counter <= this.followers){
//                     this.element.innerHTML = `${this.counter.toString()}`;
        
//                 }
//                 else {
//                     this.element.innerHTML = `${this.followers}`;
//                 } 
//             }
//             else {
//                 this.stop();
//             }
//         }, (this.seconds/100));
//     }
//     stop(){
//         clearInterval(this.setInt);
//     }
// };

// const facebook = new Counter(facebookCounter,6838, 4);
// const twitter = new Counter(twitterCounter,25012, 4);
// const instagram = new Counter(instagramCounter,34129, 4);

