    let lignes = 0, colonnes =  0, arrMatrice = [];
    let lignesSecondaire = 0, colonnesSecondaire = 0, arrMatriceSecondaire = [];
    let section = document.getElementById("section");
    let arrResultat = [];
    

    //Fonction pour afficher les inputs afin de prendre les données de la matrice
    let afficherMatrice = (arr, estInput) => {
        let matrice = "";
        for(let i=0; i<colonnes; i++){
            matrice += "<div class='colonnes mx-2 my-5 text-center'><span>"+(i+1)+"</span>";
            for(let j=0; j<lignes; j++){
                if(estInput){
                    matrice += "<input type='number' onchange='enregisterCoefficient("+j+","+i+")' id='"+j+i+"' class='my-2' value='"+arr[j][i]+"'>";
                }
                else{
                    matrice += "<div class='input my-2 d-flex align-items-center justify-content-center'>"+arr[j][i]+"</div>";
                }
            }
            matrice += "</div>";
        }
        document.getElementById("matrice").innerHTML = matrice;
    };

    //Fonction pour afficher les inputs afin de prendre les données de la matrice
    let afficherSecondeMatrice = (arr) => {
        let matrice = "";
        for(let i=0; i<colonnesSecondaire; i++){
            matrice += "<div class='colonnes mx-2 my-5 text-center'><span>"+(i+1)+"</span>";
            for(let j=0; j<lignesSecondaire; j++){
                matrice += "<input type='number' onchange='enregisterCoefficientPourSecondeMatrice("+j+","+i+")' id='"+j+i+"' class='my-2' value='"+arr[j][i]+"'>";
            }
            matrice += "</div>";
        }
        document.getElementById("matrice").innerHTML = matrice;
    };

    //Fonction pour mettre à jour le tableau de la matrice
    let miseAJourArrMatriceSecondaire = () => {
        //Mise à jour du nombre de ligne que contient le tableau de la matrice
        if(lignesSecondaire > arrMatriceSecondaire.length){
            for(let i=arrMatriceSecondaire.length; i < lignesSecondaire; i++){
                arrMatriceSecondaire.push([]);
            }
        }
        else if(lignesSecondaire < arrMatriceSecondaire.length){
            for(let i=arrMatriceSecondaire.length; i > lignesSecondaire; i--){
                arrMatriceSecondaire.pop();
            }
        }
        //Mise à jour du nombre de coloone que contient le tableau de la matrice
        for(let i=0; i < arrMatriceSecondaire.length; i++){
            if(colonnesSecondaire > arrMatriceSecondaire[i].length){
                for(let j=arrMatriceSecondaire[i].length; j < colonnesSecondaire; j++){
                    arrMatriceSecondaire[i].push(0);
                }
            }
            else if(colonnesSecondaire < arrMatriceSecondaire[i].length){
                for(let j=arrMatriceSecondaire[i].length; j > colonnesSecondaire; j--){
                    arrMatriceSecondaire[i].pop();
                }
            }
        }
    };

    //Fonction pour mettre à jour le nombre de ligne de la matrice secondaire
    let miseAJourNbrLigneSecondaire = () => {
        lignesSecondaire = document.getElementById("ligne").value;
        miseAJourArrMatriceSecondaire();
        document.getElementById("resultat").innerHTML = "";
        afficherSecondeMatrice(arrMatriceSecondaire);
    };

    //Fonction pour mettre à jour le nombre de colonne de la matrice secondaire
    let miseAJourNbrColonneSecondaire = () => {
        colonnesSecondaire = document.getElementById("colonne").value;
        miseAJourArrMatriceSecondaire();
        document.getElementById("resultat").innerHTML = "";
        afficherSecondeMatrice(arrMatriceSecondaire);
    };

    //Fonction pour enregistrer des données de la matrice dans le tableau de la matrice secondaire
    let enregisterCoefficientPourSecondeMatrice = (a,b) => {
        document.getElementById("resultat").innerHTML = "";
        arrMatriceSecondaire[a][b] = parseFloat(document.getElementById(""+a+b+"").value);
    };

    //Fonction pour afficher la matrice resultante d'un opération
    let afficherMatriceResultante = (arr, lig, col) => {
        let matrice = "";
        for(let i=0; i<col; i++){
            matrice += "<div class='colonnes mx-2 my-5 text-center'><span>"+(i+1)+"</span>";
            for(let j=0; j<lig; j++){
                matrice += "<div class='input my-2 d-flex align-items-center justify-content-center'>"+arr[j][i]+"</div>";
            }
            matrice += "</div>";
        }
        document.getElementById("resultat").innerHTML = matrice;
    };

/******************************************PAGE DE DEFINITION DE MATRICE****************************************/


    //Fonction pour afficher la page de definition de matrice
    let afficherPageDefinitionMatrice = () => {
        let pageMatrice = '<div class="d-flex align-items-center pl-4 py-1 m-4 border chemin">'+
            '<svg class="mx-1" width="17" height="17" viewBox="0 0 486.196 486.196">'+
                '<path d="M481.708,220.456l-228.8-204.6c-0.4-0.4-0.8-0.7-1.3-1c-5-4.8-13-5-18.3-0.3l-228.8,204.6c-5.6,5-6,13.5-1.1,19.1 c2.7,3,6.4,4.5,10.1,4.5c3.2,0,6.4-1.1,9-3.4l41.2-36.9v7.2v106.8v124.6c0,18.7,15.2,34,34,34c0.3,0,0.5,0,0.8,0s0.5,0,0.8,0h70.6 c17.6,0,31.9-14.3,31.9-31.9v-121.3c0-2.7,2.2-4.9,4.9-4.9h72.9c2.7,0,4.9,2.2,4.9,4.9v121.3c0,17.6,14.3,31.9,31.9,31.9h72.2 c19,0,34-18.7,34-42.6v-111.2v-34v-83.5l41.2,36.9c2.6,2.3,5.8,3.4,9,3.4c3.7,0,7.4-1.5,10.1-4.5 C487.708,233.956,487.208,225.456,481.708,220.456z M395.508,287.156v34v111.1c0,9.7-4.8,15.6-7,15.6h-72.2c-2.7,0-4.9-2.2-4.9-4.9 v-121.1c0-17.6-14.3-31.9-31.9-31.9h-72.9c-17.6,0-31.9,14.3-31.9,31.9v121.3c0,2.7-2.2,4.9-4.9,4.9h-70.6c-0.3,0-0.5,0-0.8,0 s-0.5,0-0.8,0c-3.8,0-7-3.1-7-7v-124.7v-106.8v-31.3l151.8-135.6l153.1,136.9L395.508,287.156L395.508,287.156z"/>'+
            '</svg>'+
            '<div class="d-flex couper">'+
                '<span class="mx-1">Accueil</span>'+
                '<span class="mx-1">></span>'+
                '<span class="mx-1">Ma</span>'+
                '<span class="mx-1">Matrice</span>'+
            '</div>'+
        '</div>'+
        '<h3 class="text-center my-3">Definissez votre matrice principale !!!</h3>'+
        '<div class="row my-3">'+
            '<div class="col-12 col-lg-6 text-center my-3">Nombre de ligne : <input onchange="miseAJourNbrLigne()" type="number" value="'+lignes+'" id="ligne"></div>'+
            '<div class="col-12 col-lg-6 text-center my-3">Nombre de colonne : <input onchange="miseAJourNbrColonne()" type="number" value="'+colonnes+'" id="colonne"></div>'+
        '</div>'+
        '<div id="matrice" class="d-flex justify-content-center mt-5 mw-100 flex-wrap"></div>';
        section.innerHTML = pageMatrice;
        afficherMatrice(arrMatrice, true);
    };
    afficherPageDefinitionMatrice();

    //Fonction pour mettre à jour le tableau de la matrice
    let miseAJourArrMatrice = () => {
        //Mise à jour du nombre de ligne que contient le tableau de la matrice
        if(lignes > arrMatrice.length){
            for(let i=arrMatrice.length; i < lignes; i++){
                arrMatrice.push([]);
            }
        }
        else if(lignes < arrMatrice.length){
            for(let i=arrMatrice.length; i > lignes; i--){
                arrMatrice.pop();
            }
        }
        //Mise à jour du nombre de coloone que contient le tableau de la matrice
        for(let i=0; i < arrMatrice.length; i++){
            if(colonnes > arrMatrice[i].length){
                for(let j=arrMatrice[i].length; j < colonnes; j++){
                    arrMatrice[i].push(0);
                }
            }
            else if(colonnes < arrMatrice[i].length){
                for(let j=arrMatrice[i].length; j > colonnes; j--){
                    arrMatrice[i].pop();
                }
            }
        }
    };

    //Fonction pour mettre à jour le nombre de ligne de la matrice principale
    let miseAJourNbrLigne = () => {
        lignes = document.getElementById("ligne").value;
        miseAJourArrMatrice();
        afficherMatrice(arrMatrice, true);
    };

    //Fonction pour mettre à jour le nombre de colonne de la matrice principale
    let miseAJourNbrColonne = () => {
        colonnes = document.getElementById("colonne").value;
        miseAJourArrMatrice();
        afficherMatrice(arrMatrice, true);
    };

    //Fonction pour enregistrer des données de la matrice dans le tableau de la matrice
    let enregisterCoefficient = (a,b) => {
        arrMatrice[a][b] = parseFloat(document.getElementById(""+a+b+"").value);
    };

/*****************************************************************************************************************/

/******************************************PAGE DE LA NATURE, DE LA TRACE ET DU DETERMINANT****************************************/

    //Fonction pour afficher la page de la nature, de la trace et du déterminant d'une matrice
    let afficherPageNatureTraceDetermiantMatrice = () => {
        let pageMatrice = '<div class="d-flex align-items-center pl-4 py-1 m-4 border chemin">'+
            '<svg class="mx-1" width="17" height="17" viewBox="0 0 486.196 486.196">'+
                '<path d="M481.708,220.456l-228.8-204.6c-0.4-0.4-0.8-0.7-1.3-1c-5-4.8-13-5-18.3-0.3l-228.8,204.6c-5.6,5-6,13.5-1.1,19.1 c2.7,3,6.4,4.5,10.1,4.5c3.2,0,6.4-1.1,9-3.4l41.2-36.9v7.2v106.8v124.6c0,18.7,15.2,34,34,34c0.3,0,0.5,0,0.8,0s0.5,0,0.8,0h70.6 c17.6,0,31.9-14.3,31.9-31.9v-121.3c0-2.7,2.2-4.9,4.9-4.9h72.9c2.7,0,4.9,2.2,4.9,4.9v121.3c0,17.6,14.3,31.9,31.9,31.9h72.2 c19,0,34-18.7,34-42.6v-111.2v-34v-83.5l41.2,36.9c2.6,2.3,5.8,3.4,9,3.4c3.7,0,7.4-1.5,10.1-4.5 C487.708,233.956,487.208,225.456,481.708,220.456z M395.508,287.156v34v111.1c0,9.7-4.8,15.6-7,15.6h-72.2c-2.7,0-4.9-2.2-4.9-4.9 v-121.1c0-17.6-14.3-31.9-31.9-31.9h-72.9c-17.6,0-31.9,14.3-31.9,31.9v121.3c0,2.7-2.2,4.9-4.9,4.9h-70.6c-0.3,0-0.5,0-0.8,0 s-0.5,0-0.8,0c-3.8,0-7-3.1-7-7v-124.7v-106.8v-31.3l151.8-135.6l153.1,136.9L395.508,287.156L395.508,287.156z"/>'+
            '</svg>'+
            '<div class="d-flex couper">'+
                '<span class="mx-1">Accueil</span>'+
                '<span class="mx-1">></span>'+
                '<span class="mx-1">Opérations</span>'+
                '<span class="mx-1">></span>'+
                '<span class="mx-1">Nature,</span>'+
                '<span class="mx-1">Trace</span>'+
                '<span class="mx-1">et</span>'+
                '<span class="mx-1">Détermiant</span>'+
            '</div>'+
        '</div>'+
        '<h3 class="text-center mt-5">La nature de votre matrice !!!</h3>'+
        '<div id="nature" class="row"></div>'+
        '<h3 class="text-center mt-5">La trace de votre matrice !!!</h3>'+
        '<div class="row" id="trace"></div>'+
        '<h3 class="text-center mt-5">Le determinat de votre matrice !!!</h3>'+
        '<div class="row" id="determinant"></div>';
        section.innerHTML = pageMatrice;

        afficherNature();

        //Affichage de la trace
        if(calculerTrace() != null){
            document.getElementById("trace").innerHTML = "<div class='col-11 col-lg-9 alert alert-success mx-auto my-3 text-center'>La trace de la matrice principale est égale à "+calculerTrace()+".</div>"
        }
        else{
            document.getElementById("trace").innerHTML = "<div class='col-11 col-lg-9 alert alert-danger mx-auto my-3 text-center'>Impossible de calculer la trace, car la matrice n'est pas une matrice carrée.</div>"
        }

        //Affichage du détermiant
        if(lignes == colonnes && lignes > 0){
            document.getElementById("determinant").innerHTML = "<div class='col-11 col-lg-9 alert alert-success mx-auto my-3 text-center'>Le determinant de la matrice principale est égale à "+calculerDeterminant(arrMatrice)+".</div>";
        }
        else{
            document.getElementById("determinant").innerHTML = "<div class='col-11 col-lg-9 alert alert-danger mx-auto my-3 text-center'>Impossible de calculer le détermiant, car la matrice n'est pas une matrice carrée.</div>";
        }
    };

    //Fonction qui vérifie la ou les nature (s) de la matrice afin de l'afficher ou de les afficher
    let afficherNature = () => {
        let nature = "<div class='col-11 col-lg-9 alert alert-success text-center mx-auto'>Votre matrice est une matrice ", nbrNaturePremierTour = 0, nbrMatriceDeuxiemeTour = 0;
        if(lignes > 0 && colonnes > 0){
            for(let i=0; i<2; i++){
                //Vérifions si la matrice est uniligne
                if(arrMatrice.length == 1){
                    if(i==0){
                        nbrNaturePremierTour++;
                    }
                    else{
                        nbrMatriceDeuxiemeTour++;
                        nature = ajouterNature(nature, "uniligne", nbrNaturePremierTour, nbrMatriceDeuxiemeTour);
                    }
                }
                //Vérifions si la matrice est unicolonne
                if(arrMatrice.length != 0 && arrMatrice[0].length == 1){
                    if(i==0){
                        nbrNaturePremierTour++;
                    }
                    else{
                        nbrMatriceDeuxiemeTour++;
                        nature = ajouterNature(nature, "unicolonne", nbrNaturePremierTour, nbrMatriceDeuxiemeTour);
                    }
                }
                //Cherchons le nombre de coefficient non null afin de voir si la matrice est élémentaire ou null
                let nbrCoefNonNull = 0;
                for(let j=0; j<lignes; j++){
                    for(let k=0; k<colonnes; k++){
                        if(arrMatrice[j][k] != 0){
                            nbrCoefNonNull++;
                        }
                    }
                }
                //Vérifions si la matrice est élémentaire
                if(nbrCoefNonNull == 1){
                    if(i==0){
                        nbrNaturePremierTour++;
                    }
                    else{
                        nbrMatriceDeuxiemeTour++;
                        nature = ajouterNature(nature, "élémentaire", nbrNaturePremierTour, nbrMatriceDeuxiemeTour);
                    }
                    
                }
                //Vérifions si la matrice est null
                if(nbrCoefNonNull == 0){
                    if(i==0){
                        nbrNaturePremierTour++;
                    }
                    else{
                        nbrMatriceDeuxiemeTour++;
                        nature = ajouterNature(nature, "null", nbrNaturePremierTour, nbrMatriceDeuxiemeTour);
                    }
                    
                }
                //Vérifions si la matrice est carrée
                if(lignes == colonnes){
                    if(i==0){
                        nbrNaturePremierTour++;
                    }
                    else{
                        nbrMatriceDeuxiemeTour++;
                        nature = ajouterNature(nature, "carrée", nbrNaturePremierTour, nbrMatriceDeuxiemeTour);
                    }
                    //Recherchons des éléments pour vérifier les sous natures d'une matrice carrée
                    let decompteurDiagonal = 0, decompteurSuperDiagonal = 0, decompteurSousDiagonal = 0, decompteurTriangulaireSup = 0, decompteurTriangulaireInf = 0, decompteurHeisenbergSup = 0, decompteurHeisenbergInf = 0;
                    for(let j=0; j<lignes; j++){
                        for(let k=0; k<colonnes; k++){
                            if(j != k && arrMatrice[j][k] != 0){
                                decompteurDiagonal++;
                            }
                            if(k != j+1 && arrMatrice[j][k] != 0){
                                decompteurSuperDiagonal++;
                            }
                            if(j != k+1 && arrMatrice[j][k] != 0){
                                decompteurSousDiagonal++;
                            }
                            if(j > k && arrMatrice[j][k] != 0){
                                decompteurTriangulaireSup++;
                            }
                            if(j < k && arrMatrice[j][k] != 0){
                                decompteurTriangulaireInf++;
                            }
                            if(j > k+1 && arrMatrice[j][k] != 0){
                                decompteurHeisenbergSup++;
                            }
                            if(j < k+1 && arrMatrice[j][k] != 0){
                                decompteurHeisenbergInf++;
                            }
                        }
                    }
                    //Vérifions si la matrice est une matrice diagonale
                    if(decompteurDiagonal == 0){
                        if(i==0){
                            nbrNaturePremierTour++;
                        }
                        else{
                            nbrMatriceDeuxiemeTour++;
                            nature = ajouterNature(nature, "diagonale", nbrNaturePremierTour, nbrMatriceDeuxiemeTour);
                        }
                        let estScalaire = true;
                        for(let j=0; j < arrMatrice.length-1; j++){
                            if(arrMatrice[j][j] != arrMatrice[j+1][j+1]){
                                estScalaire = false;
                                break;
                            }
                        }
                        if(estScalaire){
                            if(i==0){
                                nbrNaturePremierTour++;
                            }
                            else{
                                nbrMatriceDeuxiemeTour++;
                                nature = ajouterNature(nature, "scalaire", nbrNaturePremierTour, nbrMatriceDeuxiemeTour);
                            }
                            if(arrMatrice[0][0] == 1){
                                if(i==0){
                                    nbrNaturePremierTour++;
                                }
                                else{
                                    nbrMatriceDeuxiemeTour++;
                                    nature = ajouterNature(nature, "unité", nbrNaturePremierTour, nbrMatriceDeuxiemeTour);
                                }
                            }
                        }
                    }
                    //Vérifions si la matrice est une matrice super-diagonale
                    if(decompteurSuperDiagonal == 0){
                        if(i==0){
                            nbrNaturePremierTour++;
                        }
                        else{
                            nbrMatriceDeuxiemeTour++;
                            nature = ajouterNature(nature, "super-diagonale", nbrNaturePremierTour, nbrMatriceDeuxiemeTour);
                        }
                    }
                    //Vérifions si la matrice est une matrice sous-diagonale
                    if(decompteurSousDiagonal == 0){
                        if(i==0){
                            nbrNaturePremierTour++;
                        }
                        else{
                            nbrMatriceDeuxiemeTour++;
                            nature = ajouterNature(nature, "sous-diagonale", nbrNaturePremierTour, nbrMatriceDeuxiemeTour);
                        }
                    }
                    //Vérifions si la matrice est une matrice triangulaire supérieure
                    if(decompteurTriangulaireSup == 0){
                        if(i==0){
                            nbrNaturePremierTour++;
                        }
                        else{
                            nbrMatriceDeuxiemeTour++;
                            nature = ajouterNature(nature, "triangulaire supérieure", nbrNaturePremierTour, nbrMatriceDeuxiemeTour);
                        }
                    }
                    //Vérifions si la matrice est une matrice triangulaire inférieure
                    if(decompteurTriangulaireInf == 0){
                        
                    }
                    //Vérifions si la matrice est une matrice Heisenberg supérieure
                    if(decompteurHeisenbergSup == 0){
                        if(i==0){
                            nbrNaturePremierTour++;
                        }
                        else{
                            nbrMatriceDeuxiemeTour++;
                            nature = ajouterNature(nature, "Heisenberg supérieure", nbrNaturePremierTour, nbrMatriceDeuxiemeTour);
                        }
                    }
                    //Vérifions si la matrice est une matrice Heisenberg inférieure
                    if(decompteurHeisenbergInf == 0){
                        if(i==0){
                            nbrNaturePremierTour++;
                        }
                        else{
                            nbrMatriceDeuxiemeTour++;
                            nature = ajouterNature(nature, "Heisenberg inférieure", nbrNaturePremierTour, nbrMatriceDeuxiemeTour);
                        }
                    }
                }
                if(nbrNaturePremierTour == 0){
                    nature += "de nature inconnue.";
                    break;
                }
            }
        }
        else{
            nature = "<div class='col-11 col-lg-9 alert alert-danger text-center mx-auto'>Veuillez définir une matrice valide.";
        }
        nature += "</div>"
        document.getElementById("nature").innerHTML = nature;
    };

    //Fonction pour ajouter une nouvelle nature à la liste des natures de la matrice
    let ajouterNature = (nature, newNature, a, b) => {
        if(a == 1){
            nature += newNature+".";
        }
        else if(b < a-1){
            nature += newNature+", ";
        }
        else if(b == a-1){
            nature += newNature+" ";
        }
        else if(b == a){
            nature += "et "+newNature+".";
        }
        return nature;
    };

    //Fonction pour calculer la trace de la matrice
    let calculerTrace = () => {
        if(lignes == colonnes && lignes > 0){
            let trace = 0;
            for(let i=0; i < lignes; i++){
                trace += arrMatrice[i][i];
            }
            return trace;
        }
        else{
            return null;
        }
    };

    //Fonction pour calculer le determiant
    let calculerDeterminant = (arr) => {
        let det = 0;
        if(arr.length == 2){
            det = (arr[0][0] * arr[1][1]) - (arr[1][0] * arr[0][1]);
        }
        else if(arr.length > 2){
            for(let j=0; j < arr[0].length; j++){
                det += Math.pow(-1, j) * arr[0][j] * calculerDeterminant(sousMatrice(arr, 0, j));
            }
        }
        return det;
    };

    //Fonction pour recuperer les sous matrices
    let sousMatrice = (arr, a, b) => {
        let newArr = [];
        for(let i=0, k=0; i < arr.length; i++, k++){
            if(i==a){
                k--;
                continue;
            }
            newArr.push([]);
            for(let j=0; j < arr.length; j++){
                if(j==b){
                    continue;
                }
                newArr[k].push(arr[i][j]);
            }
        }
        return newArr;

    }

/*****************************************************************************************************************/

/*********************************PAGE DE MULTIPLICATION DE LA MATRICE PAR UN SCALAIRE****************************/

    let scalaire = 1;

    //Fonction pour afficher la page de multiplication de la matrice par un scalaire
    let afficherPageMultiplicationParScalaire = () => {
        let pageMatrice = '<div class="d-flex align-items-center pl-4 py-1 m-4 border chemin">'+
            '<svg class="mx-1" width="17" height="17" viewBox="0 0 486.196 486.196">'+
                '<path d="M481.708,220.456l-228.8-204.6c-0.4-0.4-0.8-0.7-1.3-1c-5-4.8-13-5-18.3-0.3l-228.8,204.6c-5.6,5-6,13.5-1.1,19.1 c2.7,3,6.4,4.5,10.1,4.5c3.2,0,6.4-1.1,9-3.4l41.2-36.9v7.2v106.8v124.6c0,18.7,15.2,34,34,34c0.3,0,0.5,0,0.8,0s0.5,0,0.8,0h70.6 c17.6,0,31.9-14.3,31.9-31.9v-121.3c0-2.7,2.2-4.9,4.9-4.9h72.9c2.7,0,4.9,2.2,4.9,4.9v121.3c0,17.6,14.3,31.9,31.9,31.9h72.2 c19,0,34-18.7,34-42.6v-111.2v-34v-83.5l41.2,36.9c2.6,2.3,5.8,3.4,9,3.4c3.7,0,7.4-1.5,10.1-4.5 C487.708,233.956,487.208,225.456,481.708,220.456z M395.508,287.156v34v111.1c0,9.7-4.8,15.6-7,15.6h-72.2c-2.7,0-4.9-2.2-4.9-4.9 v-121.1c0-17.6-14.3-31.9-31.9-31.9h-72.9c-17.6,0-31.9,14.3-31.9,31.9v121.3c0,2.7-2.2,4.9-4.9,4.9h-70.6c-0.3,0-0.5,0-0.8,0 s-0.5,0-0.8,0c-3.8,0-7-3.1-7-7v-124.7v-106.8v-31.3l151.8-135.6l153.1,136.9L395.508,287.156L395.508,287.156z"/>'+
            '</svg>'+
            '<div class="d-flex couper">'+
                '<span class="mx-1">Accueil</span>'+
                '<span class="mx-1">></span>'+
                '<span class="mx-1">Opérations</span>'+
                '<span class="mx-1">></span>'+
                '<span class="mx-1">Multiplier</span>'+
                '<span class="mx-1">la</span>'+
                '<span class="mx-1">matrice</span>'+
                '<span class="mx-1">par</span>'+
                '<span class="mx-1">un</span>'+
                '<span class="mx-1">scalaire</span>'+
            '</div>'+
        '</div>'+
        '<h3 class="text-center">Multiplication par un scalaire</h3>'+
        '<div class="row my-3">'+
            '<div class="col-12 col-lg-6 text-center my-3">Veuillez entrer un nombre : <input onchange="multiplierMatriceParScalaire()" type="number" value="'+scalaire+'" id="scalaire"></div>'+
            '<div class="col-12 col-lg-6 text-center my-3"><span class="btn btn-info" onclick="difinirMatriceMultiScalaireCommePrinci()">Définir la matrice résultante comme la matrice principale</span></div>'+
        '</div>'+
        '<h4 class="text-center">Matrice résultante</h4>'+
        '<div id="resultat" class="d-flex justify-content-center mt-2 mw-100 flex-wrap"></div>';
        section.innerHTML = pageMatrice;
        multiplierMatriceParScalaire();
    };

    //Fonction pour multiplier le tableau de la matrice par un scalaire 
    let multiplierMatriceParScalaire = () => {
        arrResultat = [];
        scalaire = document.getElementById("scalaire").value;
        for(let i=0; i < lignes; i++){
            arrResultat.push([]);
            for(let j=0; j < colonnes; j++){
                arrResultat[i].push(arrMatrice[i][j] * scalaire);
            }
        }
        afficherMatriceResultante(arrResultat, lignes, colonnes);
    };

    //Fonction pour definir la matrice résultante de la multiplication par scalaire comme la matrice principale
    let difinirMatriceMultiScalaireCommePrinci = () =>
    {
        arrMatrice = [...arrResultat];
        afficherPageDefinitionMatrice();
    }

/*****************************************************************************************************************/

/******************************************PAGE D'ÉGALITÉ ENTRE DEUX MATRICES*************************************/

    //Fonction pour afficher la page d'égalité entre deux matrices
    let afficherPageEgaliteEntreMatrices = () => {
        let pageMatrice = '<div class="d-flex align-items-center pl-4 py-1 m-4 border chemin">'+
            '<svg class="mx-1" width="17" height="17" viewBox="0 0 486.196 486.196">'+
                '<path d="M481.708,220.456l-228.8-204.6c-0.4-0.4-0.8-0.7-1.3-1c-5-4.8-13-5-18.3-0.3l-228.8,204.6c-5.6,5-6,13.5-1.1,19.1 c2.7,3,6.4,4.5,10.1,4.5c3.2,0,6.4-1.1,9-3.4l41.2-36.9v7.2v106.8v124.6c0,18.7,15.2,34,34,34c0.3,0,0.5,0,0.8,0s0.5,0,0.8,0h70.6 c17.6,0,31.9-14.3,31.9-31.9v-121.3c0-2.7,2.2-4.9,4.9-4.9h72.9c2.7,0,4.9,2.2,4.9,4.9v121.3c0,17.6,14.3,31.9,31.9,31.9h72.2 c19,0,34-18.7,34-42.6v-111.2v-34v-83.5l41.2,36.9c2.6,2.3,5.8,3.4,9,3.4c3.7,0,7.4-1.5,10.1-4.5 C487.708,233.956,487.208,225.456,481.708,220.456z M395.508,287.156v34v111.1c0,9.7-4.8,15.6-7,15.6h-72.2c-2.7,0-4.9-2.2-4.9-4.9 v-121.1c0-17.6-14.3-31.9-31.9-31.9h-72.9c-17.6,0-31.9,14.3-31.9,31.9v121.3c0,2.7-2.2,4.9-4.9,4.9h-70.6c-0.3,0-0.5,0-0.8,0 s-0.5,0-0.8,0c-3.8,0-7-3.1-7-7v-124.7v-106.8v-31.3l151.8-135.6l153.1,136.9L395.508,287.156L395.508,287.156z"/>'+
            '</svg>'+
            '<div class="d-flex couper">'+
                '<span class="mx-1">Accueil</span>'+
                '<span class="mx-1">></span>'+
                '<span class="mx-1">Opérations</span>'+
                '<span class="mx-1">></span>'+
                '<span class="mx-1">Egalité</span>'+
                '<span class="mx-1">entre</span>'+
                '<span class="mx-1">deux</span>'+
                '<span class="mx-1">matrices</span>'+
            '</div>'+
        '</div>'+
        '<h3 class="text-center my-3">Definissez une matrice secondaire !!!</h3>'+
        '<div class="row my-3">'+
            '<div class="col-12 col-lg-6 text-center my-3">Nombre de ligne : <input onchange="miseAJourNbrLigneSecondaire()" type="number" value="'+lignesSecondaire+'" id="ligne"></div>'+
            '<div class="col-12 col-lg-6 text-center my-3">Nombre de colonne : <input onchange="miseAJourNbrColonneSecondaire()" type="number" value="'+colonnesSecondaire+'" id="colonne"></div>'+
        '</div>'+
        '<div class="text-center"><span class="btn btn-info" onclick="testEgalite()">Tester l\'égalité entre la matrice principale et secondaire</span></div>'+
        '<div class="row mt-3" id="resultat"></div>'+
        '<div id="matrice" class="d-flex justify-content-center mw-100 flex-wrap"></div>';
        section.innerHTML = pageMatrice;
        afficherSecondeMatrice(arrMatriceSecondaire);
    };

    //Fonction pour tester l'égaliter entre la matrice principale et celle secondaire
    let testEgalite = () => {
        let estegal = true;
        if(lignes != lignesSecondaire || colonnes != colonnesSecondaire){
            estegal = false;
        }
        else{
            for(let i=0; i < lignes; i++){
                for(let j=0; j < colonnes; j++){
                    if(arrMatrice[i][j] != arrMatriceSecondaire[i][j]){
                        estegal = false;
                        break;
                    }
                }
                if(!estegal){
                    break;
                }
            }
        }
        if(estegal){
            document.getElementById("resultat").innerHTML = '<div class="col-11 col-lg-9 mx-auto">'+
                '<div class="alert alert-success alert-dismissible fade show" role="alert">'+
                '<h5 class="alert-heading">Les deux matrices sont égales</h5>'+
                '<button type="button" class="close" data-dismiss="alert" aria-label="Close">'+
                    '<span aria-hidden="true">×</span>'+
                '</button>'+
                '</div>'+
            '</div>';
        }
        else{
            document.getElementById("resultat").innerHTML = '<div class="col-11 col-lg-9 mx-auto">'+
                '<div class="alert alert-danger alert-dismissible fade show" role="alert">'+
                '<h5 class="alert-heading">Les deux matrices ne sont pas égales</h5>'+
                '<button type="button" class="close" data-dismiss="alert" aria-label="Close">'+
                    '<span aria-hidden="true">×</span>'+
                '</button>'+
                '</div>'+
            '</div>';
        }
        
    };

/*****************************************************************************************************************/

/******************************************PAGE DE LA TRANSPOSÉE D'UNE MATRICE************************************/

    //Fonction pour afficher la page de la transposée d'une matrice
    let afficherPageTransposeeMatrice = () => {
        let pageMatrice = '<div class="d-flex align-items-center pl-4 py-1 m-4 border chemin">'+
            '<svg class="mx-1" width="17" height="17" viewBox="0 0 486.196 486.196">'+
                '<path d="M481.708,220.456l-228.8-204.6c-0.4-0.4-0.8-0.7-1.3-1c-5-4.8-13-5-18.3-0.3l-228.8,204.6c-5.6,5-6,13.5-1.1,19.1 c2.7,3,6.4,4.5,10.1,4.5c3.2,0,6.4-1.1,9-3.4l41.2-36.9v7.2v106.8v124.6c0,18.7,15.2,34,34,34c0.3,0,0.5,0,0.8,0s0.5,0,0.8,0h70.6 c17.6,0,31.9-14.3,31.9-31.9v-121.3c0-2.7,2.2-4.9,4.9-4.9h72.9c2.7,0,4.9,2.2,4.9,4.9v121.3c0,17.6,14.3,31.9,31.9,31.9h72.2 c19,0,34-18.7,34-42.6v-111.2v-34v-83.5l41.2,36.9c2.6,2.3,5.8,3.4,9,3.4c3.7,0,7.4-1.5,10.1-4.5 C487.708,233.956,487.208,225.456,481.708,220.456z M395.508,287.156v34v111.1c0,9.7-4.8,15.6-7,15.6h-72.2c-2.7,0-4.9-2.2-4.9-4.9 v-121.1c0-17.6-14.3-31.9-31.9-31.9h-72.9c-17.6,0-31.9,14.3-31.9,31.9v121.3c0,2.7-2.2,4.9-4.9,4.9h-70.6c-0.3,0-0.5,0-0.8,0 s-0.5,0-0.8,0c-3.8,0-7-3.1-7-7v-124.7v-106.8v-31.3l151.8-135.6l153.1,136.9L395.508,287.156L395.508,287.156z"/>'+
            '</svg>'+
            '<div class="d-flex couper">'+
                '<span class="mx-1">Accueil</span>'+
                '<span class="mx-1">></span>'+
                '<span class="mx-1">Opérations</span>'+
                '<span class="mx-1">></span>'+
                '<span class="mx-1">Transposée</span>'+
                '<span class="mx-1">d\'une</span>'+
                '<span class="mx-1">matrice</span>'+
            '</div>'+
        '</div>'+
        '<h3 class="text-center my-4">Transposée de la matrice principale</h3>'+
        '<h4 class="text-center my-4">Matrice résultante</h4>'+
        '<div class="text-center my-4"><span class="btn btn-info" onclick="difinirMatriceTransposeCommePrinci()">Définir la matrice résultante comme la matrice principale</span></div>'+
        '<div id="matrice" class="row d-flex justify-content-center mw-100 flex-wrap"></div>';
        section.innerHTML = pageMatrice;
        if(lignes > 0 && colonnes > 0){
            afficherMatriceTransposee(matriceTransposee());
        }
        else{
            document.getElementById("matrice").innerHTML = "<div class='col-11 col-lg-9 alert alert-danger text-center'>Impossible d'obtenir la transposée de la matrice.</div>"
        }
    };

    //Fonction pour definir la matrice transposée de la matrice principale
    let matriceTransposee = () => {
        let arrMatriceTransposee = [];
        for(let i=0; i < colonnes; i++){
            arrMatriceTransposee.push([]);
            for(let j=0; j < lignes; j++){
                arrMatriceTransposee[i].push(arrMatrice[j][i]);
            }
        }
        return arrMatriceTransposee;
    };

    //Fonction pour afficher la matrice transposée
    let afficherMatriceTransposee = (arr) => {
        let matrice = "";
        for(let i=0; i<lignes; i++){
            matrice += "<div class='colonnes mx-2 my-5 text-center'><span>"+(i+1)+"</span>";
            for(let j=0; j<colonnes; j++){
                matrice += "<div class='input my-2 d-flex align-items-center justify-content-center'>"+arr[j][i]+"</div>";
            }
            matrice += "</div>";
        }
        document.getElementById("matrice").innerHTML = matrice;
    };

    let difinirMatriceTransposeCommePrinci = () => {
        if(arrResultat.length > 0 && arrResultat[0].length > 0){
            lignes = arrResultat.length;
            colonnes = arrResultat[0].length;
            arrMatrice = [...arrResultat];
            afficherPageDefinitionMatrice();
        }
    };

/*****************************************************************************************************************/

/******************************************PAGE DE SOMME DE DEUX MATRICES*****************************************/


    //Fonction pour afficher la page de somme de deux matrices
    let afficherPageSommeMatrice = () => {
        let pageMatrice = '<div class="d-flex align-items-center pl-4 py-1 m-4 border chemin">'+
            '<svg class="mx-1" width="17" height="17" viewBox="0 0 486.196 486.196">'+
                '<path d="M481.708,220.456l-228.8-204.6c-0.4-0.4-0.8-0.7-1.3-1c-5-4.8-13-5-18.3-0.3l-228.8,204.6c-5.6,5-6,13.5-1.1,19.1 c2.7,3,6.4,4.5,10.1,4.5c3.2,0,6.4-1.1,9-3.4l41.2-36.9v7.2v106.8v124.6c0,18.7,15.2,34,34,34c0.3,0,0.5,0,0.8,0s0.5,0,0.8,0h70.6 c17.6,0,31.9-14.3,31.9-31.9v-121.3c0-2.7,2.2-4.9,4.9-4.9h72.9c2.7,0,4.9,2.2,4.9,4.9v121.3c0,17.6,14.3,31.9,31.9,31.9h72.2 c19,0,34-18.7,34-42.6v-111.2v-34v-83.5l41.2,36.9c2.6,2.3,5.8,3.4,9,3.4c3.7,0,7.4-1.5,10.1-4.5 C487.708,233.956,487.208,225.456,481.708,220.456z M395.508,287.156v34v111.1c0,9.7-4.8,15.6-7,15.6h-72.2c-2.7,0-4.9-2.2-4.9-4.9 v-121.1c0-17.6-14.3-31.9-31.9-31.9h-72.9c-17.6,0-31.9,14.3-31.9,31.9v121.3c0,2.7-2.2,4.9-4.9,4.9h-70.6c-0.3,0-0.5,0-0.8,0 s-0.5,0-0.8,0c-3.8,0-7-3.1-7-7v-124.7v-106.8v-31.3l151.8-135.6l153.1,136.9L395.508,287.156L395.508,287.156z"/>'+
            '</svg>'+
            '<div class="d-flex couper">'+
                '<span class="mx-1">Accueil</span>'+
                '<span class="mx-1">></span>'+
                '<span class="mx-1">Opérations</span>'+
                '<span class="mx-1">></span>'+
                '<span class="mx-1">Somme</span>'+
                '<span class="mx-1">de</span>'+
                '<span class="mx-1">deux</span>'+
                '<span class="mx-1">matrices</span>'+
            '</div>'+
        '</div>'+
        '<h3 class="text-center my-3">Definissez une matrice secondaire !!!</h3>'+
        '<div class="row my-3">'+
            '<div class="col-12 col-lg-6 text-center my-3">Nombre de ligne : <input onchange="miseAJourNbrLigneSecondaire()" type="number" value="'+lignesSecondaire+'" id="ligne"></div>'+
            '<div class="col-12 col-lg-6 text-center my-3">Nombre de colonne : <input onchange="miseAJourNbrColonneSecondaire()" type="number" value="'+colonnesSecondaire+'" id="colonne"></div>'+
        '</div>'+
        '<div class="text-center"><a href="#m"><span class="btn btn-info" onclick="faireSomme()">Faire la somme de la matrice principale et celle secondaire</span></a></div>'+
        '<div id="matrice" class="d-flex justify-content-center mw-100 flex-wrap"></div>'+
        '<h3 class="text-center mt-5" id="m">Matrice resultante de la somme !!!</h3>'+
        '<div class="text-center my-4"><span class="btn btn-info" onclick="difinirMatriceSommeCommePrinci()">Définir la matrice résultante comme la matrice principale</span></div>'+
        '<div class="row mt-3 d-flex justify-content-center" id="resultat"></div>';
        section.innerHTML = pageMatrice;
        afficherSecondeMatrice(arrMatriceSecondaire);
    };

    //Fonction pour faire la somme de la matrice principale et celle secondaire
    let faireSomme = () => {
        arrResultat = [];
        if(lignes == lignesSecondaire && colonnes == colonnesSecondaire){
            if(lignes > 0 && colonnes > 0){ 
                for(let i=0; i < lignes; i++){
                    arrResultat.push([]);
                    for(let j=0; j < colonnes; j++){
                        arrResultat[i].push(arrMatrice[i][j] + arrMatriceSecondaire[i][j]);
                    }
                }
                afficherMatriceResultante(arrResultat, lignes, colonnes);
            }
            else{
                document.getElementById("resultat").innerHTML = "<div class='col-11 col-lg-9 alert alert-danger mx-auto'>Impossible de faire la somme avec une matrice vide.</div>";
            }
        }
        else{
            document.getElementById("resultat").innerHTML = "<div class='col-11 col-lg-9 alert alert-danger mx-auto'>Impossible de faire la somme de deux matrices qui n'ont pas le même nombre de ligne et de colonne.</div>";
        }
    };

    //Fonction pour definir la matrice résultante de la multiplication par scalaire comme la matrice principale
    let difinirMatriceSommeCommePrinci = () =>
    {
        if(arrResultat.length != 0){
            arrMatrice = [...arrResultat];
            afficherPageDefinitionMatrice();
        }
    }

/*****************************************************************************************************************/

/******************************************PAGE DE PRODUIT DE DEUX MATRICES***************************************/

    //Fonction pour afficher la page de produit de deux matrices
    let afficherPageProduitMatrices = () => {
        let pageMatrice = '<div class="d-flex align-items-center pl-4 py-1 m-4 border chemin">'+
            '<svg class="mx-1" width="17" height="17" viewBox="0 0 486.196 486.196">'+
                '<path d="M481.708,220.456l-228.8-204.6c-0.4-0.4-0.8-0.7-1.3-1c-5-4.8-13-5-18.3-0.3l-228.8,204.6c-5.6,5-6,13.5-1.1,19.1 c2.7,3,6.4,4.5,10.1,4.5c3.2,0,6.4-1.1,9-3.4l41.2-36.9v7.2v106.8v124.6c0,18.7,15.2,34,34,34c0.3,0,0.5,0,0.8,0s0.5,0,0.8,0h70.6 c17.6,0,31.9-14.3,31.9-31.9v-121.3c0-2.7,2.2-4.9,4.9-4.9h72.9c2.7,0,4.9,2.2,4.9,4.9v121.3c0,17.6,14.3,31.9,31.9,31.9h72.2 c19,0,34-18.7,34-42.6v-111.2v-34v-83.5l41.2,36.9c2.6,2.3,5.8,3.4,9,3.4c3.7,0,7.4-1.5,10.1-4.5 C487.708,233.956,487.208,225.456,481.708,220.456z M395.508,287.156v34v111.1c0,9.7-4.8,15.6-7,15.6h-72.2c-2.7,0-4.9-2.2-4.9-4.9 v-121.1c0-17.6-14.3-31.9-31.9-31.9h-72.9c-17.6,0-31.9,14.3-31.9,31.9v121.3c0,2.7-2.2,4.9-4.9,4.9h-70.6c-0.3,0-0.5,0-0.8,0 s-0.5,0-0.8,0c-3.8,0-7-3.1-7-7v-124.7v-106.8v-31.3l151.8-135.6l153.1,136.9L395.508,287.156L395.508,287.156z"/>'+
            '</svg>'+
            '<div class="d-flex couper">'+
                '<span class="mx-1">Accueil</span>'+
                '<span class="mx-1">></span>'+
                '<span class="mx-1">Opérations</span>'+
                '<span class="mx-1">></span>'+
                '<span class="mx-1">Produit</span>'+
                '<span class="mx-1">de</span>'+
                '<span class="mx-1">deux</span>'+
                '<span class="mx-1">matrices</span>'+
            '</div>'+
        '</div>'+
        '<h3 class="text-center my-3">Definissez une matrice secondaire !!!</h3>'+
        '<div class="row my-3">'+
            '<div class="col-12 col-lg-6 text-center my-3">Nombre de ligne : <input onchange="miseAJourNbrLigneSecondaire()" type="number" value="'+lignesSecondaire+'" id="ligne"></div>'+
            '<div class="col-12 col-lg-6 text-center my-3">Nombre de colonne : <input onchange="miseAJourNbrColonneSecondaire()" type="number" value="'+colonnesSecondaire+'" id="colonne"></div>'+
        '</div>'+
        '<div class="text-center"><a href="#m"><span class="btn btn-info" onclick="faireProduit()">Faire le produit de la matrice principale avec celle secondaire</span></a></div>'+
        '<div id="matrice" class="d-flex justify-content-center mw-100 flex-wrap"></div>'+
        '<h3 class="text-center mt-5" id="m">Matrice resultante du produit !!!</h3>'+
        '<div class="text-center my-4"><span class="btn btn-info" onclick="difinirMatriceSommeCommePrinci()">Définir la matrice résultante comme la matrice principale</span></div>'+
        '<div class="row mt-3 d-flex justify-content-center" id="resultat"></div>';
        section.innerHTML = pageMatrice;
        afficherSecondeMatrice(arrMatriceSecondaire);
    };

    //Fonction pour le produit de la matrice principale avec celle secondaire
    let faireProduit = () => {
        arrResultat = [];
        if(colonnes == lignesSecondaire){
            if(lignes > 0 && colonnes > 0 && colonnesSecondaire > 0){
                for(let i=0; i < lignes; i++){
                    arrResultat.push([]);
                    for(let j=0; j < colonnesSecondaire; j++){
                        arrResultat[i].push(0);
                        for(let k=0; k < colonnes; k++){
                            arrResultat[i][j] += arrMatrice[i][k] * arrMatriceSecondaire[k][j];
                        }
                    }
                }
                afficherMatriceResultante(arrResultat, lignes, colonnesSecondaire);
            }
            else{
                document.getElementById("resultat").innerHTML = "<div class='col-11 col-lg-9 alert alert-danger mx-auto'>Impossible de faire le produit avec une matrice vide.</div>";
            }
        }
        else{
            document.getElementById("resultat").innerHTML = "<div class='col-11 col-lg-9 alert alert-danger mx-auto'>Impossible de faire le produit des matrices dont le nombre de colonne de la première n'est pas égale au nombre de ligne de la seconde.</div>";
        }
    };

/*****************************************************************************************************************/