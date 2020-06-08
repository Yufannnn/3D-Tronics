radio.onReceivedValue(function (name, value) {
    basic.pause(100)
    if (name.compare("person") == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        radio.sendValue("backleft", radio.receivedPacket(RadioPacketProperty.SignalStrength))
        serial.writeLine("Back left signal strength: " + radio.receivedPacket(RadioPacketProperty.SignalStrength))
        basic.pause(50)
        basic.clearScreen()
        basic.pause(200)
    }
})
radio.setGroup(53)
