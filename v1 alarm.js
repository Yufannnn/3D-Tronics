let ring = false
input.onButtonPressed(Button.A, function () {
    ring = !(ring)
})
ring = true
basic.forever(function () {
    if (sonar.ping(
    DigitalPin.P0,
    DigitalPin.P0,
    PingUnit.Centimeters
    ) > 20) {
        if (ring) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            basic.pause(100)
            basic.clearScreen()
            basic.pause(100)
        }
    }
})
