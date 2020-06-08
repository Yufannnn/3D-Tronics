let turnleft = 0
let backward = 0
let turnright = 0
let forward = 0
let backright = 0
let front = 0
let backleft = 0
let motorpower = 0
radio.onReceivedValue(function (name, value) {
    basic.clearScreen()
    if (name.compare("person") == 0) {
        radio.sendValue("backright", radio.receivedPacket(RadioPacketProperty.SignalStrength))
        backright = radio.receivedPacket(RadioPacketProperty.SignalStrength)
        serial.writeLine("Back right signal strength: " + radio.receivedPacket(RadioPacketProperty.SignalStrength))
    } else if (name.compare("backleft") == 0) {
        backleft = value
        serial.writeLine("Back left signal strength: " + backleft)
    } else {
        if (name.compare("front") == 0) {
            front = value
            serial.writeLine("Front signal strength: " + front)
        }
    }
    if (front < (backright + backleft) / 2 - 2) {
        serial.writeLine("Person is behind")
        forward = 0
        backward = 1
    } else {
        if (front >= (backright + backleft) / 2 - 2 && front <= (backright + backleft) / 2 + 2) {
            serial.writeLine("Person is around")
            forward = 0
            backward = 0
        } else {
            serial.writeLine("Person is ahead")
            forward = 1
            backward = 0
        }
    }
    if (backleft < backright - 2) {
        serial.writeLine("Person is to the right")
        turnleft = 0
        turnright = 1
    } else {
        if (backleft >= backright - 2 && backleft <= backright + 2) {
            serial.writeLine("Person is centered")
            turnleft = 0
            turnright = 0
        } else {
            serial.writeLine("Person is to the left")
            turnleft = 1
            turnright = 0
        }
    }
    if (forward == 1 && turnleft == 1) {
        basic.showArrow(ArrowNames.NorthWest)
    } else {
        if (forward == 1 && turnright == 1) {
            basic.showArrow(ArrowNames.NorthEast)
        } else {
            if (backward == 1 && turnleft == 1) {
                basic.showArrow(ArrowNames.SouthWest)
            } else {
                if (backward == 1 && turnright == 1) {
                    basic.showArrow(ArrowNames.SouthEast)
                } else {
                    if (forward == 1) {
                        basic.showArrow(ArrowNames.North)
                    } else {
                        basic.showArrow(ArrowNames.South)
                    }
                }
            }
        }
    }
})
radio.setGroup(53)
motorpower = 100
basic.forever(function () {
    if (forward == 1 || turnright == 1) {
        pins.analogWritePin(AnalogPin.P13, motorpower)
        pins.analogWritePin(AnalogPin.P14, 0)
    } else {
        if (backward == 1 || turnleft == 1) {
            pins.analogWritePin(AnalogPin.P13, 0)
            pins.analogWritePin(AnalogPin.P14, motorpower)
        } else {
            pins.analogWritePin(AnalogPin.P13, motorpower)
            pins.analogWritePin(AnalogPin.P14, motorpower)
        }
    }
    if (forward == 1 || turnleft == 1) {
        pins.analogWritePin(AnalogPin.P15, motorpower)
        pins.analogWritePin(AnalogPin.P16, 0)
    } else {
        if (backward == 1 || turnright == 1) {
            pins.analogWritePin(AnalogPin.P15, 0)
            pins.analogWritePin(AnalogPin.P16, motorpower)
        } else {
            pins.analogWritePin(AnalogPin.P15, motorpower)
            pins.analogWritePin(AnalogPin.P16, motorpower)
        }
    }
})
