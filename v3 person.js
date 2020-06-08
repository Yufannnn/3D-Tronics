radio.setGroup(53)
radio.setTransmitPower(1)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            . . # . .
            # . # . #
            # . # . #
            # . . . #
            # # # # #
            `)
        basic.pause(200)
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        basic.pause(200)
        basic.clearScreen()
    } else {
        if (input.buttonIsPressed(Button.B)) {
            basic.showLeds(`
                . . # . .
                # . # . #
                # . # . #
                # . . . #
                # # # # #
                `)
            basic.pause(200)
            basic.showLeds(`
                . . # . .
                . . # . .
                . . # . .
                . . # . .
                . . # . .
                `)
            basic.pause(200)
            basic.clearScreen()
            while (!(input.buttonIsPressed(Button.A))) {
                radio.sendValue("person", 0)
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . # . .
                    . . . . .
                    . . . . .
                    `)
                basic.pause(50)
                basic.clearScreen()
                basic.pause(400)
            }
        }
    }
})
