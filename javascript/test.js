function polynome() {
    // alert()
    // Valeur de a, b et c
    let a = document.getElementById("valeur_de_a").value;
    let b = document.getElementById("valeur_de_b").value;
    let c = document.getElementById("valeur_de_c").value;

    // Controller la non saisie au niveau des inputs
    if (a != "" && b != "" && c != "") {
        // Controller la non saisie des données non valides
        if (a != isNaN && b != isNaN && c != isNaN) {
            // a doit être différent de 0
            // if (a != 0) {
                alert("L'équation du secon degré est de type: " + a + "x2 +" + b + "x +" + c);
                // Valeur de delta
                let D = (b * b) - (4 * a * c);
                // console.log(D);
                // Conditions
                if (D < 0) {
                    alert("Pas de solution dans R pour cette équation.");
                } else if (D == 0) {
                    alert("D=0 et la soution de cette équation est: x0= " + (-b / (2 * a)));
                } else {
                    alert("D>0 et votre équation admet deux solutions \n x1= " + ((-b - Math.sqrt(D)) / (2 * a)) + " et x2= " + ((-b - Math.sqrt(D)) / (2 * a)));
                }
            // } else {
            //     alert("La valeur de a doit être différent de 0");
            // }
        } else {
            alert("Seuls les chiffres sont valides.");
        }
    } else {
        alert("Vous devez renseigner tous les champs.");
    }

}