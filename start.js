const mod = bcModSdk.registerMod({
    name: "myaddon",
    fullName: "My Addon",
    version: "1.0.0"
});

PreferenceRegisterExtensionSetting({
    Identifier: "MyAddon",
    ButtonText: "My Addon",
    Image: "Icons/Preference.png",

    load() {
        console.log("Opened");
    },

    run() {
        DrawText(
            "Hello World",
            1000,
            100,
            "Black",
            "White"
        );
    },

    click() {},

    exit() {},

    unload() {}
});
