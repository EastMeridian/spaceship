# diagram


![alt text](https://github.com/EastMeridian/spaceship/blob/master/diagram.png)

# Instruction
You are required to design a Spaceship simulator by aplying coumpound pattern design patterns in Typescript.

Spaceship have heat sensor and radar sensor.

Theses sensor can be manufactured by different compagnies.
If heat or motion are detected, a message is sent to the cockpit through a global event system.
This message can be sent in different format, so adaptibility is required.
If heat or motion are detected, spaceship shields should turn on.
Furthermore, cockpit should be able to turn-off shield, and send missiles if the threat is real.
The index.ts file should allow to simulate heat sensor and radar sensor, shields turn-off and missile launch. Please provide print console.log statement to understand what your Spaceship doing.
