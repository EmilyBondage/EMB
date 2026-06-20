window.EMB_Screens ??= {};

window.EMB_Screens.TestScreen = {

    run() {

        DrawText(
            "Test Screen",
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

        if (MouseIn(1815, 75, 90, 90)) {
            EMB_SetScreen("main");
        }

    }

};
