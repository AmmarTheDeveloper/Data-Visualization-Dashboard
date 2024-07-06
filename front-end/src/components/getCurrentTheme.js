export function getCurrentTheme ( theme, setCurrentTheme ) {
    if ( theme === "system" ) {
        const mediaQuery = window.matchMedia( "(prefers-color-scheme: dark)" );
        setCurrentTheme( mediaQuery.matches ? "dark" : "light" );

        const handleChange = ( e ) => {
            setCurrentTheme( e.matches ? "dark" : "light" );
        };

        mediaQuery.addEventListener( "change", handleChange );
        return () => mediaQuery.removeEventListener( "change", handleChange );
    } else {
        setCurrentTheme( theme );
    }
}