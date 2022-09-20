console.log('Object Gameboy')
const Gameboy = {
    GameboyState: true, //GameBoy ON
    ScreanState: true,
    SoundState: false,
    PowerSource: ['Batteries','Charger'],

    Levels: Levels = {
        PowerLevel: 100,
        VolumeLevel: 100,
        ScreenBrightnessLevel: 100
    },

    Inputs: Inputs = {
        VolumeControl: false,
        DPad: false,
        Abutton: false,
        Bbutton: false,
        PauseButton: false,
        SelectButton: false,
        PowerButton: false,
        GameCartridge: false
    },

    ComboAB: () => (Inputs.Abutton === false && Inputs.Bbutton === false ? console.log("no Combo") : console.log('Combo'))
    

}