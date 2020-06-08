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
        radio.sendValue("front", radio.receivedPacket(RadioPacketProperty.SignalStrength) + 12)
        serial.writeLine("Front signal strength: " + (radio.receivedPacket(RadioPacketProperty.SignalStrength) + 12))
        basic.pause(50)
        basic.clearScreen()
        basic.pause(200)
    }
})
radio.setGroup(53)
