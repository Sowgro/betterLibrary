var library;
var sidebar;
var text;
var center;
var betterLibIsEnabled;
var lastSidebarSize;
var lastSidebarMode; // 1=collapsed, 0=normal, 2=expanded

// Disables betterlibrary when the pages is left
function startListener() {
    Spicetify.Platform.History.listen((location) => {
        if (location.pathname != '/betterlibrary' && betterLibIsEnabled)
            disableBetterLib();
    });
}

function enableBetterLib() {
    waitForElm('.betterLibBox').then((elm) => {
        if (!betterLibIsEnabled)
        {
            library = document.getElementsByClassName("main-yourLibraryX-libraryContainer")[0];
            text = document.getElementsByClassName("betterLibText")[0];
            sidebar = document.getElementsByClassName("main-yourLibraryX-library")[0];
            center = document.getElementsByClassName("betterLibBox")[0];
            center.appendChild(library);
            sidebar.appendChild(text);
            if (Spicetify.Platform.History)
            lastSidebarMode = Spicetify.Platform.LocalStorageAPI.getItem("ylx-sidebar-state");
            lastSidebarSize = document.documentElement.style.getPropertyValue("--left-sidebar-width");
            Spicetify.Platform.LocalStorageAPI.setItem("ylx-sidebar-state",2);
            if (lastSidebarMode != 1) //uncollapes sidebar temporarily while in betterlibrary
                document.documentElement.style.setProperty("--left-sidebar-width", lastSidebarSize);
            else
                document.documentElement.style.setProperty("--left-sidebar-width", "280px");
            betterLibIsEnabled = true;
        }
    });
}

function disableBetterLib() {
    sidebar.appendChild(library);
    center.appendChild(text);
    Spicetify.Platform.LocalStorageAPI.setItem("ylx-sidebar-state",lastSidebarMode);
    document.documentElement.style.setProperty("--left-sidebar-width", lastSidebarSize);
    betterLibIsEnabled = false;
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