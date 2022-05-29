control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_UP, function () {
    radio.sendNumber(0)
})
// 1 运行中
// 0 暂停
radio.onReceivedNumber(function (receivedNumber) {
    cardRun = receivedNumber
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MICROBIT_BUTTON_EVT_UP, function () {
    radio.sendNumber(1)
})
let cardRun = 0
cardRun = 0
radio.setGroup(708)
basic.forever(function () {
    if (cardRun == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            # . . . #
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . . . . .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            # . . . #
            # # # # #
            # . . . #
            . . . . .
            `)
    }
})
