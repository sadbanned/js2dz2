const input = document.querySelector('.miniblock')
const button = document.querySelector('.run')
let position = 0 
let positionLeft = 0
let positionBottom = 0
let positionRight = 0
let positionTop = 0


const moveElement = () => {
    position += 10
    input.style.top = `${position}px`
    if(position <= 390) {
        setTimeout(() => {
            moveElement()
        }, 100);

    } else if (position = 390) {
        setTimeout(() => {
            let left = setInterval(() => {
                moveLeft()
            }, 100);
            setTimeout(() => {
                clearInterval(left)
            }, 4000);
        }, 100);
    }

    const moveLeft = () => {
        positionLeft += 10
        input.style.left = `${positionLeft}px`
    }
}
moveElement()

