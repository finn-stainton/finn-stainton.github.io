# FreeRTOS 



## with Raspberry Pi Pico

---

### Setup

Open terminal and navigate to a director you want to create the project under, then run the following:

``` console
# Make Project folder
mkdir freertos-pico-project
cd freertos-pico-project
# Make folders
mkdir ProjectFiles FreeRTOS
# Download pico sdk cmake (need wget installed)
wget https://raw.githubusercontent.com/raspberrypi/pico-sdk/master/pico_sdk_init.cmake
# Change to FreeRTOS folder and clone FreeRTOS-Kernel
cd FreeRTOS
git clone https://github.com/FreeRTOS/FreeRTOS-Kernel
cd ../
# Create CMakeList file with content
echo cmake_minimum_required(VERSION 3.12)
include(pico_sdk_import.cmake)
project(Pico-FreeRTOS)
pico_sdk_init()
add_subdirectory(freertos)
add_subdirectory(ProjectFiles) > CMakeLists.txt
# Create CMakeList file in ProjectFiles folder with content
cd ProjectFiles
echo add_executable(blink
        main.c
)
target_link_libraries(blink pico_stdlib freertos)
pico_add_extra_outputs(blink) > CMakeLists.txt
cd ../
```

---

## Resources

[FreeRTOS API Reference](https://freertos.org/a00106.html)

## Further Reading

[RTOS](../../Second-Brain/Computer-Science/Operating-Systems/Real-time-Operating-System)

[Raspberry Pi Pico](https://www.raspberrypi.com/documentation/microcontrollers/raspberry-pi-pico.html)

!!! cite
    1. [Learn Embedded Systems (2022)](https://learnembeddedsystems.co.uk/freertos-on-rp2040-boards-pi-pico-etc-using-vscode)