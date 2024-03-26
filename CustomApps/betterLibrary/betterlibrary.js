var library;
var sidebar;
var text;
var center;
var betterLibIsEnabled;
var lastSidebarSize; //
var lastSidebarMode; //ylx-sidebar-state 1=collapsed, 0=normal, 2=expanded
var lastViewIcons; //items-view 1=icons 2=list
var lastViewCompact; //library-row-mode 1=compact 2=normal

// Disables betterlibrary when the pages is left
function startBetterLibListener() {
    Spicetify.Platform.History.listen((location) => {
        // console.log("betterlib listener called")
        if (location.pathname != '/betterlibrary')
            disableBetterLib();
    });
    window.addEventListener(
        'beforeunload',
        (event) => {
            disableBetterLib();
        }
        )
}

function enableBetterLib() {
    waitForElm('.betterLibBox').then((elm) => {
        if (!betterLibIsEnabled)
        {
            //swap elements
            library = document.getElementsByClassName("main-yourLibraryX-libraryContainer")[0];
            text = document.getElementsByClassName("betterLibText")[0];
            sidebar = document.getElementsByClassName("main-yourLibraryX-library")[0];
            center = document.getElementsByClassName("betterLibBox")[0];
            center.appendChild(library);
            sidebar.appendChild(text);

            //store last mode and size
            lastSidebarMode = Spicetify.Platform.LocalStorageAPI.getItem("ylx-sidebar-state");
            lastSidebarSize = Spicetify.Platform.LocalStorageAPI.getItem("ylx-expanded-state-nav-bar-width");

            //set new mode and size
            currentSidebarSize = document.documentElement.style.getPropertyValue("--left-sidebar-width");
            currentSidebarSize = parseInt(currentSidebarSize, 10);
            Spicetify.Platform.LocalStorageAPI.setItem("ylx-expanded-state-nav-bar-width",currentSidebarSize);
            Spicetify.Platform.LocalStorageAPI.setItem("ylx-sidebar-state",2);

            //fix collaped library buttons
            if (lastSidebarMode == 1) {
                document.documentElement.style.setProperty("--betterlib-fix-collaped-view","none");
                document.documentElement.style.setProperty("--betterlib-show-placeholder-text","none");
            }

            //store last icons mode and compact mode
            lastViewSize = Spicetify.Platform.LocalStorageAPI.getItem("ylx-grid-scale");
            lastViewIcons = Spicetify.Platform.LocalStorageAPI.getItem("items-view");
            lastViewCompact = Spicetify.Platform.LocalStorageAPI.getItem("library-row-mode");

            //get betterlib icons mode and compact mode from storage
            newViewSize = parseFloat(Spicetify.Platform.LocalStorageAPI.getItem("betterlib-ylx-grid-scale"),10);
            if (newViewSize == null) {
                newViewSize = 1;
            }
            newViewIcons = parseInt(Spicetify.Platform.LocalStorageAPI.getItem("betterlib-items-view"),10);
            newViewCompact = parseInt(Spicetify.Platform.LocalStorageAPI.getItem("betterlib-library-row-mode"),10);

            //apply betterlib icons mode and compact mode
            Spicetify.Platform.LocalStorageAPI.setItem("ylx-grid-scale", newViewSize);
            Spicetify.Platform.LocalStorageAPI.setItem("items-view", newViewIcons);
            Spicetify.Platform.LocalStorageAPI.setItem("library-row-mode", newViewCompact);

            betterLibIsEnabled = true;
        }
    });
}

function disableBetterLib() {
    if (betterLibIsEnabled)
    {
        //undo fix for collaped library buttons
        if (lastSidebarMode == 1) {
            document.documentElement.style.setProperty("--betterlib-fix-collaped-view","inherit");
            document.documentElement.style.setProperty("--betterlib-show-placeholder-text","flex");
        }

        //get current betterlib icons mode and compact mode
        currentViewIcons = parseInt(Spicetify.Platform.LocalStorageAPI.getItem("items-view"),10);
        currentViewCompact = parseInt(Spicetify.Platform.LocalStorageAPI.getItem("library-row-mode"),10);
        currentViewSize = parseFloat(Spicetify.Platform.LocalStorageAPI.getItem("ylx-grid-scale"),10);

        //save betterlib icons mode and compact mode to storage
        Spicetify.Platform.LocalStorageAPI.setItem("betterlib-items-view", currentViewIcons);
        Spicetify.Platform.LocalStorageAPI.setItem("betterlib-library-row-mode", currentViewCompact);
        Spicetify.Platform.LocalStorageAPI.setItem("betterlib-ylx-grid-scale", currentViewSize);

        //revert icons and compact mode to last
        Spicetify.Platform.LocalStorageAPI.setItem("items-view", lastViewIcons);
        Spicetify.Platform.LocalStorageAPI.setItem("library-row-mode", lastViewCompact);
        Spicetify.Platform.LocalStorageAPI.setItem("ylx-grid-scale", lastViewSize);

        //revert swap
        sidebar.appendChild(library);
        center.appendChild(text);

        //reset mode and size to last
        Spicetify.Platform.LocalStorageAPI.setItem("lx-expanded-state-nav-bar-width",lastSidebarSize);
        Spicetify.Platform.LocalStorageAPI.setItem("ylx-sidebar-state",lastSidebarMode);

        betterLibIsEnabled = false;
    }
}

//source: https://stackoverflow.com/questions/5525071/how-to-wait-until-an-element-exists
function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                observer.disconnect();
                resolve(document.querySelector(selector));
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}