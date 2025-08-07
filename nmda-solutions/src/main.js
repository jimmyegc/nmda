import './scss/main.scss'

document.addEventListener("DOMContentLoaded", function () {
    const getCurrentYear = () => {
        const d = new Date();    
        return d.getFullYear();
    }

    let year = getCurrentYear();
    document.getElementById("currentyear").innerHTML = year;
});