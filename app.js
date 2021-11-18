gsap.registerPlugin(ScrollTrigger)

const gsapArray = gsap.utils.toArray(".letter")

console.log(gsapArray)

gsapArray.forEach((letter, index) => {
    letter.addEventListener('mousemove', (event)=>{
        const { offsetX, offsetY, target } = event
        const { clientWidth, clientHeight } = target

        /* CREATING SOME VARIABLES FOR SHIFTING */

        const xPos = (offsetX / clientWidth) - 0.5
        const yPos = (offsetY / clientHeight) - 0.5

        gsap.to(gsapArray[index], {duration: 1,
            x: xPos * 100 + (index + 1)*5,
            y: yPos * 100 + (index + 1)*5})

        console.log(offsetX, offsetY, clientWidth, clientHeight)

    })   
});

console.log("ok")

/* backup */
/* gsap.to(gsapArray[index], {duration: 1,
        x: xPos * 50 + (index + 1)*5,
        y: yPos * 50 + (index + 1)*5})  */