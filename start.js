console.log("EMB start");

const mod = bcModSdk.registerMod({
    name: "emb",
    fullName: "Emily's Mod",
    version: "0.0.1"
});

PreferenceRegisterExtensionSetting({
    Identifier: "EMB",
    ButtonText: "EMB Settings",

    load() {
        console.log("EMB opened");
    },

    run() {
        DrawText(
            "EMB WORKING",
            1000,
            500,
            "Black",
            "White"
        );
    },

    click() {},

    exit() {
        console.log("EMB closed");
    },

    unload() {}
});

console.log("EMB registered");
