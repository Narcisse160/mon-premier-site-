function etudierFonction(a, b, c) {
    // Fonction : f(x) = ax² + bx + c

    const delta = b * b - 4 * a * c;

    console.log("Fonction : f(x) = " + a + "x² + " + b + "x + " + c);

    console.log("Discriminant : " + delta);

    if (delta > 0) {
        const x1 = (-b - Math.sqrt(delta)) / (2 * a);
        const x2 = (-b + Math.sqrt(delta)) / (2 * a);

        console.log("Deux racines : " + x1 + " et " + x2);
    } else if (delta === 0) {
        const x = -b / (2 * a);

        console.log("Une racine double : " + x);
    } else {
        console.log("Aucune racine réelle");
    }

    const sommetX = -b / (2 * a);
    const sommetY = a * sommetX * sommetX + b * sommetX + c;

    console.log("Sommet : (" + sommetX + ", " + sommetY + ")");

    console.log("Dérivée : f'(x) = " + 2 * a + "x + " + b);

    return {
        delta: delta,
        sommet: { x: sommetX, y: sommetY }
    };
}

// Exemple : f(x) = x² - 4x + 3
etudierFonction(1, -4, 3);
