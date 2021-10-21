function polynome() {
    // alert();
    // Valeur de a, b et c
    let a = document.getElementById("valeur_de_a").value.trim();
    let b = document.getElementById("valeur_de_b").value.trim();
    let c = document.getElementById("valeur_de_c").value.trim();
    // return alert(a);

    // Controller la non saisie au niveau des inputs
    if (a != "" && b != "" && c != "") {
        // Controller la saisie des données non valides (autre que des chiffres)
        if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
            // a doit être différent de 0
            if (parseInt(a) != 0) {
                alert("L'équation du secon degré est de type: " + a + "x2 +" + b + "x +" + c);
                // Valeur de delta
                let D = (b * b) - (4 * a * c);
                // Conditions
                if (D < 0) {
                    // return alert("Pas de solution dans R pour cette équation.");
                    resolution_dans_C(a, b, c, D);
                } else if (D == 0) {
                    return alert("D=0 et la soution de cette équation est: x0= " + (-b / (2 * a)));
                } else {
                    return alert("D>0 et votre équation admet deux solutions dans R \n x1= " + ((-b - Math.sqrt(D)) / (2 * a)) + " et x2= " + ((-b - Math.sqrt(D)) / (2 * a)));
                }
            } else {
                return alert("La valeur de a doit être différent de 0");
            }
        } else {
            // alert(typeof (a))
            return alert("Seuls les chiffres sont valides.");
        }
    } else {
        return alert("Vous devez renseigner tous les champs.");
    }
};

// Fonction de résolution dans C lorsque delta est négatif
function resolution_dans_C(param_a, param_b, param_c, delta) {
    // alert(delta);
    let i;
    i * i == -1;
    delta == - (-delta) == (i * i) * (-delta) == (i * Math.sqrt(-delta)) * (i * Math.sqrt(-delta));
    // console.log(i);
    return alert("D<0 et l'équation admet deux solutions complexes \n x1= " + (("(-" + param_b + " -i x " + +Math.sqrt(-delta)) + ")/" + (2 * param_a)) + "\n et \nx2= " + (("(-" + param_b + " +i x " + +Math.sqrt(-delta)) + ")/" + (2 * param_a)));
};