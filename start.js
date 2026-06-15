(() => {

    console.log("EMB start");

    const mod = bcModSdk.registerMod(
        {
            name: "EMB",
            fullName: "Em's Miscellaneous Box",
            version: "0.0.1"
        },
        {
            allowReplace: true
        }
    );

PreferenceRegisterExtensionSetting({
    Identifier: "EMB",
    ButtonText: "EMB Settings",

    load() {},

    run() {
        DrawText(
            "EMB TEST",
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

})();
