input.onButtonPressed(Button.A, function () {
    serial.writeLine("")
})
game.startCountdown(10000)
basic.showString("Hello!")
basic.forever(function () {
    basic.showArrow(ArrowNames.North)
    serial.setWriteLinePadding(0)
    pins.setAudioPinEnabled(false)
})
