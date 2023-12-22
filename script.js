// G-Version - Split the Nota
// Skriv din pseudokod innanför nedanstående kommentarsblock

    /* SPLIT THE NOTA */

/*

START

    DO
        SET variabel kostnadSumma = användarinput mellan 1 - 99999
        IF kostnadSumma < 1 ELLER kostnadSumma > 99999 THEN
            PRINT "Felaktig input! Ange en summa mellan 1 och 99999."
        ENDIF // I praktiken skulle man väl kunna skriva koden så att användaren bara har tillgång till siffror och inte kan lägga in något annat än värden mellan 1 - 99999 men skrev ut detta ändå.
    WHILE kostnadSumma < 1 ELLER kostnadSumma > 99999

    DO
        SET variabel antalPersoner = användarinput mellan 1 - 99999
        IF antalPersoner < 1 ELLER antalPersoner > 99999 THEN
            PRINT "Felaktig input! Ange ett NUMMER mellan 1 och 99999."
        ENDIF // I praktiken skulle man väl kunna skriva koden så att användaren bara har tillgång till siffror och inte kan lägga in något annat än värden mellan 1 - 99999 men skrev ut detta ändå.
    WHILE antalPersoner < 1 ELLER antalPersoner > 99999

    DO
        SET variabel dricks = användarinput mellan 0 - 1 
        IF dricks < 0 ELLER dricks > 1 THEN
            PRINT "Felaktig input! Ange dricks i DECIMALFORM mellan 0 och 1." 
        ENDIF  // I praktiken skulle man väl kunna skriva koden så att användaren bara har tillgång till siffror och en punkt och inte kan lägga in något annat än värden mellan 0 - 1 men skrev ut detta ändå.
    WHILE dricks < 0 ELLER dricks > 1

    FUNCTION named "totalSumma" with parameters kostnadSumma, dricks
        CALCULATE totalSumma = kostnadSumma + (kostnadSumma * dricks)
        RETURN totalSumma
    ENDFUNCTION  

    FUNCTION named "summaPerPerson" with parameters totalSumma, antalPersoner
        CALCULATE summaPerPerson = totalSumma / antalPersoner
        RETURN summaPerPerson
    ENDFUNCTION

    PRINT "Total summa inklusive dricks: " + CALL FUNCTION named "totalSumma" with parameters kostnadSumma, dricks
    PRINT "Summa per person: " + CALL FUNCTION named "summaPerPerson" with parameters totalSumma, antalPersoner

END

*/