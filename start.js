try {

    console.log("EMB start");

    const mod = bcModSdk.registerMod({
        name: "EMB",
        fullName: "Em's Miscellaneous Box",
        version: "0.0.1"
    });

    console.log("Mod registered");

    PreferenceRegisterExtensionSetting({
        Identifier: "EMB",
        ButtonText: "EMB Settings",

        load() {
            console.log("EMB load");
        },

        run() {
            DrawText(
                "EMB WORKING",
                1000,
                150,
                "Black",
                "White"
            );

            DrawButton(
                1815,
                75,
                90,
                90,
                "",
                "White",
                "Icons/Exit.png",
                "Back"
            );
        },

        click() {
            console.log("Back clicked");

            if (MouseIn(1815, 75, 90, 90)) {
                console.log("Attempting exit");

                console.log(
                    "PreferenceSubscreenExtensionsClear:",
                    typeof PreferenceSubscreenExtensionsClear
                );
            }
        },

        exit() {},
        unload() {}
    });

    console.log("EMB registered");

} catch (e) {
    console.error("EMB ERROR:", e);
}
