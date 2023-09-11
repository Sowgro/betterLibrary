var a;

function betterlibrary() {
    if (a == undefined)
        try {
            a = document.getElementsByClassName("main-yourLibraryX-libraryContainer")[0];
            console.log("setting a");
        } catch (error) {
            
    }
    try {
        setTimeout(() => {
            document.getElementsByClassName("betterlibheader")[0].prepend(a);
            // document.getElementsByClassName("main-yourLibraryX-entryPoints")[0].appendChild(a);
        }, 100);
        console.log("did not catch");
    } catch (error) {
        console.log("catch!!");
        console.error(error);
    }
}