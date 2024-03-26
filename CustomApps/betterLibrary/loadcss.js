(function loadcss() {
    document.getElementsByTagName('head')[0].insertAdjacentHTML(
        'beforeend',`
            <style>
            /* remove resize bar while in betterlibrary */
            .Root__top-container:has(.betterLibBox) .LayoutResizer__resize-bar {
                visibility: hidden;
            }
            
            /* creates the centered placeholder text on the sidebar where the library was */
            .betterLibText {
                display: none;
                justify-content: center;
                align-items: center;
                height: 100%;
            }
            
            /* makes the text visible only when it is in the sidebar */
            .main-yourLibraryX-library .betterLibText {
                display: var(--betterlib-show-placeholder-text,flex);
            }
            
            /* makes the "your library" not clickable, expands and styles the text*/
            button.Button-sc-1dqy6lx-0.main-yourLibraryX-collapseButtonWrapper.main-yourLibraryX-button.main-useDropTarget-base,
            button.Button-sc-1dqy6lx-0.main-yourLibraryX-collapseButtonWrapper.main-yourLibraryX-button.NxEINIJHGytq4gF1r2N1 {
                pointer-events: none;
                font-size: x-large;
                color: white;
            }
            
            /* hides the library header when in the sidebar*/
            .main-yourLibraryX-library .main-yourLibraryX-header {
                display: none;
            }
            
            /* shows the library header if the user is in a folder*/
            .main-yourLibraryX-library .main-yourLibraryX-header:has(.WYU7SXdABSulyirnmIYb) {
                display: flex;
            }
            
            /* hides collapse button (library icon)*/
            span.IconWrapper__Wrapper-sc-16usrgb-0.Wrapper-medium-leading {
                display: none;
            }
            
            /* hides collapse button (library icon) in folder*/
            button.Button-sc-1dqy6lx-0.main-yourLibraryX-collapseButtonWrapper.main-yourLibraryX-button.main-useDropTarget-base.Button-medium-medium-buttonTertiary-iconOnly-condensed-useBrowserDefaultFocusStyle,
            button.Button-sc-1dqy6lx-0.main-yourLibraryX-collapseButtonWrapper.main-yourLibraryX-button.main-useDropTarget-base.Button-medium-medium-buttonTertiary-iconOnly-condensed-isUsingKeyboard-useBrowserDefaultFocusStyle,
            button.Button-sc-1dqy6lx-0.main-yourLibraryX-collapseButtonWrapper.main-yourLibraryX-button.NxEINIJHGytq4gF1r2N1.Button-medium-medium-buttonTertiary-iconOnly-condensed-useBrowserDefaultFocusStyle,
            button.Button-sc-1dqy6lx-0.main-yourLibraryX-collapseButtonWrapper.main-yourLibraryX-button.NxEINIJHGytq4gF1r2N1.Button-medium-medium-buttonTertiary-iconOnly-condensed-isUsingKeyboard-useBrowserDefaultFocusStyle {
                display: none;
            }
            
            /* hides expand/reduce button (<- ->) and also add(+) and more(...)*/
            button.Button-sc-1dqy6lx-0.main-yourLibraryX-button.main-yourLibraryX-iconOnly.main-useDropTarget-base,
            button.Button-sc-1dqy6lx-0.main-yourLibraryX-button.main-yourLibraryX-iconOnly.NxEINIJHGytq4gF1r2N1 {
                display: none;
            }
            
            /* unhides add(+) and more(...)*/
            span button.Button-sc-1dqy6lx-0.main-yourLibraryX-button.main-yourLibraryX-iconOnly.main-useDropTarget-base,
            span button.Button-sc-1dqy6lx-0.main-yourLibraryX-button.main-yourLibraryX-iconOnly.NxEINIJHGytq4gF1r2N1 {
                display: inherit;
            }
            
            /* add more top padding to the sidebar */
            .main-yourLibraryX-library {
                padding-top: 5px;
            }
            
            /* fixes icons on collapsed betterlibrary */
            span.Type__TypeElement-sc-goli3j-0,
            .main-yourLibraryX-navItem span.Text__TextElement-sc-if376j-0 {
                display: var(--betterlib-fix-collaped-view,inherit);
            }
            
            /* for future setting */
            .main-yourLibraryX-entryPoints.main-yourLibraryX-library {
                display: var(--betterlib-hide-sidebar-library,inherit);
            }
        </style>`
        );
})();