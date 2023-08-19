const background = window.getComputedStyle(document.documentElement).getPropertyValue("--background");
const primary = window.getComputedStyle(document.documentElement).getPropertyValue("--primary");
    
const Colors = {
    background,
    primary,
};

export { Colors };