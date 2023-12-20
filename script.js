// G-Version - Split the Nota
// Skriv din pseudokod innanför nedanstående kommentarsblock
/*

Start Funktion splittheNOTA (uträkning baserat på summan, antalVänner och dricks 0.10)

    //Användaren matar in följande i programmet.
    input summa = 1000;
    input antalVänner = 4;
    input dricksProcent = 0.10;

    //programet ska sedan räkna ut vad varje person ska betala.
    SET variabel totalbelopp = calculate totaltBelopp = summa * (1 + dricks);
    SET variabel summaPerVän = calculate summaPerVän = totalBelopp / antalVänner;
  
    //Resultat
    PRINT "Varje vän ska betala:" + summaPerVän + kr 
end function

*/




// VG-Version - Lewis Carroll Word Puzzle
// Skriv din pseudokod innanför nedanstående kommentarsblock
/*



function isOneLetterApart(wordOne, wordTwo)
    SET variabel diffCount till 0;
    FOR (Loopa genom alla bokstavsindex i wordOne)
        IF (om index för wordOne är skiljt ifrån index för wordTwo)
            diffCount++;
    return diffCount === 1; // returnerar sant om endast en bokstav ändrats, annars falskt
end function

Start //Program

    SET variabel ordBok = [..., ..., ...]; // Innehåller ALLA ord i det engelska språket
    SET variabel startOrd till "BEAR";
    SET variabel slutord till "SLED";

    while startOrd !== slutOrd                           //LOOP
        SET variabel nyttOrd = användarinput;
        IF nyttOrd har lika många bokstäver som startOrd
            IF ordBok innehåller nyttOrd OCH isOneLetterApart är sant
                startOrd = nyttOrd;
            ELSE
                PRINT "Felaktig input";
        ELSE
            PRINT "Felaktig input"
            
    PRINT "Grattis du vann!"

END
*/