(() => {

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

    let CurrentEMBScreen = "main";

    window.EMB_SetScreen = (screen) => {
        CurrentEMBScreen = screen;
    };

    Promise.all([
        fetch("https://emilybondage.github.io/EMB/screens/TestScreen.js")
            .then(r => r.text())
            .then(eval)
    ]).then(() => {

        PreferenceRegisterExtensionSetting({
            Identifier: "EMB",
            ButtonText: "EMB Settings",

            load() {},

            run() {

                if (CurrentEMBScreen === "main") {

                    DrawText(
                        "Welcome to Em's Miscellaneous Box!",
                        1000,
                        150,
                        "Black",
                        "White"
                    );

                    DrawButton(
                        400,
                        250,
                        0,
                        90,
                        "Features",
                        "White"
                    );

                    DrawButton(
                        400,
                        350,
                        0,
                        190,
                        "Word Replacement",
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

                } else if (window.EMB_Screens?.TestScreen) {

                    window.EMB_Screens.TestScreen.run();

                }

            },

            click() {

                if (CurrentEMBScreen === "main") {

                    if (MouseIn(800, 250, 400, 90)) {
                        CurrentEMBScreen = "test";
                    }

                } else if (window.EMB_Screens?.TestScreen) {

                    window.EMB_Screens.TestScreen.click();

                }

            },

            exit() {},
            unload() {}
        });

    });

})();
