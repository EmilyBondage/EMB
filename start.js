console.log("EMB start");

const mod = bcModSdk.registerMod({
    name: "emb",
    fullName: "Emily's Mod",
    version: "0.0.1"
});

PreferenceRegisterExtensionSetting({
    Identifier: "EMB",
    ButtonText: "EMB Settings",

    load() {},

    run() {
        DrawText(
            "EMB WORKING",
            1000,
            150,
            "Black",
            "White"
        );

        DrawButton(
            1815, 75,      // x, y
            90, 90,        // width, height
            "",
            "White",
            "Icons/Exit.png",
            "Back"
        );
    },

    click() {
        if (MouseIn(1815, 75, 90, 90)) {
            PreferenceSubscreenExtensionsClear();
        }
    },

    exit() {},

    unload() {}
});

console.log("EMB registered");
