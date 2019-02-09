(function () {
    var myQuestions = [
        {
            question: "1.To prepare 400 g of the solution of argentum nitrate took 80 g of a  salt. What mass fraction of this salt has in the solution?",
            answers: {
                a: "80 %",
                b: "40 %",
                c: "20 mol/l",
                d: "20 %",
                e: "10%"
            },
            correctAnswer: "d"
        },
        {
            question: "2.The amount of a solute required to prepare 10 litres of decimolar solution is:",
            answers: {
                a: "0.01",
                b: "0.2",
                c: "0.05",
                d: "1.0",
                e: "2.0"
            },
            correctAnswer: "d"
        },
        {
            question: "3.One kilogram of water contains 4 g of NaOH. The concentration of the solution is best expressed as:",
            answers: {
                a: "0.1 mole/kg",
                b: "0.5 mole/kg",
                c: "2.5 mole/kg",
                d: "0.01 mole/kg",
                e: "2.0 mole/kg"
            },
            correctAnswer: "a"
        },
        {
            question: "4.The mass of calcium hydroxide in 100 ml of 0.01 M solution will be:",
            answers: {
                a: "1.48 g",
                b: "74.0 g",
                c: "14.8 g",
                d: "0.074 g",
                e: "0.84 g"
            },
            correctAnswer: "d"
        },
        {
            question: "5.An aqueous solution containing 6 g of urea in 500 ml of solution has a density equal to 1.05. If the molar mass of urea is 60, then the molality of solution is:",
            answers: {
                a: "0.20",
                b: "0.19",
                c: "0.10",
                d: "1.2",
                e: "1.3"
            },
            correctAnswer: "b"
        },
        {
            question: "6.The molar mass of equivalent of sulfuric acid (Мr(Н2SО4) = 98 g/mole ) is:",
            answers: {
                a: "25 g/mole",
                b: "98 g/mole",
                c: "32 g/mole",
                d: "196 g/mole",
                e: "49 g/mole"
            },
            correctAnswer: "e"
        },
        {
            question: "7.To prepare 200 g of 10% solution of potassium iodide should take:",
            answers: {
                a: "20 g KI",
                b: "2 g KI",
                c: "0.2 g KI",
                d: "10 g KI",
                e: "4 g KI"
            },
            correctAnswer: "a"
        },
        {
            question: "8.What acid has the largest concentration of hydrogen ions in 0.1 M solution?",
            answers: {
                a: "H2CO3",
                b: "H2SO4",
                c: "HCl",
                d: "CH3COOH",
                e: "H2SO3"
            },
            correctAnswer: "b"
        },
        {
            question: "9.In the pharmaceutical analysis, as a titrant is using 0.1 M solution of hydrochloric acid. How much of this acid can be made to base of 100 ml of 0.5 M solution of HCl?",
            answers: {
                a: "500 ml",
                b: "50 ml",
                c: "200 ml",
                d: "1000 ml",
                e: "5000 ml"
            },
            correctAnswer: "a"
        },
        {
            question: "10.To prepare of 500 g of hypertonic solution of sodium chloride with mass fraction of 10% is necessary:",
            answers: {
                a: "5 g",
                b: "0.5 g",
                c: "25 g",
                d: "50 g",
                e: "150 g"
            },
            correctAnswer: "d"
        },
        {
            question: "11.To prepare 1 liter of 0.1 M solution of sulfuric acid (Mr (H2SO4) = 98 g/mole) must will take:",
            answers: {
                a: "20 g",
                b: "180 g",
                c: "9.8 g",
                d: "49 g",
                e: "28 g"
            },
            correctAnswer: "c"
        },
        {
            question: "12.What molecular mass of an unknown gas does if the density of hydrogen is 20?",
            answers: {
                a: "10 g/mole",
                b: "40 g/mole",
                c: "20 g/mole",
                d: "30 g/mole",
                e: "50 g/mole"
            },
            correctAnswer: "b"
        },
        {
            question: "13.The molar equivalent mass to calcium hydroxide (Mr(Ca(OH)2) = 74 g/mole) equals:",
            answers: {
                a: "30 g/mole",
                b: "19 g/mole",
                c: "37 g/mole",
                d: "74 g/mole",
                e: "148 g/mole"
            },
            correctAnswer: "c"
        },
        {
            question: "14.To the preparation of 1 liter 1 M solution of sodium chloride necessaries to take of NaCl:",
            answers: {
                a: "70g",
                b: "60 g",
                c: "58.5 g",
                d: "82 g",
                e: "50.5 g"
            },
            correctAnswer: "c"
        },
        {
            question: "15.How much solute does contain in 3 l of a solution with the concentration 2 mole/l of a solution?",
            answers: {
                a: "1 mole",
                b: "2 mole",
                c: "3 mole",
                d: "10 mole",
                e: "6 mole"
            },
            correctAnswer: "e"
        },
        {
            question: "16.The using of this formula determines W = m(solute) / m(solution) :",
            answers: {
                a: "Mass fraction",
                b: "Volume fraction",
                c: "Mole fraction",
                d: "Titer",
                e: "Molality"
            },
            correctAnswer: "e"
        },
        {
            question: "17.How much solute does contain in 4 liters of a solution with concentration 1 mole/l of a solution?",
            answers: {
                a: "2 mole",
                b: "4 mole",
                c: "1 mole",
                d: "8 mole",
                e: "7 mole"
            },
            correctAnswer: "b"
        },
        {
            question: "18.How many grams of a solute does contain in 100 g 15 % solution of glucose?",
            answers: {
                a: "25 g",
                b: "15 g",
                c: "100 g",
                d: "85 g",
                e: "20 g"
            },
            correctAnswer: "b"
        },
        {
            question: "19.What mass fraction of sugar in a solution does contain 10 g sugar in 20 g of a solution?",
            answers: {
                a: "20 %",
                b: "30 %",
                c: "10 %",
                d: "50 %",
                e: "60 %"
            },
            correctAnswer: "d"
        },
        {
            question: "20.This formula CM = v(solute) / V(solution) used to calculate:",
            answers: {
                a: "Titer",
                b: "Molality",
                c: "Molarity",
                d: "Mole fraction",
                e: "Volume fraction"
            },
            correctAnswer: "c"
        },
        {
            question: "21.This formula ф = V(solute) / V(solvent) + V(solute)  used to calculate:",
            answers: {
                a: "Titer",
                b: "Molality",
                c: "Molarity",
                d: "Mole fraction",
                e: "Volume fraction"
            },
            correctAnswer: "e"
        },
        {
            question: "22.This formula X = v(solute) / v(solvent) + v(solute) used to calculate:",
            answers: {
                a: "Titer",
                b: "Molality",
                c: "Molarity",
                d: "Mole fraction",
                e: "Volume fraction"
            },
            correctAnswer: "d"
        },
        {
            question: "23.What is the solvent in 70% alcohol solution?",
            answers: {
                a: "Alcohol",
                b: "Sugar",
                c: "Water        ",
                d: "Kerosene",
                e: "Aldehyde"
            },
            correctAnswer: "a"
        },
        {
            question: "24.The osmotic pressure of equimolar solutions of glucose, sodium chloride and barium chloride will be in the order:",
            answers: {
                a: "BaCl2 > NaCl > glucose",
                b: "BaCl2 > glucose > NaCl",
                c: "Glucose > BaCl2> NaCl",
                d: "NaCl > BaCl2 > glucose",
                e: "Glucose > NaCl > BaCl2"
            },
            correctAnswer: "a"
        },
        {
            question: "25.The osmotic pressure of 0.2 molar solution of urea at 270C is:",
            answers: {
                a: "498.84 Pa",
                b: "4.9884 Pa",
                c: "50 Pa",
                d: "515.74 Pa",
                e: "709.09 Pa"
            },
            correctAnswer: "a"
        },
        {
            question: "26.To choose the correct answer for the osmotic pressure in solutions of no electrolytes:",
            answers: {
                a: "π = CНRT",
                b: "π = CMR",
                c: "π = CMT",
                d: "π = CМRT",
                e: "π = WRT"
            },
            correctAnswer: "d"
        },
        {
            question: "27.To choose the correct answer for the Raul's second law:",
            answers: {
                a: "ΔTb= K•Cm",
                b: "ΔTb = E•Cn",
                c: "ΔTb = E•CМ",
                d: "ΔTb= E•Т",
                e: "ΔTb = E•Cm"
            },
            correctAnswer: "e"
        },
        {
            question: "28.To choose the correct answer for the Raul's second law:",
            answers: {
                a: "ΔTf = K•Cm",
                b: "ΔTf = К•Cn",
                c: "ΔTf = К•CМ",
                d: "ΔTf = К•Т",
                e: "ΔTf = E•Cm"
            },
            correctAnswer: "a"
        },
        {
            question: "29.The size R, it used in the equation π = CМRT is:",
            answers: {
                a: "Planck's constant",
                b: "Universal gas constant",
                c: "Avogadro's constant",
                d: "Boltzmann's constant",
                e: "The number  of Faraday"
            },
            correctAnswer: "b"
        },
        {
            question: "30.The universal gas constant R measures in:",
            answers: {
                a: "J ·mole ·К",
                b: "mole· К",
                c: "mole",
                d: "J",
                e: "J/mole ·К"
            },
            correctAnswer: "e"
        },
        {
            question: "31.To choose the correct answer for increasing of the boiling point:",
            answers: {
                a: "ΔТb =Тb solution / Тb solvent",
                b: "ΔТb =1 - Тb solvent",
                c: "ΔТb =Тb solution ·Тb solvent",
                d: "ΔТb =Тb solvent –Тb solution",
                e: "ΔТb =Тb solution – Тb solvent"
            },
            correctAnswer: "e"
        },
        {
            question: "32.To choose the correct answer for lowering the temperature of freezing:",
            answers: {
                a: "ΔТf =Тf solution / Тf solvent",
                b: "ΔТf =1 – Тf solvent",
                c: "ΔТf =Тf solution ·Тf solvent",
                d: "ΔТf =Тf solvent / Тf solution",
                e: "ΔТf =Тf solvent – Тf solution"
            },
            correctAnswer: "e"
        },
        {
            question: "33.Which colligative property measurement is best to use for compounds with a molar mass greater than 5000 g/mole?",
            answers: {
                a: "Osmotic pressure",
                b: "Freezing point depression",
                c: "Boiling point elevation",
                d: "Vapor pressure lowering",
                e: "Titration"
            },
            correctAnswer: "a"
        },
        {
            question: "34.Osmotic pressure of human blood plasma is equal:",
            answers: {
                a: "8.7 atm",
                b: "6.7 atm",
                c: "8.2 atm",
                d: "7.7 atm",
                e: "7.2 atm"
            },
            correctAnswer: "d"
        },
        {
            question: "35.When cells are placed in 5 % solution of sodium chloride so red blood cells will swell. What is the process?",
            answers: {
                a: "Hemolysis",
                b: "Dissolution",
                c: "Plasmolysis",
                d: "Diffusion",
                e: "Electrophoresis"
            },
            correctAnswer: "c"
        },
        {
            question: "36.Hemolysis is the phenomenon when cells are placed in sodium chlorate solution with:",
            answers: {
                a: "0.9 %",
                b: "2.9 %",
                c: "0.5 %",
                d: "1.5 %",
                e: "2.5 %"
            },
            correctAnswer: "c"
        },
        {
            question: "37.What happen with red blood cells, when they are placed in 1% glucose solution? What is the process?",
            answers: {
                a: "Hemolysis",
                b: "Dissolution",
                c: "Plasmolysis",
                d: "Diffusion",
                e: "Does not change"
            },
            correctAnswer: "a"
        },
        {
            question: "38.How changes the solubility of oxygen in blood with increasing the pressure?",
            answers: {
                a: "Increases",
                b: "Decreases proportionally",
                c: "Decreases",
                d: "Depends of the value of pressure",
                e: "Does not change"
            },
            correctAnswer: "a"
        },
        {
            question: "39.The primary standard solution for establishment of the normality of HCl is:",
            answers: {
                a: "Sodium chloride",
                b: "Sodium tetraborate",
                c: "Sodium sulfate",
                d: "Sodium acetate",
                e: "Sodium silicate"
            },
            correctAnswer: "b"
        },
        {
            question: "40.What is the color of phenolphthalein in a basic medium?",
            answers: {
                a: "Colorless",
                b: "Dark blue",
                c: "Crimson",
                d: "Orange",
                e: "Yellow"
            },
            correctAnswer: "c"
        },
        {
            question: "41.What is the color of phenolphthalein in a neutral medium?",
            answers: {
                a: "Colorless",
                b: "Dark blue",
                c: "Pink",
                d: "Orange",
                e: "Yellow"
            },
            correctAnswer: "a"
        },
        {
            question: "42.It is used the solution of Na2CO3 ·10 H2O as a primary standard in:",
            answers: {
                a: "Acid-base titration",
                b: "Complexation titration",
                c: "Precipitation titration",
                d: "Oxidation-reduction titration",
                e: "Sedimentation"
            },
            correctAnswer: "a"
        },
        {
            question: "43.The concentration of NaOH is 0.5 M, if 20 ml is needed to titrate 35 ml of acid, what is the concentration of the acid?",
            answers: {
                a: "0.875 M",
                b: "0.95 M",
                c: "0.375 M",
                d: "0.565 M",
                e: "0.75 M"
            },
            correctAnswer: "a"
        },
        {
            question: "44.The concentration of NaOH is 0.1 M, if 20 ml is needed to titrate 30 ml of acid, what is the concentration of the acid?",
            answers: {
                a: "0.1 M",
                b: "0.45 M",
                c: "0.15 M",
                d: "0.25 M",
                e: "0.75 M"
            },
            correctAnswer: "c"
        },
        {
            question: "45.The concentration of NaOH is 2 M, if 20 ml is needed to titrate 40 ml of acid, what is the concentration of the acid?",
            answers: {
                a: "1 M",
                b: "0.5 M",
                c: "6 M",
                d: "4 M",
                e: "5 M"
            },
            correctAnswer: "d"
        },
        {
            question: "46.If 20 ml of 0.1 M HCl are titrated with 25 ml of NaOH solution. What is the molarity of NaOH solution?",
            answers: {
                a: "1 M",
                b: "0.125 M",
                c: "0.25 M",
                d: "1.5 M",
                e: "0.15 M"
            },
            correctAnswer: "b"
        },
        {
            question: "47.If 10 ml of 0.1 M HCl are titrated with 100 ml of NaOH solution. What is the molarity of NaOH solution?",
            answers: {
                a: "1 M",
                b: "0.125 M",
                c: "0.25 M",
                d: "1.5 M",
                e: "0.15 M"
            },
            correctAnswer: "a"
        },
        {
            question: "48.The concentration of LiOH is 0.5 M. If 25 ml of LiOH is needed to titrate 40 ml of HNO3, what is the concentration of HNO3?",
            answers: {
                a: "2 M",
                b: "0.5 M",
                c: "0.75 M",
                d: "1.5 M",
                e: "0.8 M"
            },
            correctAnswer: "e"
        },
        {
            question: "49.The concentration of KOH is 0.2 M. If 32 ml of KOH is needed to titrate 80 ml of HCl, what is the concentration of HCl?",
            answers: {
                a: " 2 M",
                b: " 0.5 M",
                c: "0.75 M",
                d: "1.5 M",
                e: " 3 M"
            },
            correctAnswer: "b"
        },
        {
            question: "50.The concentration of KOH is 2 M. If 10 ml of KOH is needed to titrate 20 ml of HCl, what is the concentration of HCl?",
            answers: {
                a: " 2 M",
                b: " 4 M",
                c: "0.75 M",
                d: "1.5 M",
                e: " 3 M"
            },
            correctAnswer: "b"
        },
        {
            question: "51.Titrants of the neutralization method are standard solutions of acids and alkalis. To choose the substance for standardization of HCl solution:",
            answers: {
                a: " H2C2O4",
                b: " CaCO3",
                c: "HNO3",
                d: "Na2S2O3",
                e: " Na2CO3"
            },
            correctAnswer: "e"
        },
        {
            question: "52.To 10 mL of 0.1 mol/L sodium hydrocarbonate solution add 9 mL of 0.1 mole/L HCl solution. Which colour will be in a solution in the presence of methyl orange:",
            answers: {
                a: " Colourless",
                b: " Red",
                c: "Crimson",
                d: "Orange-pink",
                e: " Yellow"
            },
            correctAnswer: "e"
        },
        {
            question: "53.Chloridic acid titrated by sodium hydroxide. This is method of:",
            answers: {
                a: " Complexonometry",
                b: " Redoxometry",
                c: " Neutralization",
                d: "Mercurymetry",
                e: " Iodometry"
            },
            correctAnswer: "c"
        },
        {
            question: "54.Back titration in the Volhard's method is possible to define:",
            answers: {
                a: " Chlorides and bromides",
                b: " Metal cations",
                c: " Halogenide- and thiocyanate-ions",
                d: "Ag+-ions",
                e: " Anions"
            },
            correctAnswer: "c"
        },
        {
            question: "55.Iron (ІІІ) complexonate is very stable complex, therefore for iron definition uses:",
            answers: {
                a: " Back titration in the neutral medium",
                b: " Direct titration in the acidic medium",
                c: "Displacement titration",
                d: "Back titration in the basic medium",
                e: " Direct titration in the medium of an ammoniac buffer solution"
            },
            correctAnswer: "b"
        },
        {
            question: "56.Trilon B is the secondary standard solution. Exact concentration is established by the:",
            answers: {
                a: " Standard solution of chloridic acid",
                b: " Standard solution of sodium hydroxide",
                c: " Standard solution of zinc",
                d: "Standard solution of sodium chloride",
                e: " Standard solution of ammonium thiocyanide"
            },
            correctAnswer: "c"
        },
        {
            question: "57.Which method you can use for determination the concentration of NaCl in a solution?",
            answers: {
                a: " Acid-base titration",
                b: " Chelatometry",
                c: " Precipitation",
                d: "Oxidation - reduction titration",
                e: " Sedimentation"
            },
            correctAnswer: "c"
        },
        {
            question: "58.Which method you can use for determination the concentration of potassium permanganate in a solution?",
            answers: {
                a: " Acid-base titration",
                b: " Chelatometry",
                c: "Precipitation",
                d: " Oxidation - reduction titration",
                e: " Sedimentation"
            },
            correctAnswer: "d"
        },
        {
            question: "59.It is used as the titrant in acid-base titration such compound:",
            answers: {
                a: " KCl",
                b: " NaHCO3",
                c: "Na2SO4",
                d: " HCl",
                e: " Cu(OH)2"
            },
            correctAnswer: "d"
        },
        {
            question: "60.What indicator does use in the acid-base titration?",
            answers: {
                a: " Erichrom black T",
                b: " Potassium chromate",
                c: " Methyl orange",
                d: "Potassium  permanganate",
                e: " Iodine solution"
            },
            correctAnswer: "c"
        },
        {
            question: "61.What compound does influense for the temporal hardness of water?",
            answers: {
                a: " CaCO3",
                b: " CaSO4",
                c: " Ca(HCO3)2",
                d: "Ca(OH)2",
                e: " CaCl2"
            },
            correctAnswer: "c"
        },
        {
            question: "62.What compound does influense for the permanent hardness of water?",
            answers: {
                a: " CaCO3",
                b: " CaSO4",
                c: "Ca(HCO3)2",
                d: "Ca(OH)2",
                e: " CaCl2"
            },
            correctAnswer: "b"
        },
        {
            question: "63.Water hardness is determined by the titrant:",
            answers: {
                a: " HCl",
                b: " NaOH",
                c: "KMnO4",
                d: "CuSO4",
                e: " DTA"
            },
            correctAnswer: "e"
        },
        {
            question: "64.The concentration of potassium permanganate is determined in the:",
            answers: {
                a: " Basic medium",
                b: " Neutral medium",
                c: "Weak basic medium",
                d: " Acidic medium",
                e: " Alcoholic solution"
            },
            correctAnswer: "d"
        },
        {
            question: "65.End points in acid-base titration were determined using:",
            answers: {
                a: " Erichrom black T",
                b: " Potassium chromate",
                c: " Methyl orange",
                d: "Potassium  permanganate",
                e: " Iodine solution"
            },
            correctAnswer: "c"
        },
        {
            question: "66.End points in argentometry were determined using:",
            answers: {
                a: " Erichrom black T",
                b: " Potassium chromate",
                c: "Methyl orange",
                d: "Potassium  permanganate",
                e: " Iodine solution"
            },
            correctAnswer: "b"
        },
        {
            question: "67.End points in complexometric were determined using:",
            answers: {
                a: " Erichrom black T",
                b: " Potassium chromate",
                c: "Methyl orange",
                d: "Potassium  permanganate",
                e: " Iodine solution"
            },
            correctAnswer: "a"
        },
        {
            question: "68.While potassium iodide is a powerful reducing agent?",
            answers: {
                a: " Iodide ion is oxidized to iodine",
                b: " Iodide ion is reduced to iodine",
                c: "Iodine is reduced to iodide ion",
                d: "Iodine is oxidized to iodide ion",
                e: " Potassium ion is reduced to iodine"
            },
            correctAnswer: "a"
        },
        {
            question: "69.When dichromate (VI) ion becomes reduced to chromium (III) ion, the change of color occurs from:",
            answers: {
                a: " Purple to pink",
                b: " Purple to colorless",
                c: "Orange to purple",
                d: " Orange to green",
                e: " Pink to dark"
            },
            correctAnswer: "d"
        },
        {
            question: "70.If potassium Iodide (KI) acts as oxidizing agent, change occurs from, indicates presence of:",
            answers: {
                a: " Colorless to brown",
                b: " Colorless to blue",
                c: "Brown to colorless",
                d: "Blue to colorless",
                e: " Orange to purple"
            },
            correctAnswer: "a"
        },
        {
            question: "71.What is the oxidation number of carbon in NaHCO3?",
            answers: {
                a: " +6",
                b: " +2",
                c: "-4",
                d: " +4",
                e: " -2"
            },
            correctAnswer: "d"
        },
        {
            question: "72.Which solution will change litmus to blue color?",
            answers: {
                a: " HCl",
                b: " NaCl",
                c: "CH3OH",
                d: " NaOH",
                e: " H2SO4"
            },
            correctAnswer: "d"
        },
        {
            question: "73.What solution will turn phenolphthalein to pink color?",
            answers: {
                a: " HBr",
                b: " H2CO3",
                c: " LiOH",
                d: "CH3OH",
                e: " H2SO4"
            },
            correctAnswer: "c"
        },
        {
            question: "74.What solution will turn litmus to red color?",
            answers: {
                a: " Ca(OH)2",
                b: " H2O",
                c: "LiOH",
                d: "KOH",
                e: " H2SO4"
            },
            correctAnswer: "e"
        },
        {
            question: "75.What solution will turn litmus to violet color?",
            answers: {
                a: " Ca(OH)2",
                b: " H2O",
                c: "LiOH",
                d: "KOH",
                e: " H2SO4"
            },
            correctAnswer: "b"
        },
        {
            question: "76.What solution will turn litmus to blue color?",
            answers: {
                a: " HCl",
                b: " H2O",
                c: "H2CO3",
                d: " KOH",
                e: " H2SO4"
            },
            correctAnswer: "d"
        },
        {
            question: "77.What is shown in the picture [image]?",
            answers: {
                a: " Measuring flask",
                b: " Measuring pipette",
                c: "Burette",
                d: "Measuring cylinder",
                e: " Conical flask"
            },
            correctAnswer: "e"
        },
        {
            question: "78.What is shown in the picture [image]?",
            answers: {
                a: " Measuring flask",
                b: " Measuring pipette",
                c: "Burette",
                d: " Measuring cylinder",
                e: " Conical flask"
            },
            correctAnswer: "d"
        },
        {
            question: "79.What is shown in the picture [image]?",
            answers: {
                a: " Measuring flask",
                b: " Measuring pipettes",
                c: "Burette",
                d: "Measuring cylinder",
                e: " Conical flask"
            },
            correctAnswer: "a"
        },
        {
            question: "80.To select the formula of a substance which solubles in water:",
            answers: {
                a: " BaSO4",
                b: " Na2SO4",
                c: "CaCO3",
                d: "H2SiO3",
                e: " AgCl"
            },
            correctAnswer: "b"
        },
        {
            question: "81.The pH value of a weak basic solution is:",
            answers: {
                a: " 12",
                b: " 9",
                c: "7",
                d: "4",
                e: " 6"
            },
            correctAnswer: "b"
        },
        {
            question: "82.The pH value of a strong basic solution is:",
            answers: {
                a: " 2",
                b: " 9",
                c: "7",
                d: "4",
                e: " 6"
            },
            correctAnswer: "a"
        },
        {
            question: "83.The pH value of a weak acidic solution is:",
            answers: {
                a: " 3",
                b: " 5",
                c: "7",
                d: "2",
                e: " 12"
            },
            correctAnswer: "b"
        },
        {
            question: "84.The pH value of a strong acidic solution is:",
            answers: {
                a: " 6",
                b: " 5",
                c: "7",
                d: " 2",
                e: " 12"
            },
            correctAnswer: "d"
        },
        {
            question: "85.Through few days in a glass with a solution of a salt formed crystals on the bottom.",
            answers: {
                a: " 15%",
                b: " 28.6%",
                c: " 50%",
                d: "14.2%",
                e: " 25%"
            },
            correctAnswer: "b"
        },
        {
            question: "86.The evaporation 200 g of a solution received 35 g of a salt. What mass fraction of a salt was in the solution?",
            answers: {
                a: " 7.5%",
                b: " 15.5%",
                c: "14.5%",
                d: "16.8%"
            },
            correctAnswer: "a"
        },
        {
            question: "87.The molar concentration of equivalents in 1000 ml of a solution which dissolved 4.9 g of sulfuric acid equals :",
            answers: {
                a: " 1 mol·equv/l",
                b: " 0.2 mol·equv/l",
                c: "0.1 mol·equv /l",
                d: "0.3 mol·equv/l",
                e: " 2 mol·equv/l"
            },
            correctAnswer: "b"
        },
        {
            question: "88.As an antiseptic means in medicine use an aqueous solution of potassium permanganate with a mass fraction KMnO4 0.2%. What mass of salt does need to prepare for such solution the mass 100 g ?",
            answers: {
                a: " 2 g",
                b: " 0.02 g",
                c: "20 g",
                d: " 0.2 g",
                e: " 0.1 g"
            },
            correctAnswer: "d"
        },
        {
            question: "89.What is a two molar solution? This solution, which contains:",
            answers: {
                a: " 2 g of a solute in 100 g of a solution",
                b: " 2 moles of a solute in 1 l of water",
                c: "2 moles of a solute in 1 l of a solvent",
                d: " 2 moles of a solute in 1 l of a solution",
                e: " 2 moles a solute in 2 l of a solution"
            },
            correctAnswer: "d"
        },
        {
            question: "90.For the calculation of which concentration to use this formula Cn = m(solute) / E(solute).V(solution)?",
            answers: {
                a: " Molality",
                b: " Molarity",
                c: "Volume fraction",
                d: "Mole fraction",
                e: " Normality"
            },
            correctAnswer: "e"
        },
        {
            question: "91.How much solute does contain in 4 liters of the solution with concentration 1 mole/l?",
            answers: {
                a: " 2 mole",
                b: " 1 mole",
                c: "5 mole",
                d: " 4 mole",
                e: " 8 mole"
            },
            correctAnswer: "d"
        },
        {
            question: "92.How much solute does contain in 100 g of 20% solution?",
            answers: {
                a: " 15 g",
                b: " 10 g",
                c: "30 g",
                d: "25 g",
                e: " 20 g"
            },
            correctAnswer: "e"
        },
        {
            question: "93.To prepare 5 liters of the solution of potassium sulfate took 15 mole of this substance. What molar concentration has of this solution?",
            answers: {
                a: " 4 mole/l",
                b: " 3 mole/l",
                c: "9 mole/l",
                d: "5 mole/l",
                e: " 2 mole/l"
            },
            correctAnswer: "b"
        },
        {
            question: "94.This formula T = m(solvent) / V(solute) used to calculate:",
            answers: {
                a: " Titer",
                b: " Molality",
                c: "Volume fraction",
                d: "Osmotic pressure",
                e: " Mole fraction"
            },
            correctAnswer: "a"
        },
        {
            question: "95.This formula  Cm = v(solute) / m(solvent) used to calculate:",
            answers: {
                a: " Titer",
                b: " Molality",
                c: "Molarity",
                d: "Mole fraction",
                e: " Volume fraction"
            },
            correctAnswer: "b"
        },
        {
            question: "96.What is the pH value of 0.05 М H2SO4 solution?",
            answers: {
                a: " 5",
                b: " 2",
                c: " 1",
                d: " 4",
                e: " 3"
            },
            correctAnswer: "c"
        },
        {
            question: "97.What is the pH value of 0.005 М Ba(OH)2 solution?",
            answers: {
                a: " 10",
                b: " 13",
                c: " 12",
                d: "11",
                e: " 9"
            },
            correctAnswer: "c"
        },
        {
            question: "98.What is the pH value of 0.01 N diluted monobasic acid solution (the degree of dissociation = 1%)",
            answers: {
                a: " 1",
                b: " 2",
                c: " 4",
                d: "3",
                e: " 5"
            },
            correctAnswer: "c"
        },
        {
            question: "99.What is the pH value of 0.001 M diluted monobasic acid solution (the degree of dissociation = 1%)",
            answers: {
                a: " 8",
                b: " 9",
                c: "10",
                d: "13",
                e: " 12"
            },
            correctAnswer: "b"
        },
        {
            question: "100.What medium is a solution, if it pH=6.5?",
            answers: {
                a: " Strong alkaline",
                b: " Neutral",
                c: " Weak acid",
                d: "Weak alkaline",
                e: " Strong acid"
            },
            correctAnswer: "c"
        },
        {
            question: "101.What is the pH value of the solution, if it concentration of [H3O+] = 1•10-6 mole/l?",
            answers: {
                a: " 8",
                b: " 6",
                c: "1",
                d: "7",
                e: " 4"
            },
            correctAnswer: "b"
        },
        {
            question: "102.What is the pH value of the solution, if it concentration of [H3O+] = 1•10-4 mole/l?",
            answers: {
                a: " 8",
                b: " 6",
                c: "1",
                d: "7",
                e: " 4"
            },
            correctAnswer: "e"
        },
        {
            question: "103.What is the pH value of the solution, if it concentration of [H3O+] = 1•10-2 mole/l?",
            answers: {
                a: " 2",
                b: " 6",
                c: "1",
                d: "7",
                e: " 4"
            },
            correctAnswer: "a"
        },
        {
            question: "104.What is the pH value of the solution, if it concentration of [H3O+] = 1•10-8 mole/l?",
            answers: {
                a: " 2",
                b: " 6",
                c: " 8",
                d: "7",
                e: " 4"
            },
            correctAnswer: "c"
        },
        {
            question: "105.What is the pOH value of the solution, if it concentration of [H3O+] = 1•10-8 mole/l?",
            answers: {
                a: " 2",
                b: " 6",
                c: "8",
                d: "7",
                e: " 4"
            },
            correctAnswer: "b"
        },
        {
            question: "106.What is the pH value of 0.001 mole/l HCl solution?",
            answers: {
                a: " 0.1",
                b: " 1.0",
                c: " 3.0",
                d: "2.0",
                e: " 0.5"
            },
            correctAnswer: "c"
        },
        {
            question: "107.What is the pH value of 0.01 mole/l HCl solution?",
            answers: {
                a: " 0.1",
                b: " 1.0",
                c: "3.0",
                d: " 2.0",
                e: " 0.5"
            },
            correctAnswer: "d"
        },
        {
            question: "108.What is the pH value of 0.1 mole/l HCl solution?",
            answers: {
                a: " 0.1",
                b: " 1.0",
                c: "3.0",
                d: "2.0",
                e: " 0.5"
            },
            correctAnswer: "b"
        },
        {
            question: "109.What is the pH value of 0.01 mole/l NaOH solution?",
            answers: {
                a: " 5",
                b: " 10",
                c: " 12",
                d: "8",
                e: " 9"
            },
            correctAnswer: "c"
        },
        {
            question: "110.What is the pH value of 0.001 mole/l NaOH solution?",
            answers: {
                a: " 5",
                b: " 11",
                c: "12",
                d: "8",
                e: " 9"
            },
            correctAnswer: "b"
        },
        {
            question: "111.What is the pOH value of the solution, if it concentration of [H3O+] = 1•10-4 mole/l?",
            answers: {
                a: " 8",
                b: " 6",
                c: " 10",
                d: "7",
                e: " 4"
            },
            correctAnswer: "c"
        },
        {
            question: "112.What is the pOH value of the solution, if it concentration of [H3O+] = 1•10-2 mole/l?",
            answers: {
                a: " 12",
                b: " 6",
                c: "1",
                d: "7",
                e: " 4"
            },
            correctAnswer: "a"
        },
        {
            question: "113.To a 10 ml solution of an acid with a hydrogen ion concentration of 10-2 mole/L, 1 liter of water is added. What is the pH of the solution now?",
            answers: {
                a: " 0",
                b: " 1",
                c: "2",
                d: "3",
                e: " 4"
            },
            correctAnswer: "a"
        },
        {
            question: "114.Which of the following salts will produce a solution with the highest pH?",
            answers: {
                a: "1 M NaNO3",
                b: " 1 M NaHSO4",
                c: " 1 M NaHCO3",
                d: "1 M NaH2PO4",
                e: " 1 M NaNO2"
            },
            correctAnswer: "c"
        },
        {
            question: "115.When a strong acid is titrated with a strong base, what will the pH value be at the equivalence point?",
            answers: {
                a: " 2.0",
                b: " 6.8",
                c: " 7.0",
                d: "8.6",
                e: " 5.5"
            },
            correctAnswer: "c"
        },
        {
            question: "116.Which of the following oxides dissolves to form a solution with a pH greater than 7?",
            answers: {
                a: " SO2",
                b: " CO2",
                c: "N2O",
                d: " 2O",
                e: " NO2"
            },
            correctAnswer: "d"
        },
        {
            question: "117.What is the approximate pH of a 0.1 M solution of the salt NH4Cl?",
            answers: {
                a: " 1",
                b: " 5",
                c: "7",
                d: "9",
                e: " 4"
            },
            correctAnswer: "b"
        },
        {
            question: "118.Which solution below has the highest concentration of hydroxide ions?",
            answers: {
                a: " pH = 3.2",
                b: " pH = 9.8",
                c: "pH = 7.9",
                d: " pH = 12.5",
                e: " pH = 7.0"
            },
            correctAnswer: "d"
        },
        {
            question: "119.Determine the pH of a 0.15 M aqueous solution of KF. For hydrofluoric acid, Ka = 7.0 ·10-4 .",
            answers: {
                a: " 5.83",
                b: " 6.59",
                c: " 8.16",
                d: "2.33",
                e: " 12.01"
            },
            correctAnswer: "c"
        },
        {
            question: "120.The pH of a 0.1 M solution of a weak base is 9.82. What is the Kb for this base?",
            answers: {
                a: " 4.3·10-8",
                b: " 2.0·10-5",
                c: "6.6·10-4",
                d: "2.1·10-4",
                e: " 8.8·10-8"
            },
            correctAnswer: "a"
        },
        {
            question: "121.How many times рН of a buffer solution does change, if it solution dissolves by 5 times?",
            answers: {
                a: " Once",
                b: " Twise",
                c: "Three times",
                d: "Four times",
                e: " Does not change"
            },
            correctAnswer: "e"
        },
        {
            question: "122.0.05 M solution of acetic acid and 0.05 M solution sodium acetic equal volumes",
            answers: {
                a: " 5.0",
                b: " 5.56",
                c: " 4.25",
                d: "4.73",
                e: " 3.73"
            },
            correctAnswer: "c"
        },
        {
            question: "123.0.1 M solution of acetic acid and 0.1 M solution sodium acetic equal volumes",
            answers: {
                a: " 5.0",
                b: " 5.56",
                c: " 4.25",
                d: "4.73",
                e: " 3.73"
            },
            correctAnswer: "c"
        },
        {
            question: "124.How many times рН of buffer solution does change, if it solution dissolved by 10 times?",
            answers: {
                a: " Does not change",
                b: " Twise",
                c: "Three times",
                d: "Four times",
                e: " Once"
            },
            correctAnswer: "a"
        },
        {
            question: "125.50 mls 0.1 M sodium dihydrophosphate solution has been added into 50 mls 0.1 M of potassium hydrophosphate solution. To calculate the pH of a buffer solution (pK2 H3PO4 = 7.21).",
            answers: {
                a: " 7.35",
                b: " 7.21",
                c: "7.68",
                d: "7.15",
                e: " 7.0"
            },
            correctAnswer: "b"
        },
        {
            question: "126.30 mls 0.2 M sodium dihydrophosphate solution has been added into 30 mls 0.2 M of potassium hydrophosphate solution. To calculate the pH of a buffer solution (pK2 H3PO4 = 7.21).",
            answers: {
                a: " 7.35",
                b: " 7.21",
                c: "7.68",
                d: "7.15",
                e: " 7.0"
            },
            correctAnswer: "b"
        },
        {
            question: "127.0.5 M solution of an ammonium hydroxide and 0.5 M solution of ammonium chloride equal volumes has been mixed. To calculate the pH of a buffer solution (pKb = 4.75).",
            answers: {
                a: " 4.52",
                b: " 4.56",
                c: " 4.75",
                d: "4.35",
                e: " 4.85"
            },
            correctAnswer: "c"
        },
        {
            question: "128.0.1 M solution of an ammonium hydroxide and 0.1 M solution of ammonium chloride equal volumes has been mixed. To calculate the pH of a buffer solution (pKb = 4.75).",
            answers: {
                a: " 4.52",
                b: " 4.56",
                c: " 4.75",
                d: "4.35",
                e: " 4.85"
            },
            correctAnswer: "c"
        },
        {
            question: "129.What solution has the great buffer capacity?",
            answers: {
                a: " 10/20",
                b: " 5/10",
                c: "50/100",
                d: "20/40",
                e: " 200/400"
            },
            correctAnswer: "e"
        },
        {
            question: "130.What solution has the great buffer capacity?",
            answers: {
                a: " 10/20",
                b: " 5/10",
                c: " 50/50",
                d: "20/40",
                e: " 200/400"
            },
            correctAnswer: "c"
        },
        {
            question: "131.What solution has the great buffer capacity?",
            answers: {
                a: " 10/20",
                b: " 1/2",
                c: "25/50",
                d: "20/40",
                e: " 20/20"
            },
            correctAnswer: "e"
        },
        {
            question: "132.What solution has the great buffer capacity?",
            answers: {
                a: " 10/20",
                b: " 500/1000",
                c: "50/100",
                d: "20/40",
                e: " 2/4"
            },
            correctAnswer: "b"
        },
        {
            question: "133.The buffer capacity will be maximal, if relation between of solution's components will be:",
            answers: {
                a: " 1",
                b: " 0",
                c: "4",
                d: "7",
                e: " 10"
            },
            correctAnswer: "b"
        },
        {
            question: "134.What equation is the buffer action equation, when hydrochloric acid is added to the phosphate buffer solution?",
            answers: {
                a: " СН3СООН + NaOH = СН3COONa + Н2О",
                b: " Na2HPO4  + HCl =  NaH2PO4 + NaCl",
                c: "СН3СООNа + HCl = СН3СООН + NaCl",
                d: "NaHCO3+ HCl =  H2CO3 + NaCl",
                e: " NH2RCOONa + HCl =  NH2RCOOH + NaCl"
            },
            correctAnswer: "b"
        },
        {
            question: "135.What equation is the buffer action equation, when hydrochloric acid is added to the acetate buffer solution?",
            answers: {
                a: " СН3СООН + NaOH = СН3COONa + Н2О",
                b: " Na2HPO4  + HCl =  NaH2PO4 + NaCl",
                c: " СН3СООNа + HCl = СН3СООН + NaCl",
                d: "NaHCO3+ HCl =  H2CO3 + NaCl",
                e: " NH2RCOONa + HCl =  NH2RCOOH + NaCl"
            },
            correctAnswer: "c"
        },
        {
            question: "136.What equation is the buffer action equation, when hydrochloric acid is added to the bicarbonate buffer solution?",
            answers: {
                a: " СН3СООН + NaOH = СН3COONa + Н2О",
                b: " Na2HPO4  + HCl =  NaH2PO4 + NaCl",
                c: "СН3СООNа + HCl = СН3СООН + NaCl",
                d: " NaHCO3+ HCl =  H2CO3 + NaCl",
                e: " NH2RCOONa + HCl =  NH2RCOOH + NaCl"
            },
            correctAnswer: "d"
        },
        {
            question: "137.What equation is the buffer action equation, when hydrochloric acid is added to the protein buffer solution?",
            answers: {
                a: " СН3СООН + NaOH = СН3COONa + Н2О",
                b: " Na2HPO4  + HCl =  NaH2PO4 + NaCl",
                c: "СН3СООNа + HCl = СН3СООН + NaCl",
                d: "NaHCO3+ HCl =  H2CO3 + NaCl",
                e: " H2RCOONa + HCl =  NH2RCOOH + NaCl"
            },
            correctAnswer: "e"
        },
        {
            question: "138.What equation is the buffer action equation, when hydrochloric acid is added to the hemoglobin buffer solution?",
            answers: {
                a: " NaHb + HCl = HHb + NaCl",
                b: " Na2HPO4  + HCl =  NaH2PO4 + NaCl",
                c: "СН3СООNа + HCl = СН3СООН + NaCl",
                d: "NaHCO3+ HCl =  H2CO3 + NaCl",
                e: " NH2RCOONa + HCl =  NH2RCOOH + NaCl"
            },
            correctAnswer: "a"
        },
        {
            question: "139.What equation is the buffer action equation, when hydrochloric acid is added to the oxyhemoglobin buffer solution?",
            answers: {
                a: " NaHbO2 + HCl = HHbO2 + NaCl",
                b: " Na2HPO4  + HCl =  NaH2PO4 + NaCl",
                c: "СН3СООNа + HCl = СН3СООН + NaCl",
                d: "NaHCO3+ HCl =  H2CO3 + NaCl",
                e: " NH2RCOONa + HCl =  NH2RCOOH + NaCl"
            },
            correctAnswer: "a"
        },
        {
            question: "140.What equation is the buffer action equation, when sodium hydroxide is added to the phosphate buffer solution?",
            answers: {
                a: " СН3СООН + NaOH = СН3COONa + Н2О",
                b: " NaH2PO4  + NaOH =  Na2HPO4 + Н2О",
                c: "HHbO2+ NaOH = NaHbO2 + Н2О",
                d: "H2CO3+ NaOH =  NaHCO3 + Н2О",
                e: " NH2RCOOH + NaOH =  NH2RCOONa + Н2О"
            },
            correctAnswer: "b"
        },
        {
            question: "141.What equation is the buffer action equation, when sodium hydroxide is added to the bicarbonate buffer solution?",
            answers: {
                a: " СН3СООН + NaOH = СН3COONa + Н2О",
                b: " NaH2PO4  + NaOH =  Na2HPO4 + Н2О",
                c: "HHbO2+ NaOH = NaHbO2 + Н2О",
                d: " H2CO3+ NaOH =  NaHCO3 + Н2О",
                e: " NH2RCOOH + NaOH =  NH2RCOONa + Н2О"
            },
            correctAnswer: "d"
        },
        {
            question: "142.What equation is the buffer action equation, when sodium hydroxide is added to the protein buffer solution?",
            answers: {
                a: " СН3СООН + NaOH = СН3COONa + Н2О",
                b: " NaH2PO4  + NaOH =  Na2HPO4 + Н2О",
                c: "HHbO2+ NaOH = NaHbO2 + Н2О",
                d: "H2CO3+ NaOH =  NaHCO3 + Н2О",
                e: " NH2RCOOH + NaOH =  NH2RCOONa + Н2О"
            },
            correctAnswer: "e"
        },
        {
            question: "143.What equation is the buffer action equation, when sodium hydroxide is added to the hemoglobin buffer solution?",
            answers: {
                a: " СН3СООН + NaOH = СН3COONa + Н2О",
                b: " NaH2PO4  + NaOH =  Na2HPO4 + Н2О",
                c: "HHbO2+ NaOH = NaHbO2 + Н2О",
                d: "H2CO3+ NaOH =  NaHCO3 + Н2О",
                e: " HHb + NaOH = NaHb + Н2О"
            },
            correctAnswer: "e"
        },
        {
            question: "144.What equation is the buffer action equation, when sodium hydroxide is added to the oxyhemoglobin buffer solution?",
            answers: {
                a: " СН3СООН + NaOH = СН3COONa + Н2О",
                b: " NaH2PO4  + NaOH =  Na2HPO4 + Н2О",
                c: " HHbO2+ NaOH = NaHbO2 + Н2О",
                d: "H2CO3+ NaOH =  NaHCO3 + Н2О",
                e: " HHb + NaOH = NaHb + Н2О"
            },
            correctAnswer: "c"
        },
        {
            question: "145.Calculate the pH value of ammonium buffer containing 30 ml of 0.1 M NH4OH and 30 ml of 0.1 M NH4Cl (pKb=4.75).",
            answers: {
                a: " 4.75",
                b: " 4.25",
                c: "5.28",
                d: "3.65",
                e: " 5.45"
            },
            correctAnswer: "a"
        },
        {
            question: "146.Calculate the pH of a buffer solution made from 0.2 mole/L HC2H3O2 and 0.5 mole/L C2H3O2-. The acid dissociation constant of HC2H3O2 is 4.74.",
            answers: {
                a: " 5.14",
                b: " 4.52",
                c: "5.64",
                d: "6.35",
                e: " 5.28"
            },
            correctAnswer: "a"
        },
        {
            question: "147.Calculate the pH of a buffer solution made from 0.3 mole/L HC2H3O2 and 0.6 mole/L C2H3O2-. The acid dissociation constant of HC2H3O2 is 4.74.",
            answers: {
                a: " 5.14",
                b: " 4.52",
                c: " 5.04",
                d: "6.35",
                e: " 5.28"
            },
            correctAnswer: "c"
        },
        {
            question: "148.Calculate the pH of a mixture of 0.1 M acetic acid and 0.2 M sodium acetate. The pKa of acetic acid is 4.76.",
            answers: {
                a: " 5.1",
                b: " 4.1",
                c: "6.1",
                d: "3.1",
                e: " 7.1"
            },
            correctAnswer: "a"
        },
        {
            question: "149.Calculate the pKa of lactic acid, given that when the concentration of lactic acid is 0.01 M and the concentration of lactate is 0.087 M, the pH is 4.80.",
            answers: {
                a: " 4.0",
                b: " 3.9",
                c: "3.3",
                d: "4.1",
                e: " 3.8"
            },
            correctAnswer: "b"
        },
        {
            question: "150.Calculate the ratio of the concentrations of acetic acid and acetic acid required in a buffer system of pH is 5.30.",
            answers: {
                a: " 3.1",
                b: " 3.2",
                c: "3.3",
                d: "3.4",
                e: " 3.5"
            },
            correctAnswer: "e"
        },
        {
            question: "151.The pKa of a weak acid was determined by measuring the pH of a solution containing the weak acid at 0.3 M and its conjugate base at 0.3 M. The measured pH was 8.0. What is the pKa of a weak acid?",
            answers: {
                a: " 8.0",
                b: " 7.0",
                c: "7.8",
                d: "7.4",
                e: " 7.6"
            },
            correctAnswer: "a"
        },
        {
            question: "152.The pKa of a weak acid was determined by measuring the pH of a solution containing the weak acid at 0.4 M and its conjugate base at 0.6 M. The measured pH was 7.8. What is the pKa of a weak acid?",
            answers: {
                a: " 8.0",
                b: " 7.0",
                c: "7.8",
                d: "7.4",
                e: " 7.6"
            },
            correctAnswer: "e"
        },
        {
            question: "153.How many grams of sodium hydroxide do need to prepare the solution, which has the volume of 250 ml, the molar concentration is 0.2 mole/l?",
            answers: {
                a: " 2.8 g",
                b: " 3.0 g",
                c: " 2.0 g",
                d: "4.0 g",
                e: " 1.0 g"
            },
            correctAnswer: "c"
        },
        {
            question: "154.How many grams of the solute does contain in 50 g of a solution with the mass fraction is 10%?",
            answers: {
                a: " 10 g",
                b: " 5 g",
                c: "25 g",
                d: "20 g",
                e: " 40 g"
            },
            correctAnswer: "b"
        },
        {
            question: "155.How many maximally electrons can be on the 3 p sub-shull (electronic energetic level)?",
            answers: {
                a: " 8",
                b: " 2",
                c: "4",
                d: " 6",
                e: " 1"
            },
            correctAnswer: "d"
        },
        {
            question: "156.To determine of Fe2+ is used such complex compound:",
            answers: {
                a: " Potassium cyanide cuprate(II);",
                b: " Cupper potassium tetracyanate;",
                c: " Potassium hexacyanoferate(III);",
                d: "Potassium hexacyanoferate(II);",
                e: " Potassium tetracuprate(II)"
            },
            correctAnswer: "c"
        },
        {
            question: "157.To ditermine of Fe3+is used such complex compound:",
            answers: {
                a: " Potassium cyanide cuprate(II);",
                b: " Cupper potassium tetracyanate;",
                c: "Potassium hexacyanoferate(III);",
                d: " Potassium hexacyanoferate(II);",
                e: " Potassium tetracuprate(II)"
            },
            correctAnswer: "d"
        },
        {
            question: "158.What reagent is used for determination of Ca2+ in the solution?",
            answers: {
                a: " (NH4)2C2O4",
                b: " NaBr",
                c: "HCl",
                d: "HNO3",
                e: " KCl"
            },
            correctAnswer: "a"
        },
        {
            question: "159.What is the name of K2[Cu(CN)4]?",
            answers: {
                a: "Potassium cyanide cuprate(II);",
                b: " Cupper potassium tetracyanate;",
                c: " Potassium tetracyanocuprate(II);",
                d: "Potassium cyanatecuprate(II);",
                e: " Potassium tetracuprate(II)."
            },
            correctAnswer: "c"
        },
        {
            question: "160.What is the name of [Ag(NH3)2]OH?",
            answers: {
                a: " Diamminesilver(I) hydroxide;",
                b: " Ammine argentums;",
                c: "Silver hydroxide;",
                d: "Ammine hydroxide;",
                e: " Silver amide."
            },
            correctAnswer: "a"
        },
        {
            question: "161.What is the name of [Ag(NH3)2]Cl?",
            answers: {
                a: " Diamminesilver(I) hydroxide;",
                b: " Ammine argentums;",
                c: "Silver hydroxide;",
                d: "Ammine hydroxide;",
                e: " Diamminesilver(I) chloride."
            },
            correctAnswer: "e"
        },
        {
            question: "162.What is the name of [Cr(H2O)6](NO3)3?",
            answers: {
                a: " Sodium hexahydroxochromate (IV);",
                b: " Hexaaquachromium(III)nitrate;",
                c: "Tetracorbonylnickel(0);",
                d: "Sodium tetrahydroxoaluminate;",
                e: " Sodium hexahydroxostannate (IV)."
            },
            correctAnswer: "b"
        },
        {
            question: "163.What is the name of [Ni(CO)4]?",
            answers: {
                a: " Tetracarbonylnickel;",
                b: " Nickel carbonate;",
                c: "Nickel carbon;",
                d: "Nickel carbon monoxide;",
                e: " Tetraammine nicol(II)bromite."
            },
            correctAnswer: "a"
        },
        {
            question: "164.What is the name of [Pt (NH3)4][PtCl6]?",
            answers: {
                a: " Hexachloroplatinum(II) platinate (IV);",
                b: " Platinum(II)hexachloroplatinate (IV);",
                c: " Tetraammineplatinum(II)hexachloroplatinate (IV);",
                d: "Tetraccholoplatinum(III) chloride;",
                e: " Tetraamminecopper(II)bromite."
            },
            correctAnswer: "c"
        },
        {
            question: "165.What is the name of [Cu(NH3)4]Br2?",
            answers: {
                a: " Hexaaquachromium(III)nitrate;",
                b: " Diamminesilver(I) chloride;",
                c: "Tetraammineplatinum(II)hexachloroplatinate (IV);",
                d: "Tetracorbonylnickel(0);",
                e: " Tetraamminecopper(II)bromite"
            },
            correctAnswer: "e"
        },
        {
            question: "166.What is the name of Na[Al(OH)4]?",
            answers: {
                a: " Aluminum sodium;",
                b: " Sodium tetrahydroxoaluminate;",
                c: "Potassuin bicyanobis(oxalo)nikelate(II)",
                d: "Sodium hydroxide;",
                e: " Aluminum sulfate."
            },
            correctAnswer: "b"
        },
        {
            question: "167.What is the name of Na2[Sn(OH)6]?",
            answers: {
                a: " Sodium hexahydroxostannate (IV);",
                b: " Tetraammineplatinum(II)hexachloroplatinate (IV);",
                c: "Diamminesilver(I) hydroxide;",
                d: "Hexaamminenickel(II) bromide;",
                e: " Sodium tetrahydroxoaluminate."
            },
            correctAnswer: "a"
        },
        {
            question: "168.What is the name of [Co(NH3)4(H2O)Cl]Cl2?",
            answers: {
                a: " Potassium cyanide cuprate(II);",
                b: " Cupper potassium tetracyanate;",
                c: "Potassium tetracyanocobalt(II);",
                d: " Tetraammineaquachlorocobalt(III) chloride;",
                e: " Diamminesilver(I) hydroxide."
            },
            correctAnswer: "d"
        },
        {
            question: "169.What  is the ligand name of the complex compound K2[Cu (CN)4]?",
            answers: {
                a: " Cyanide;",
                b: " Cyano;",
                c: "Nitroso;",
                d: "Nitro;",
                e: " Ammine."
            },
            correctAnswer: "b"
        },
        {
            question: "170.What is the central ion in the complex compound [Cu(NH3)4]CrO4?",
            answers: {
                a: " Ammine;",
                b: " Cupper;",
                c: "Chromium;",
                d: "Oxygen;",
                e: " Hydrogen."
            },
            correctAnswer: "b"
        },
        {
            question: "171.What is the dentaty of the ligand of the complex compound [Ni(CO)4]?",
            answers: {
                a: " 1;",
                b: " 2;",
                c: "0;",
                d: "4;",
                e: " 6."
            },
            correctAnswer: "a"
        },
        {
            question: "172.What kind is the following complex compound [Cr(Н2О)6](OH)3?",
            answers: {
                a: " Acidic complex;",
                b: " Cationic complex;",
                c: "Anionic complex;",
                d: "Basic complex;",
                e: " Neutral complex."
            },
            correctAnswer: "b"
        },
        {
            question: "173.What is the oxidation number of a central ion for the following complex compound [Ni(CO)4]?",
            answers: {
                a: " 1;",
                b: " 0;",
                c: "4;",
                d: "3;",
                e: " 6."
            },
            correctAnswer: "b"
        },
        {
            question: "174.What is the oxidation number of central ion for the following complex compound [Co(NO2)2(NH3)3]2+?",
            answers: {
                a: " 0;",
                b: " 1;",
                c: "3;",
                d: " 4;",
                e: " 6."
            },
            correctAnswer: "d"
        },
        {
            question: "175.What is the dentaty of ligand of the complex compound K2[Pt C16]?",
            answers: {
                a: " 1;",
                b: " 2;",
                c: "0;",
                d: "4;",
                e: " 6."
            },
            correctAnswer: "a"
        },
        {
            question: "176.The coordination number of Ni in the K4[Ni(CN)6]:",
            answers: {
                a: " 1;",
                b: " 2;",
                c: "8;",
                d: "4;",
                e: " 6."
            },
            correctAnswer: "e"
        },
        {
            question: "177.What is dentaty of -OOC-COO- in following complex compound K4[Ni(CN)2(OOC-COO)2]?",
            answers: {
                a: " 1;",
                b: " 2;",
                c: "0;",
                d: "4;",
                e: " 6."
            },
            correctAnswer: "b"
        },
        {
            question: "178.What is coordination number of Sn in the [Sn(NH3)2Cl2]Cl2?",
            answers: {
                a: " 1;",
                b: " 2;",
                c: "8;",
                d: " 4;",
                e: " 6."
            },
            correctAnswer: "d"
        },
        {
            question: "179.To choose the correct electronic formula of the valence electrons in Fe:",
            answers: {
                a: " 3d6 4s0",
                b: " 3d7 4s1",
                c: "3d6 4s1",
                d: " 3d6 4s2",
                e: " 3d6 4s3"
            },
            correctAnswer: "d"
        },
        {
            question: "180.To choose the correct electronic formula of the valence electrons in Cr3+:",
            answers: {
                a: " 3d4 4s2",
                b: " 3d1 4s2",
                c: "3d1 4s1",
                d: " 3d3 4s0",
                e: " 3d6 4s2"
            },
            correctAnswer: "d"
        },
        {
            question: "181.To choose the correct electronic formula of the valence electrons in Cr:",
            answers: {
                a: " 4s1 3d4",
                b: " 4s2 3d4",
                c: " 4s1 3d5",
                d: "4s0 3d4",
                e: " 3d6 4s2"
            },
            correctAnswer: "c"
        },
        {
            question: "182.What the group and the period are an element, which has the electronic formula 3s23p64s13d5?",
            answers: {
                a: " 3 period, VI group",
                b: " 4 period, VI group",
                c: "3 period, VI group",
                d: "4 period, VI group",
                e: " 5 period, II group"
            },
            correctAnswer: "b"
        },
        {
            question: "183.To choose the correct electronic formula of the valence electrons in Mn2+:",
            answers: {
                a: " 3d3 4s0",
                b: " 3d5 4s1",
                c: "3d4 4s1",
                d: " 3d5 4s0",
                e: " 3d6 4s2"
            },
            correctAnswer: "d"
        },
        {
            question: "184.To choose the electronic configuration (formula) of Hydrogen:",
            answers: {
                a: " 1s1",
                b: " 1s2",
                c: "1s12s1",
                d: "1s22s1",
                e: " 1s3"
            },
            correctAnswer: "a"
        },
        {
            question: "185.What the group and the period are an element, which has the electronic formula",
            answers: {
                a: " 3 group, V period",
                b: " 5 group, V period",
                c: "3 period, V group",
                d: "3 period, V group",
                e: " 5 period, II group"
            },
            correctAnswer: "b"
        },
        {
            question: "186.What chemical element has the electronic formula 1s22s22p63s23p63d74s2?",
            answers: {
                a: " Ca",
                b: " Zn",
                c: "Ba",
                d: "Ni",
                e: " Co"
            },
            correctAnswer: "e"
        },
        {
            question: "187.To find the number of group and period of the element which has the electronic configuration such as 3s23p64s2:",
            answers: {
                a: " The 3-th period and the 8-th group",
                b: " The 4-th period and the 2-nd group",
                c: "The 2-th period and the 5-th group",
                d: "The 5-th period and the 2-th group",
                e: " The 3-th period and the 7-th group"
            },
            correctAnswer: "b"
        },
        {
            question: "188.To choose the correct electronic formula of the valence electrons in Mn:",
            answers: {
                a: " 3d6 4s1",
                b: " 3d5 4s2",
                c: "3d5 4s1",
                d: "3d4 4s2",
                e: " 3d6 4s2"
            },
            correctAnswer: "b"
        },
        {
            question: "189.Based on the electronic structure of an atom 1735Cl, indicate the total number of neutrons in this atom:",
            answers: {
                a: " 8",
                b: " 52",
                c: "10",
                d: "17",
                e: " 35"
            },
            correctAnswer: "a"
        },
        {
            question: "190.What the group and the period are an element, which has the electronic formula 3s23p64s2?",
            answers: {
                a: " 3 period, VIII group",
                b: " 4 period, II group",
                c: "4 period, II group",
                d: "3 period, II group",
                e: " 5 period, II group"
            },
            correctAnswer: "b"
        },
        {
            question: "191.The degree of oxidation of phosphorus in the phosphoric acid equals:",
            answers: {
                a: " +1",
                b: " –3",
                c: " +5",
                d: "+3",
                e: " +4"
            },
            correctAnswer: "c"
        },
        {
            question: "192.The general number of electrons in the ions Ca2+ and S2– :",
            answers: {
                a: " 48",
                b: " 38",
                c: "72",
                d: " 36",
                e: " 43"
            },
            correctAnswer: "d"
        },
        {
            question: "193.The general number of electrons in the ions H+ and N3– :",
            answers: {
                a: " 4",
                b: " 10",
                c: "5",
                d: "8",
                e: " 9"
            },
            correctAnswer: "b"
        },
        {
            question: "194.The atom has a mass number of 23 and an atomic number 11. The number of protons are:",
            answers: {
                a: " 1",
                b: " 12",
                c: "23",
                d: "44",
                e: " 48"
            },
            correctAnswer: "a"
        },
        {
            question: "195.The atom of Carbon-12 has:",
            answers: {
                a: " 6 electrons, 6 protons, 6 neutrons",
                b: " 6 electrons, 12 protons, 6 neutrons",
                c: "12 electrons, 6 protons, 6 neutrons",
                d: "18 electrons, 6 protons and 6 neutrons",
                e: " 16 electrons, 6 protons and 5 neutrons"
            },
            correctAnswer: "a"
        },
        {
            question: "196.The element X has 2 valence electrons. It is a:",
            answers: {
                a: " Metal",
                b: " Non-metal",
                c: "Metalloid",
                d: "Gas",
                e: " Liquid"
            },
            correctAnswer: "a"
        },
        {
            question: "197.An Iron atom has an atomic mass of 56. Its atomic number is 26. How many neutrons does the iron atom have?",
            answers: {
                a: " 30",
                b: " 56",
                c: "26",
                d: "82",
                e: " 32"
            },
            correctAnswer: "a"
        },
        {
            question: "198.After 3s sub-shell begin to fill is:",
            answers: {
                a: " 3p",
                b: " 3d",
                c: "3f",
                d: "4s",
                e: " 4d"
            },
            correctAnswer: "a"
        },
        {
            question: "199.Which compound is zero valent metal complex?",
            answers: {
                a: " [Cu(NH3)4]SO4",
                b: " [Pt(NH3)2Cl2]",
                c: " [Ni(CO)4]",
                d: "K3[Fe(CN)6]",
                e: " [Mn (H2O)6]Cl"
            },
            correctAnswer: "c"
        },
        {
            question: "200.Complex [Fe(CO)6][Ag(CN)2]2 is",
            answers: {
                a: " A coordination complex ion.",
                b: " A coordination compound.",
                c: "A complex ion.",
                d: "All of the above.",
                e: " Heavier than justin Bieber."
            },
            correctAnswer: "b"
        },
        {
            question: "201.Choose the correct name for the formula, [Cr(NH3)4(OH)2]Br",
            answers: {
                a: " Chromium(II) tetraamminebis(hydroxo) bromide",
                b: " Chromium(III) tetraamminebis(hydroxo) bromide",
                c: "Tetraamminedihydroxochromium(II) bromide",
                d: " Tetraamminedihydroxochromium(III) bromide",
                e: " Chromium(II) tetraamminedihydroxo bromide"
            },
            correctAnswer: "d"
        },
        {
            question: "202.The coordination number of the complex ion in the compound K[Cr enCl2Br2] (“en” represent ethylenediamine) is:",
            answers: {
                a: " 2.",
                b: " 4.",
                c: "3.",
                d: "5.",
                e: " 6."
            },
            correctAnswer: "e"
        },
        {
            question: "203.Which of the following is unlikely to be a ligand?",
            answers: {
                a: " NH3.",
                b: " Cl-.",
                c: "Mg2+.",
                d: " CO.",
                e: " CN-."
            },
            correctAnswer: "d"
        },
        {
            question: "204.Which of the following are bidentate ligands?",
            answers: {
                a: " Oxalate, C2O42-",
                b: " Hydroxide, OH-",
                c: "Ammonia, NH3",
                d: "Nitrite, NO2-.",
                e: " Chloride, Cl-"
            },
            correctAnswer: "a"
        },
        {
            question: "205.The correct formula of the compound whose name is hexaamminechromium(III) nitrate is",
            answers: {
                a: " [Cr(NH3)6](NO3)3",
                b: " [Cr(NH2)6]NO3",
                c: "[Cr(NO3)3](NH3)6",
                d: "[Cr(NH3)6](NO2)3",
                e: " (NH4)3[Cr(NO3)6]"
            },
            correctAnswer: "a"
        },
        {
            question: "206.Which is the correct name for the compound K[Ag(CN)2]?",
            answers: {
                a: " Potassium dicyanosilver(I).",
                b: " Potassium silverdicyanide(1-).",
                c: " Potassium dicyanoargentate(I).",
                d: "Bis(cyano)silver(I) potassium.",
                e: " Potassium argentums(I) cyanide."
            },
            correctAnswer: "c"
        },
        {
            question: "207.What is the ligand name of the complex compound [Cu(NH3)4]CrO4?",
            answers: {
                a: " Ammonia;",
                b: " Amino;",
                c: "Chromo;",
                d: "Chromate;",
                e: " Ammine."
            },
            correctAnswer: "e"
        },
        {
            question: "208.What is the central ion in the complex compound [Co(NH3)6]CrO4?",
            answers: {
                a: " Ammine;",
                b: " Cobalt;",
                c: "Chromium;.",
                d: "Oxygen;",
                e: " Hydrogen."
            },
            correctAnswer: "b"
        },
        {
            question: "209.What is the dentaty of the ligand of the complex compound [Co(NH3)6]CrO4?",
            answers: {
                a: " 8;",
                b: " 2;",
                c: " 1;",
                d: "4;",
                e: " 6."
            },
            correctAnswer: "c"
        },
        {
            question: "210.What is the coordination number of Ag in the [Ag(NH3)2]OH?",
            answers: {
                a: " 1;",
                b: " 2;",
                c: "8;",
                d: "4;",
                e: " 6."
            },
            correctAnswer: "b"
        },
        {
            question: "211.What kind is the following complex compound [Co(NO2)(NH3)3]SO4?",
            answers: {
                a: " Acidic complex.",
                b: " Anionic complex.",
                c: " Cationic complex.",
                d: "Basic complex.",
                e: " Neutral complex."
            },
            correctAnswer: "c"
        },
        {
            question: "212.What ligand name, which is in following complex compound K2[Pt C16]?",
            answers: {
                a: " Potassium;",
                b: " Platinum;",
                c: " Chloro;",
                d: "Chloral;",
                e: " Platinate."
            },
            correctAnswer: "c"
        },
        {
            question: "213.What is the central ion in the complex compound K2[Pt C16]?",
            answers: {
                a: " Potassium;",
                b: " Platinum;",
                c: "Chloro;",
                d: "Chloral;",
                e: " Paladium."
            },
            correctAnswer: "b"
        },
        {
            question: "214.What is the coordination number of Co in the [Co(NH3)4(H2O)Cl]Cl2?",
            answers: {
                a: "1;",
                b: " 2;",
                c: "8;",
                d: "4;",
                e: " 6."
            },
            correctAnswer: "e"
        },
        {
            question: "215.Complex compounds are all except:",
            answers: {
                a: " [Cu (NH3)4] SO4.",
                b: " [Co(NH3)4(H2O)Cl]Cl2.",
                c: "K2[Pt C16].",
                d: " CuSO4.",
                e: " [Sn(NH3)2Cl2]Cl2."
            },
            correctAnswer: "d"
        },
        {
            question: "216.Neutral ligands are all except:",
            answers: {
                a: " NН3.",
                b: " Н2О.",
                c: "CO.",
                d: " l-.",
                e: " CS."
            },
            correctAnswer: "d"
        },
        {
            question: "217.The negative ligand is:",
            answers: {
                a: " NН3.",
                b: " Cl-.",
                c: "Н2О.",
                d: "CO.",
                e: " CS."
            },
            correctAnswer: "b"
        },
        {
            question: "218.The neutral ligand is:",
            answers: {
                a: " NO3-.",
                b: " Н2О.",
                c: "CO3-.",
                d: "ClO2+.",
                e: " NO+."
            },
            correctAnswer: "b"
        },
        {
            question: "219.The positive ligand is:",
            answers: {
                a: "NO3-.",
                b: " Н2О.",
                c: "CO3-.",
                d: " ClO2+.",
                e: " NO"
            },
            correctAnswer: "d"
        },
        {
            question: "220.The complex compound is:",
            answers: {
                a: " Cu3(PO4)2.",
                b: " CoCl3.",
                c: " K2[Pt C16].",
                d: "CuSO4.",
                e: " SnCl4."
            },
            correctAnswer: "c"
        },
        {
            question: "221.The maximum number of electrons on the second electronic level is:",
            answers: {
                a: " 2",
                b: " 8",
                c: "16",
                d: "32",
                e: " 3"
            },
            correctAnswer: "b"
        },
        {
            question: "222.Sulfur is a typical non-metal, which is located in VI group of the main subgroup of the periodic system. What valence of sulfur is in the molecule of sulfuric acid (H2SO4)?",
            answers: {
                a: " V",
                b: " III",
                c: "VI",
                d: "II",
                e: " V"
            },
            correctAnswer: "a"
        },
        {
            question: "223.The general number of electrons on the first electronic level (an energy level) is:",
            answers: {
                a: " 3",
                b: " 8",
                c: "16",
                d: "32",
                e: " 2"
            },
            correctAnswer: "e"
        },
        {
            question: "224.What element is privation in organism decopmost the activity of thyroid gland:",
            answers: {
                a: " Sodium;",
                b: " Vanadium;",
                c: " Iodine;",
                d: "Calcium;",
                e: " Iron."
            },
            correctAnswer: "c"
        },
        {
            question: "225.What kind is the following complex compound K4[Ni(CN)2(OOC-COO)2]?",
            answers: {
                a: " Acidic complex;",
                b: " Cation complex;",
                c: " Anionic complex;",
                d: "Basic complex;",
                e: " Neutral complex."
            },
            correctAnswer: "c"
        },
        {
            question: "226.Hybridization of one s-and two p-orbitals leads to the formation of three sр2 - hybridization orbitals. To indicate the angle between the orbitals:",
            answers: {
                a: " 120о",
                b: " 180о",
                c: "109о",
                d: "90о",
                e: " 104,5о"
            },
            correctAnswer: "a"
        },
        {
            question: "227.Preparation method of colloidal solutions according to this reaction 2Н2S+SO2 =  3S+2H2O is called:",
            answers: {
                a: " Peptization;.",
                b: " Oxidation;",
                c: "Electric method;",
                d: "Hydrolysis;.",
                e: " Double decomposition."
            },
            correctAnswer: "b"
        },
        {
            question: "228.Preparation method of colloidal solutions according to this reaction",
            answers: {
                a: " Peptization;",
                b: " Oxidation;",
                c: "Electric method;",
                d: " Hydrolysis;",
                e: " Double decomposition."
            },
            correctAnswer: "d"
        },
        {
            question: "229.Preparation method of colloidal solutions according to this reaction",
            answers: {
                a: " Peptization;",
                b: " Oxidation;",
                c: " Electric method;",
                d: "Hydrolysis;",
                e: " Double decomposition."
            },
            correctAnswer: "c"
        },
        {
            question: "230.Oxidation reaction is used for preparation colloidal solution. What reaction is oxidation?",
            answers: {
                a: " As2O3 + ЗH2S = As2S3 + ЗH2O.",
                b: " 2 AuCl3 + 3 SnCl2=2 Аu + 3SnCl4.",
                c: " Br2 + H2S = S + 2HBr.",
                d: "FeCl3 + 3 H2O = Fe(OH)3 + 3 HCl.",
                e: " AlCl3 + 3 H2O = Al(OH)3 + 3 HCl."
            },
            correctAnswer: "c"
        },
        {
            question: "231.Double decomposition reaction is used for preparation colloidal solution. What reaction is double decomposition?",
            answers: {
                a: " As2O3 + ЗH2S = As2S3 + ЗH2O.",
                b: " 2 AuCl3 + 3 SnCl2=2 Аu + 3SnCl4.",
                c: "Br2 + H2S = S + 2HBr.",
                d: "FeCl3 + 3 H2O = Fe(OH)3 + 3 HCl.",
                e: " AlCl3 + 3 H2O = Al(OH)3 + 3 HCl."
            },
            correctAnswer: "a"
        },
        {
            question: "232.Reduction reaction is used for preparation colloidal solution. What reaction is reduction?",
            answers: {
                a: "BrСl2 + H2SO4 -> BaSO4 + 2HСl.",
                b: " As2O3 + ЗH2S = As2S3 + ЗH2O.",
                c: " 2 AuCl3 + 3 SnCl2=2 Аu + 3SnCl4.",
                d: "FeCl3 + 3 H2O = Fe(OH)3 + 3 HCl.",
                e: " AlCl3 + 3 H2O = Al(OH)3 + 3 HCl."
            },
            correctAnswer: "c"
        },
        {
            question: "233.Reaction of hydrolysis is used for preparation colloidal solution. What reaction is hydrolysis?",
            answers: {
                a: " As2O3 + ЗH2S = As2S3 + ЗH2O.",
                b: " 2 AuCl3 + 3 SnCl2=2 Аu + 3SnCl4.",
                c: "Br2 + H2S = S + 2HBr.",
                d: "Fe3O3 + 6 HCl =  2 FeCl3 + 3 H2O.",
                e: " lCl3 + 3 H2O = Al(OH)3 + 3 HCl."
            },
            correctAnswer: "e"
        },
        {
            question: "234.On figure [ [ (mAu) nAuO2]n-(n-x)Na+]x-xNa+  is shown the micelle formula of:",
            answers: {
                a: " Sol of Berlin (Prussian) blue with the negative charge of granules.",
                b: " Silver sol with the negative charge of granule.",
                c: "Silver sol with the positive charge of granule.",
                d: "Gold sol with the positive charge of granule.",
                e: " Gold sol with the negative charge of granule."
            },
            correctAnswer: "e"
        },
        {
            question: "235.A sol was formed as a result of mixing of identical volumes 0,002M solutions of Pb(NO3)2 and KI. What ions will form the diffusive layer of micelle?",
            answers: {
                a: " I–",
                b: " Pb2+",
                c: "There is no a diffuse layer",
                d: "K+",
                e: " O3–"
            },
            correctAnswer: "e"
        },
        {
            question: "236.On figure [ [ (mAg) nAgO]n-(n-x)K+]x-xK+ is shown the micelle formula of:",
            answers: {
                a: " Sol of Silver oxide with the negative charge of granule.",
                b: " Sol of Silver oxide with the positive charge of granule.",
                c: "Sol of Silver iodide with the negative charge of granule.",
                d: "Sol of Silver iodide with the positive charge of granule.",
                e: " Sol of silver with the negative charge of granule."
            },
            correctAnswer: "e"
        },
        {
            question: "237.Method preparation of colloid solutions by this reaction 2H2S+SO2=3S+2H2O is called:",
            answers: {
                a: " Peptization.",
                b: " Oxidation.",
                c: "Electric method.",
                d: "Hydrolysis.",
                e: " Double decomposition"
            },
            correctAnswer: "b"
        },
        {
            question: "238.At decreasing of diameter of particles of a sol in 2 times dispersion of the system:",
            answers: {
                a: " increase in 2 times",
                b: " decrease in 8 times",
                c: "increase in 4 times",
                d: "decrease in 2 times",
                e: " decrease in 4 times"
            },
            correctAnswer: "a"
        },
        {
            question: "239.What size of particle colloid solution?",
            answers: {
                a: " 10-8м.",
                b: " 10-10м.",
                c: "1015м.",
                d: "10-3м.",
                e: " 10-1м"
            },
            correctAnswer: "a"
        },
        {
            question: "240.Method preparation of colloid solutions by this reaction 2Na2SO4+CaCl2=CaSO4+2NaCl is called:",
            answers: {
                a: " Peptization.",
                b: " Oxidation.",
                c: "Electric method.",
                d: "Hydrolysis.",
                e: " Double decomposition."
            },
            correctAnswer: "e"
        },
        {
            question: "241.	Blood is dispersed system, once of dispersed phase particle is erythrocytes, which size 10-4. What type system of it is?",
            answers: {
                a: "True solution.",
                b: "Macroheterogeneous.",
                c: "   Microheterogeneous.",
                d: "	 Ultramicroheterogeneous.",
                e: "Colloidal solution."
            },
            correctAnswer: "c"
        },
        {
            question: "242.	System with size dispersed phase particle equal 10-9 – 10-7 is:",
            answers: {
                a: "True solution.",
                b: "Microheterogeneous.",
                c: "	 Macroheterogeneous.",
                d: "	 Homogeneous.",
                e: "   Colloidal solution."
            },
            correctAnswer: "e"
        },
        {
            question: "243.	A sol was formed as a result of mixing of identical volumes 0,001M solutions AgNO3 and K2CrO4. What ion is potential defined?",
            answers: {
                a: "NO3–",
                b: "K+",
                c: "   CrO42–",
                d: "	 CrO42– or Ag+",
                e: "Ag+"
            },
            correctAnswer: "c"
        },
        {
            question: "244.	To the colloids belong the systems with the sizes of particles:",
            answers: {
                a: "10–9 – 10–4 m",
                b: "   10–9 – 10–7 m",
                c: "	 10–4 m",
                d: "	 >10–4 m",
                e: "10–7 – 10–4 m"
            },
            correctAnswer: "b"
        },
        {
            question: "245.	Particles of AgCl in a water solution have a size 5* 0–6m. This system is:",
            answers: {
                a: "   uspension",
                b: "emulsion",
                c: "	 colloid",
                d: "	 aerosol",
                e: "true solution"
            },
            correctAnswer: "a"
        },
        {
            question: "246.	Which equation is used for the nephelometry determination of concentration of a sol?",
            answers: {
                a: "h1/h2 = C1/C2",
                b: "C = T/K",
                c: "   h1/h2 = C2/C1",
                d: "	 C = Vn/V0",
                e: "C = 10/M"
            },
            correctAnswer: "c"
        },
        {
            question: "247.	At decreasing of diameter of particles of a sol in 2 times dispersion of the system:",
            answers: {
                a: "   increase in 2 times",
                b: "decrease in 8 times",
                c: "	 increase in 4 times",
                d: "	 decrease in 2 times",
                e: "decrease in 4 times"
            },
            correctAnswer: "a"
        },
        {
            question: "248.	Which one of the given electrolytes is a stabilizator of a sol of the Prussial blue with the positively charged granules:",
            answers: {
                a: "   FeCl3",
                b: "KCl",
                c: "	 Fe3[Fe(CN)6]",
                d: "	 K4[Fe(CN)6]",
                e: "any other electrolyte"
            },
            correctAnswer: "a"
        },
        {
            question: "249.	Which one of the given electrolytes is a stabilizator of a sol AgI with the positively charged granules:",
            answers: {
                a: "any other electrolyte",
                b: "KNO3",
                c: "	 KI",
                d: "	 KCl",
                e: "   gNO3"
            },
            correctAnswer: "e"
        },
        {
            question: "250.	Which one of the given salt hydrolyzes and gives a sol as a result of the hydrolysis?",
            answers: {
                a: "Na2S",
                b: "NH4Cl",
                c: "   FeCl3",
                d: "	 Na2CO3",
                e: "CH3COOK"
            },
            correctAnswer: "c"
        },
        {
            question: "251.	A sol will forms as a result of interaction between:",
            answers: {
                a: "Na2SO3 + O2  =>",
                b: "Na + H2O =>",
                c: "	 H2S + NaOH =>",
                d: "	 NaOH + HCl =>",
                e: "   H2S + O2 =>"
            },
            correctAnswer: "e"
        },
        {
            question: "252.	A sol of acid can be formed at the hydrolysis of salt:",
            answers: {
                a: "Ni(NO3)2",
                b: "FeSO4",
                c: "	 ZnCl2",
                d: "	 KH2PO4",
                e: "   a2SiO3"
            },
            correctAnswer: "e"
        },
        {
            question: "253.	A sol was formed as a result of mixing of identical volumes 0,001M solutions AgNO3 and K2CrO4. What ion is potentialdefined?",
            answers: {
                a: "NO3 –",
                b: "K +",
                c: "   CrO4 2–",
                d: "	 CrO4 2– or Ag+",
                e: "Ag+"
            },
            correctAnswer: "c"
        },
        {
            question: "254.	A sol was formed as a result of mixing of identical volumes 0,002M solutions of Pb(NO3)2 and KI. What ions will form the diffusive layer of micelle?",
            answers: {
                a: "I –",
                b: "Pb2+",
                c: "	 there is no a diffuse layer",
                d: "	 K +",
                e: "   O3 –"
            },
            correctAnswer: "e"
        },
        {
            question: "255.	To get a sol of Fe(OH)3 using the method of peptisation is required to add to precipitate of Fe(OH)3:",
            answers: {
                a: "FeOCl",
                b: "   HCl",
                c: "	 FeCl3",
                d: "	 KOH",
                e: "K4[Fe(CN)6]"
            },
            correctAnswer: "b"
        },
        {
            question: "256.	To solution, that contains ions Na+ , Mg2+, Ba2+, Cl– , NO3 – , added solution of KOH. What sol can be formed?",
            answers: {
                a: "Ba(OH)2",
                b: "BaCl(OH)",
                c: "	 BaCl2",
                d: "	 KNO3",
                e: "   g(OH)2"
            },
            correctAnswer: "e"
        },
        {
            question: "257.	Using the reaction of hydrolysis, it is possible to get a sol of:",
            answers: {
                a: "BaSO4",
                b: "H2SO4",
                c: "	 Ba(OH)2",
                d: "	 KOH",
                e: "   i(OH)2"
            },
            correctAnswer: "e"
        },
        {
            question: "258.	To get a sol is required to add to the solution of Pb(NO3)2 :",
            answers: {
                a: "Pb(CH3COO)2",
                b: "HNO3",
                c: "   KI",
                d: "	 BaSO4",
                e: "KNO3"
            },
            correctAnswer: "c"
        },
        {
            question: "259.	Which one of the given electrolytes is a stabilizator of a sol of the Prussian blue with the negatively charged granules?",
            answers: {
                a: "Fe3[Fe(CN)6]",
                b: "   K4[Fe(CN)6]",
                c: "	 KCl",
                d: "	 any other electrolyte",
                e: "FeCl3"
            },
            correctAnswer: "b"
        },
        {
            question: "260.	A sol of sulphur is formed as a result of interaction between Na2S2O3 with:",
            answers: {
                a: "KCl",
                b: "H2O",
                c: "	 I2",
                d: "   HCl",
                e: "NH3"
            },
            correctAnswer: "e"
        },
        {
            question: "261.	What will be the change of the distance which particles of a sol will pass if the voltage of the applied electric field would be increased twice?",
            answers: {
                a: "   increase in 2 times",
                b: "increase in 4 times",
                c: "	 will not change",
                d: "	 decrease in 2 times",
                e: "decrease in 4 times"
            },
            correctAnswer: "a"
        },
        {
            question: "262.	The solution of which compound through the listed 8ones should be added to a sol to cause its coagulation?",
            answers: {
                a: "MgCO3",
                b: "CaCO3",
                c: "	 SrCO3",
                d: "	 BaSO4",
                e: "   gSO4"
            },
            correctAnswer: "e"
        },
        {
            question: "263.	The positively charged sol of iron hydroxide Fe(OH)3 was prepared by the method of hydrolysis. Which ion through the listed ones will have the lowest value of the critical concentration of coagulation for this sol?",
            answers: {
                a: "bromide-ion Br-",
                b: "   phosphate-ions PO4 3-",
                c: "	 sulfate-ion SO4 2-",
                d: "	 chloride-ion Cl-",
                e: "nitrate-ion NO3 –"
            },
            correctAnswer: "b"
        },
        {
            question: "264.	A sol of AgI was prepared by adding of 10 ml 0.001 M solution of AgNO3 to 100 ml KI solution of the same concentration. Which electrolyte through the listed ones will have the lowest value of the critical concentration of coagulation for this sol?",
            answers: {
                a: "AlPO4",
                b: "MgSO4",
                c: "	 NaCl",
                d: "	 K3[Fe(CN)6]",
                e: "   AlCl3"
            },
            correctAnswer: "e"
        },
        {
            question: "265.	A sol of AgI was prepared by adding of 100 ml 0.001 M solution of AgNO3 to 10 ml KI solution of the same concentration. Which electrolyte through the listed ones will have the lowest value of the critical concentration of coagulation for this sol?",
            answers: {
                a: "   K3[Fe(CN)6]",
                b: "AlPO4",
                c: "	 MgSO4",
                d: "	 NaCl",
                e: "AlCl3"
            },
            correctAnswer: "a"
        },
        {
            question: "266.	A sol of sulphur was prepared by oxidation hydrogen sulphide H2S by oxygen of air. Which ion through the listed ones will have the highest value of the coagulation ability for this sol?",
            answers: {
                a: "PO4 3–",
                b: "Cl–",
                c: "	 K +",
                d: "	 [Fe(CN)6] 4–",
                e: "   Al3+"
            },
            correctAnswer: "e"
        },
        {
            question: "267.	For coagulation of a sol the electrolyte with the 1-charged coagulating ion was replaced with an electrolyte with a 2-charged ion. How the critical concentration of coagulation will change?",
            answers: {
                a: "   decrease on 2-3 orders",
                b: "decrease in 2 times",
                c: "	 increase on 2-3 orders",
                d: "	 decrease in 4 times",
                e: "increase in 2 times"
            },
            correctAnswer: "a"
        },
        {
            question: "268.	Size of colloidal particles is …",
            answers: {
                a: "   1 nm - 100 nm",
                b: "10 nm- 20 nm",
                c: "	 0.05 nm - 0.1 nm",
                d: "	 25 nm - 30 nm",
                e: "30 nm – 100 nm"
            },
            correctAnswer: "a"
        },
        {
            question: "269.	What is particle size of colloidal solution?",
            answers: {
                a: "   10-8м;",
                b: "10-10м;",
                c: "	 1015м;",
                d: "	 10-3м;",
                e: "10-1м"
            },
            correctAnswer: "a"
        },
        {
            question: "270.	Systems, in which particle size10-4 m are:",
            answers: {
                a: "True solution;",
                b: "   Macroheterogeneous;",
                c: "	 Microheterogeneous;",
                d: "	 Ultramicroheterogeneous;",
                e: "Homogeneous."
            },
            correctAnswer: "b"
        },
        {
            question: "271.	Systems with dispersed phase particle size between 10-9 to 10-7m are:",
            answers: {
                a: "True solution;",
                b: "Macroheterodisperse solution;",
                c: "	 Solid;",
                d: "   Colloidal solutions;",
                e: "Mixture."
            },
            correctAnswer: "d"
        },
        {
            question: "272.	Blood is dispersed system, once of dispersed phase particles are erythrocytes with size 10-4 m. What type of dispersed system is it?",
            answers: {
                a: "True solution;",
                b: "   Macroheterogeneous;",
                c: "	 Microheterogeneous;",
                d: "	 Ultramicroheterogeneous;",
                e: "Colloidal solution."
            },
            correctAnswer: "b"
        },
        {
            question: "273.	Blood serum is dispersed system. What type dispersed system is it?",
            answers: {
                a: "True solution;",
                b: "Solid;",
                c: "	 Macroheterogeneous;",
                d: "	 Microheterogeneous;",
                e: "   Colloidal solution."
            },
            correctAnswer: "e"
        },
        {
            question: "274.	System with size dispersed phase particle equal 10-9 - 10-7 is:",
            answers: {
                a: "True solution;",
                b: "Microheterogeneous;",
                c: "	 Macroheterogeneous;",
                d: "	 Homogeneous;",
                e: "   Colloidal solution."
            },
            correctAnswer: "e"
        },
        {
            question: "275.	The amount of an electrolyte which is added to one liter of а colloidal solution so as to bring about complete flocculation is called:",
            answers: {
                a: "   Flocculation number.",
                b: "Surface tension.",
                c: "	 Heat capacity.",
                d: "	 Acidity.",
                e: "Ion product."
            },
            correctAnswer: "a"
        },
        {
            question: "276.	Osmotic pressure of colloidal solution is:",
            answers: {
                a: "Very great.",
                b: "Stable all time.",
                c: "	 Equal zero.",
                d: "   Very small.",
                e: "Chang when change illumination."
            },
            correctAnswer: "d"
        },
        {
            question: "277.	For swellings influence all factors except:",
            answers: {
                a: "   Time;",
                b: "Temperature;",
                c: "	 Relation between energies of bond in a polymer and solving energy;",
                d: "	 Concentrations of polymer",
                e: "Nature polymer."
            },
            correctAnswer: "a"
        },
        {
            question: "278.	The quantitative measure of swelling is:",
            answers: {
                a: "Change of solution volume.",
                b: "   Swelling degree.",
                c: "	 Change the nature of polymer.",
                d: "	 Unchanging amount of polymer.",
                e: "Volume of turgescent polymer."
            },
            correctAnswer: "b"
        },
        {
            question: "279.	Value of рН solution in which an proteins is in isoelectric state, name ....",
            answers: {
                a: "Solubility of protein.",
                b: "Hydrolysis of protein;",
                c: "   Isoelectric point of protein;",
                d: "	 Synthesis of protein.",
                e: "Flowdown of protein"
            },
            correctAnswer: "c"
        },
        {
            question: "280.	On the swelling process influence all factors except:",
            answers: {
                a: "рН medium.",
                b: "   Catalyst.",
                c: "	 Nature of polymer and solvent.",
                d: "	 Molecular mass of polymer.",
                e: "Temperature."
            },
            correctAnswer: "b"
        },
        {
            question: "281.	What formula is used for determination swelling degree?",
            answers: {
                a: "? = N/n;",
                b: "? = K / C;",
                c: "	 ? = 1- C / m;",
                d: "	 ? = C m / V;",
                e: "   ? = (m - m0)/m0 = mp/m0."
            },
            correctAnswer: "e"
        },
        {
            question: "282.	The amount of liquids which is absorbed one unit of polymer is named:",
            answers: {
                a: "   Swelling degree;",
                b: "Hydrolysis degree;",
                c: "	 Polymerization degree;",
                d: "	 Ionizations degree;",
                e: "Condensation degree."
            },
            correctAnswer: "a"
        },
        {
            question: "283.	High molecular connections (HMC) are compounds with molecular mass of order...",
            answers: {
                a: "10 - 102 atomic units.",
                b: "   104 - 106 atomic units.",
                c: "	 10-1 - 10-2 atomic units.",
                d: "	 10 - 103 atomic units.",
                e: "10-4 - 10-6 atomic units."
            },
            correctAnswer: "b"
        },
        {
            question: "284.	Sol Al(OH)3 was derived by processing a freshly made Al(OH)3 precipitate with a small amount of HCl solution. Sol production bases upon the following phenomenon:",
            answers: {
                a: "Chemical condensation",
                b: "Rinsing with a solvent",
                c: "	 Mechanic dispersing",
                d: "	 Physical condensation",
                e: "   Chemical peptization"
            },
            correctAnswer: "e"
        },
        {
            question: "285.	Under certain conditions high-molecular substances make gellies that are widely used in drug production. What process takes place during jelly ageing?",
            answers: {
                a: "   Syneresis",
                b: "Thixotropy",
                c: "	 Swelling",
                d: "	 Solvatation",
                e: "Diffusion"
            },
            correctAnswer: "a"
        },
        {
            question: "286.	While preparing a solution, a pharmaceutical analyst converted a freshly formed precipitate into a sol by treating it with an electrolyte solution. What method of obtaining disperse systems was used by the analyst?",
            answers: {
                a: "Physical condensation",
                b: "Chemical condensation",
                c: "	 Solvent exchange method",
                d: "	 Condensation from steam",
                e: "   Peptization"
            },
            correctAnswer: "e"
        },
        {
            question: "287.	The dispensing chemist has been studying properties of certain disperse system classes, namely, aerosols. What optical phenomenon is characteristic of this disperse system class?",
            answers: {
                a: "Light absorption",
                b: "Opalescence",
                c: "	 Light reflection",
                d: "   Light scattering",
                e: "Light refraction"
            },
            correctAnswer: "d"
        },
        {
            question: "288.	Emulsions containing less then 0,1% of dispersed phase (in volume) are classified as:",
            answers: {
                a: "Concentrated",
                b: "High-concentration",
                c: "   Diluted",
                d: "	 Water-in-oil type",
                e: "Oil-in-water type"
            },
            correctAnswer: "c"
        },
        {
            question: "289.	On figure [ [ (mAu) nAuO2]n-(n-x)Na+]x-xNa+ is shown the micelle formula of:",
            answers: {
                a: "Sol of Berlin (Prussian) blue with the negative charge of granules.",
                b: "Silver sol with the negative charge of granule.",
                c: "	 Silver sol with the positive charge of granule.",
                d: "	 Gold sol with the positive charge of granule.",
                e: "   Gold sol with the negative charge of granule."
            },
            correctAnswer: "e"
        },
        {
            question: "290.	A sol was formed as a result of mixing of identical volumes 0,002M solutions of Pb(NO3)2 and KI. What ions will form the diffusive layer of micelle?",
            answers: {
                a: "I–",
                b: "Pb2+",
                c: "	 There is no a diffuse layer",
                d: "	 K+",
                e: "   NO3–"
            },
            correctAnswer: "e"
        },
        {
            question: "291.	On figure [ [ (mAg) nAgO]n-(n-x)K+]x-xK+ is shown the micelle formula of:",
            answers: {
                a: "Sol of Silver oxide with the negative charge of granule.",
                b: "Sol of Silver oxide with the positive charge of granule.",
                c: "	 Sol of Silver iodide with the negative charge of granule.",
                d: "	 Sol of Silver iodide with the positive charge of granule.",
                e: "   Sol of silver with the negative charge of granule."
            },
            correctAnswer: "e"
        },
        {
            question: "292.	Systems with dispersed phase particle size between 10-9 to 10-7m are:",
            answers: {
                a: "True solution.",
                b: "Macroheterodisperse solution.",
                c: "	 Solid.",
                d: "   Colloidal solutions.",
                e: "Mixture."
            },
            correctAnswer: " d"
        },
        {
            question: "293.	What type of dispersed system is blood if size of dispersed phase particle equal 10-4?",
            answers: {
                a: "True solution.",
                b: "Emulsion.",
                c: "   Suspension.",
                d: "	 Aerosol.",
                e: "Colloidal solution."
            },
            correctAnswer: "c"
        },
        {
            question: "294.	Particles of AgCl in a water solution have a size 5•10–6m. This system is:",
            answers: {
                a: "   suspension",
                b: "emulsion",
                c: "	 colloid",
                d: "	 aerosol",
                e: "true solution"
            },
            correctAnswer: "a"
        },
        {
            question: "295.	The process of removing low molecular compounds by washing the colloid with a solvent through a semi-permeable membrane, which does not allow the particles of the colloidal system to pass through, is named:",
            answers: {
                a: "   dialysis",
                b: "diffusion",
                c: "	 osmosis",
                d: "	 electroforesis",
                e: "ultra-filtration"
            },
            correctAnswer: "a"
        },
        {
            question: "296.	Which one of the given electrolytes is a stabilizator of a sol AgI with the positively charged granules:",
            answers: {
                a: "any other electrolyte",
                b: "KNO3",
                c: "	 KI",
                d: "	 KCl",
                e: "   AgNO3"
            },
            correctAnswer: "e"
        },
        {
            question: "297.	A sol will forms as a result of interaction between:",
            answers: {
                a: "Na2SO3 + O2 >",
                b: "Na + H2O >",
                c: "	 H2S + NaOH >",
                d: "	 NaOH + HCl >",
                e: "   H2S + O2 >"
            },
            correctAnswer: "e"
        },
        {
            question: "298.	Cleaning of blood by a “artificial kidney”, when a blood flows between two membranes which are washed outwardly by the physiological solution, is based on:",
            answers: {
                a: "   dialysis and ultra-filtration",
                b: "ectroforesis",
                c: "	 osmosis",
                d: "	 coagulation",
                e: "dispergation"
            },
            correctAnswer: "a"
        },
        {
            question: "299.	The process of removing low molecular compounds by washing the colloid with a solvent through a semi-permeable membrane, which does not allow the particles of the colloidal system to pass through, is named:",
            answers: {
                a: "   dialysis",
                b: "diffusion",
                c: "	 osmosis",
                d: "	 electroforesis",
                e: "ultra-filtration"
            },
            correctAnswer: "a"
        },
        {
            question: "300.	At the standing of the diluted solutions of FeCl3, the color of solution darken, opalescence appears as a result of formation of a sol Fe(OH)3. What is the name of method getting a sol?",
            answers: {
                a: "peptization",
                b: "   chemical condensation, reaction of hydrolysis",
                c: "	 physical condensation",
                d: "	 chemical condensation, reaction of double exchange",
                e: "chemical condensation, redox reaction"
            },
            correctAnswer: "b"
        },
        {
            question: "301.	A sol of AgI was prepared by adding of 10 ml 0.001 M solution of AgNO3 to 100 ml KI solution of the same concentration. Which electrolyte through the listed ones will have the lowest value of the critical concentration of coagulation for this sol?",
            answers: {
                a: "AlPO4",
                b: "MgSO4",
                c: "	 NaCl",
                d: "	 K3[Fe(CN)6]",
                e: "   AlCl3"
            },
            correctAnswer: "e"
        },
        {
            question: "302.	A sol of AgI was prepared by adding of 100 ml 0.001 M solution of AgNO3 to 10 ml KI solution of the same concentration. Which electrolyte through the listed ones will have the lowest value of the critical concentration of coagulation for this sol?",
            answers: {
                a: "   K3[Fe(CN)6]",
                b: "AlPO4",
                c: "	 MgSO4",
                d: "	 NaCl",
                e: "AlCl3"
            },
            correctAnswer: "a"
        },
        {
            question: "303.	A sol of sulphur was prepared by oxidation hydrogen sulphide H2S by oxygen of air. Which electrolyte through the listed ones will have the highest value of the coagulation ability for this sol?",
            answers: {
                a: "K3PO4",
                b: "NaCl",
                c: "	 K2SO4",
                d: "	 CaCl2",
                e: "   AlCl3"
            },
            correctAnswer: "e"
        },
        {
            question: "304.	If some hot water is taken in a thermos flask whose mouth is closed, such a system is known as",
            answers: {
                a: "Open system",
                b: "Close system",
                c: "   Isolated system",
                d: "	 Heterogeneous system",
                e: "Isothermal system"
            },
            correctAnswer: "c"
        },
        {
            question: "305.	Exothermic change is observed in:",
            answers: {
                a: "Evaporation of liquid. ",
                b: "Fusion of solid.",
                c: "   Condensation of liquid.",
                d: "	 Boiling of liqud",
                e: "None of these."
            },
            correctAnswer: "c"
        },
        {
            question: "306.	Which one of the following has the highest heat of neutralisation?",
            answers: {
                a: "Weak acid + water",
                b: "Weak acid + weak base. ",
                c: "	 Strong acid + weak base. ",
                d: "   Strong acid + strong base. ",
                e: "Weak acid + strong base."
            },
            correctAnswer: "d"
        },
        {
            question: "307.	Which one of the following would have an enthalpy of formation value (∆Hf) of zero?",
            answers: {
                a: "H2O(g)",
                b: "O(g)",
                c: "	 H2O(l)",
                d: "   2(g)",
                e: "H2O(s)"
            },
            correctAnswer: "d"
        },
        {
            question: "308.	What happens if an exothermic reaction is reversed?",
            answers: {
                a: "There is no change at all. ",
                b: "   It becomes an endothermic reaction.",
                c: "	 It attains equilibrium.",
                d: "	 Heat absorbed by surrounding",
                e: "None of these."
            },
            correctAnswer: "b"
        },
        {
            question: "309.	Which one of the following statements is NOT correct?",
            answers: {
                a: "When ∆G for a reaction is negative, the reaction is spontaneous.",
                b: "When ∆G for a reaction is positive, the reaction is nonspontaneous.",
                c: "	 When ∆G for a reaction is zero, the system is at equilibrium. ",
                d: "   When ∆H for a reaction is negative, the reaction is never spontaneous.",
                e: "When ∆H for a reaction is very positive, the reaction is not expected to be spontaneous."
            },
            correctAnswer: "d"
        },
        {
            question: "310.	If the Gibbs energy of a reaction is positive, the reaction:",
            answers: {
                a: "   Is nonspontaneous",
                b: "Occurs spontaneously",
                c: "	 Is at equilibrium",
                d: "	 Is reversible",
                e: "Is fast"
            },
            correctAnswer: "a"
        },
        {
            question: "311.	For a reaction to be spontaneous under standard conditions at all temperatures, the signs of ∆H0 and ∆S0 must be _____ and _____, respectively.",
            answers: {
                a: "+, +",
                b: "-,-",
                c: "	 +, -",
                d: "   -, +",
                e: "+, 0"
            },
            correctAnswer: "s"
        },
        {
            question: "312.	Which reaction produces an increase in entropy of the system?",
            answers: {
                a: "Ag+ (aq)+ Cl- (aq) →AgCl (s)",
                b: "   CO2 (s) → CO2 (g)",
                c: "	 H2 (g)+ Cl2 (g) →2HCl (g)",
                d: "	 N2 (g)+3H2 (g) →2NH3 (g)",
                e: "H2O (l) → H2O (s)"
            },
            correctAnswer: "b"
        },
        {
            question: "313.	If ∆G for a certain reaction has a negative value at 298 K, which of the following must be true?I.The reaction is exothermic. II.The reaction occurs spontaneously at 298 K. III.The rate of reaction is fast at 298 K.",
            answers: {
                a: "I only",
                b: "II only",
                c: "   I and II only",
                d: "	 II and III only",
                e: "I, II, and III"
            },
            correctAnswer: "c"
        },
        {
            question: "314.	The standard Gibbs free energy of formation of _____ is zero: 1. H2O(l) 2. O(g) 3. H2(g)",
            answers: {
                a: "Only 1",
                b: "Only 2",
                c: "   Only 3",
                d: "	 2 and 3",
                e: "1, 2 and 3"
            },
            correctAnswer: "c"
        },
        {
            question: "315.	As a result of _______, we are able to measure absolute values of the entropy of a sample and are not forced to define relative values as we were when defined enthalpies of formation, ∆H0f:",
            answers: {
                a: "The First Law of Thermodynamics",
                b: "The Second Law of Thermodynamics",
                c: "   The Third law of Thermodynamics",
                d: "	 Hess’s law",
                e: "Reversibility"
            },
            correctAnswer: "c"
        },
        {
            question: "316.	The equation for the standard enthalpy of formation of N2O3 is",
            answers: {
                a: "N2O(g) + O2(g) → N2O3(g)",
                b: "N2O5(g) → N2O3(g) + O2(g)",
                c: "	 NO(g) + NO2(g) → N2O3(g)",
                d: "   2(g) + 3/2 O2(g) → N2O3(g)",
                e: "N2O3(g) +O2(g) →N2O5(g)"
            },
            correctAnswer: "d"
        },
        {
            question: "317.	The entropy will usually increase when: I.A molecule is broken into two or more smaller molecules. II.A reaction occurs that results in an increase in the number of moles of gas. III.A solid changes to a liquid. IV.A liquid changes to a gas. ",
            answers: {
                a: "I only",
                b: "II only",
                c: "	 III only",
                d: "	 IV only",
                e: "   I, II, III, and IV"
            },
            correctAnswer: "e"
        },
        {
            question: "318.	A reaction that is not spontaneous at low temperature can became spontaneous at high temperature if ∆H is ____ and ∆S is____",
            answers: {
                a: "   +, +",
                b: "-,-",
                c: "	 +, -",
                d: "	 -, +",
                e: "+, 0"
            },
            correctAnswer: "a"
        },
        {
            question: "319.	The standard Gibbs free energy of formation of _____ is zero: 1. H2O(l); 2. Na(s); 3. H2(g) ",
            answers: {
                a: "Only 1",
                b: "Only 2",
                c: "	 Only 3",
                d: "   2 and 3",
                e: "1, 2 and 3"
            },
            correctAnswer: "d"
        },
        {
            question: "320.	Which reaction produces a decrease in entropy of the system:",
            answers: {
                a: "CaCO3 (s) → CaO (s)+CO2 (g)",
                b: "2C (s)+O2 (g) →2CO (g)",
                c: "	 CO2 (s)→CO2 (g)",
                d: "   H2 (g)+O2 (g)→2H2O (l)",
                e: "H2O (l)→H2O (g)"
            },
            correctAnswer: "d"
        },
        {
            question: "321.	Consider the thermal energy transfer during a chemical process. When heat is transferred to the system, the process is said to be _______ and the sign of ∆H is ________.",
            answers: {
                a: "Exothermic, positive",
                b: "Endothermic, negative",
                c: "	 Exothermic, negative",
                d: "   Endothermic, positive",
                e: "Isothermal, zero"
            },
            correctAnswer: "d"
        },
        {
            question: "322.	The mathematical form of the first law of thermodynamics when heat (q) is supplied and work (w) is done by the system is",
            answers: {
                a: "   ∆E = q + w",
                b: "∆E = q – w",
                c: "∆E = – q + w",
                d: "	 ∆E = – q – w",
                e: "-∆E = q – w"
            },
            correctAnswer: "a"
        },
        {
            question: "323.	A chemical reaction that absorbs heat from the surroundings is said to be __________ and has a __________ ∆H at constant pressure.",
            answers: {
                a: "Endothermic, negative",
                b: "   Endothermic, positive",
                c: "	 Exothermic, negative",
                d: "	 Exothermic, positive",
                e: "Exothermic, neutral"
            },
            correctAnswer: "b"
        },
        {
            question: "324.	For the general reaction, 2A + B2 → 2AB, ∆H is +50.0 kJ. We can conclude that:",
            answers: {
                a: "The reaction is exothermic",
                b: "The surroundings absorb energy.",
                c: "	 The standard enthalpy of formation of AB  is -50.0 kJ.",
                d: "	 The molecule AB contains less energy than A or B2.",
                e: "   The reaction is endothermic."
            },
            correctAnswer: "e"
        },
        {
            question: "325.	The value of ∆H0 for the reaction below is -126 kJ. How much heat (in kJ) is released when 2.00 mol of NaOH is formed in the reaction? 2Na2O2(s) + 2H2O(l) > 4NaOH(s) + O2(g)",
            answers: {
                a: "252 kJ",
                b: "-126 kJ",
                c: "	 7.8 kJ",
                d: "   63 kJ",
                e: "3.9 kJ"
            },
            correctAnswer: "d"
        },
        {
            question: "326.	The value of ∆H0 for the reaction below is -790 kJ. The enthalpy change accompanying the reaction of 0.1 mol g of S is __________ kJ. 2S(s) + 3O2(g)→2SO3(g)",
            answers: {
                a: "   -39,5 kJ",
                b: "-79 kJ",
                c: "	 58 kJ",
                d: "	 -390 kJ",
                e: "-790 kJ"
            },
            correctAnswer: "a"
        },
        {
            question: "327.	A system suffers an increase in internal energy of 80 J and at the same time has 50 J of work done on it. What is the heat change of the system?",
            answers: {
                a: "+130 J",
                b: "   +30 J",
                c: "	 -130 J",
                d: "	 -30 J",
                e: "0 J"
            },
            correctAnswer: "b"
        },
        {
            question: "328.	The value of ∆H0 for the reaction below is -6535 kJ. How many kJ of heat are released in the combustion of 0,2 mole of C6H6(l)? 2 C6H6(l) + 15 O2(g)→ 12 CO2(g) + 6 H2O(l)",
            answers: {
                a: "673 kJ",
                b: "   -653,5 kJ",
                c: "	 -3267,5 kJ",
                d: "	 -6535 kJ",
                e: "326,76 kJ"
            },
            correctAnswer: "b"
        },
        {
            question: "329.	Which of the following statements is FALSE? (∆H, ∆G, and ∆S refer to system changes.)",
            answers: {
                a: "   ∆S must be positive for a process to be spontaneous.",
                b: "∆G is always positive for nonspontaneous processes.",
                c: "	 If ∆S is negative then ∆H must be negative for a spontaneous process.",
                d: "	 ∆G is always negative for spontaneous processes.",
                e: "∆S is positive for many spontaneous processes."
            },
            correctAnswer: "a"
        },
        {
            question: "330.	A process CANNOT be spontaneous (product-favored) if:",
            answers: {
                a: "The entropy of the universe increases.",
                b: "   It is endothermic, and there is a decrease in disorder.",
                c: "	 It is endothermic, and there is an increase in disorder.",
                d: "	 It is exothermic, and there is an increase in disorder.",
                e: "It is exothermic, and there is a decrease in disorder."
            },
            correctAnswer: "b"
        },
        {
            question: "331.	Which statement is INCORRECT?",
            answers: {
                a: "At constant pressure, ∆H = ∆E + P∆V",
                b: "The thermodynamic symbol for entropy is S.",
                c: "	 Gibbs free energy is a state function.",
                d: "   For an endothermic process, ∆ H is negative.",
                e: "If the work done by the system is greater than the heat absorbed by the system, ∆ E is negative."
            },
            correctAnswer: "d"
        },
        {
            question: "332.	The reaction 4Al (s) + 3O2 (g) → 2Al2O3 (s);  ∆H0 = -3351 kJ; is ___, and therefore heat is ___ by the reaction. ",
            answers: {
                a: "   Exothermic, released",
                b: "Exothermic, absorbed",
                c: "	 Endothermic, released",
                d: "	 Endothermic, absorbed",
                e: "Thermoneutral, neither released nor absorbed"
            },
            correctAnswer: "a"
        },
        {
            question: "333.	The value of ∆H0 for the reaction below is -336 kJ. Calculate the heat (kJ) released to the surroundings when 15 mole of HCl is formed. CH4(g) + 3 Cl2(g)→ CHCl3(l) + 3 HCl(g)",
            answers: {
                a: "3360 kJ",
                b: "   -1680 kJ",
                c: "	 70.7 kJ",
                d: "	 -336 kJ",
                e: "2.57 x 103 kJ"
            },
            correctAnswer: "b"
        },
        {
            question: "334.	10.5 kJ of heat released when 11.2 L of H2S was formed. What is the standard enthalpy of formation for H2S?",
            answers: {
                a: "21.0 kJ/mol",
                b: "   –21.0 kJ/mol",
                c: "	 5.25 kJ/mol",
                d: "	 10.5 kJ/mol",
                e: "–5.25 kJ/mol"
            },
            correctAnswer: "b"
        },
        {
            question: "335.	Point out without any calculations for which of the given processes the entropy increases?",
            answers: {
                a: "CH4(g) + Cl2(g) = CH3Cl(liquid) + HCl(g)",
                b: "CO(g) + Cl2(g) = COCl2(g)",
                c: "	 4 Al(solid) + 3 C(solid) = Al4C3(solid)",
                d: "	 2 Fe(solid) + 3 Cl2(g) = 2FeCl3(solid)",
                e: "   NH3(g) = N2(g) + 3 H2(g)"
            },
            correctAnswer: "e"
        },
        {
            question: "336.	A potato contains 20 g of carbohydrate. If carbohydrate has a caloric value of 4 kcal/g, how many kcal are obtained from the carbohydrate in the potato?",
            answers: {
                a: "5 kcal",
                b: "20 kcal",
                c: "	 40 kcal",
                d: "	 60 kcal",
                e: "   80 kcal"
            },
            correctAnswer: "e"
        },
        {
            question: "337.	A serving of fish contains 50.g of protein. If protein has a caloric value of 4.0 kcal/g how many kcal are obtained from the proteins in the serving?",
            answers: {
                a: "200 kcal",
                b: "20.0 kcal",
                c: "	 12.5 kcal",
                d: "	 0.08 kcal",
                e: "   2000 kcal"
            },
            correctAnswer: "e"
        },
        {
            question: "338.	A serving of fish contains 4.0 g of fat. If fat has a caloric value of 9.0 kcal/g, how many kcal are obtained from the fat in the serving?",
            answers: {
                a: "360 kcal",
                b: "0.44 kcal",
                c: "	 2.25 kcal",
                d: "   36 kcal",
                e: "2000 kcal"
            },
            correctAnswer: "d"
        },
        {
            question: "339.	A slice of pizza contain 29 g of carbohydrate. If carbohydrate has a caloric value of 4 kcal/g, how many kcal are obtained from the carbohydrate in the pizza?",
            answers: {
                a: "7.25 kcal",
                b: "0.137 kcal",
                c: "	 1160 kcal",
                d: "   116 kcal",
                e: "725 kcal"
            },
            correctAnswer: "d"
        },
        {
            question: "340.	A slice of pizza contain 13 g of protein. . If protein has a caloric value of 4.0 kcal/g how many kcal are obtained from the proteins in the pizza?",
            answers: {
                a: "520 kcal",
                b: "3.25 kcal",
                c: "	 325 kcal",
                d: "   52 kcal",
                e: "0.31 kcal"
            },
            correctAnswer: "d"
        },
        {
            question: "341.	A diet has a total caloric intake of 1400 kcal. If the protein in the diet provides 35% of the kcal, the number of kcal of protein in the diet is",
            answers: {
                a: "700 kcal.",
                b: "   490 kcal.",
                c: "	 210 kcal.",
                d: "	 460 kcal.",
                e: "1200 kcal."
            },
            correctAnswer: "b"
        },
        {
            question: "342.	A diet has a total caloric intake of 1500 kcal. If the carbohydrate in the diet provides 40% of the kcal, the number of kcal of carbohydrate in the diet is",
            answers: {
                a: "   600 kcal.",
                b: "490 kcal.",
                c: "	 500 kcal.",
                d: "	 460 kcal.",
                e: "1100 kcal."
            },
            correctAnswer: "a"
        },
        {
            question: "343.	A diet has a total caloric intake of 1800 kcal. If the fat in the diet provides 30% of the kcal, the number of kcal of fat in the diet is",
            answers: {
                a: "600 kcal.",
                b: "490 kcal.",
                c: "   540 kcal.",
                d: "	 800 kcal.",
                e: "1100 kcal."
            },
            correctAnswer: "c"
        },
        {
            question: "344.	One cup of kidney beans contain 15 g of protein. If protein has a caloric value of 4.0 kcal/g how many kcal are obtained from the proteins in the kidney beans?",
            answers: {
                a: "   60 kcal.",
                b: "3.75 kcal.",
                c: "	 375 kcal.",
                d: "	 600 kcal.",
                e: "0.26 kcal."
            },
            correctAnswer: "a"
        },
        {
            question: "345.	One cup of kidney beans contain 1.0 g of fat. If fat has a caloric value of 9.0 kcal/g how many kcal are obtained from the fats in the kidney beans?",
            answers: {
                a: "0.9 kcal.",
                b: "3.75 kcal.",
                c: "   9 kcal.",
                d: "	 900 kcal.",
                e: "0.11 kcal."
            },
            correctAnswer: "c"
        },
        {
            question: "346.	One cup of kidney beans contain 42 g of carbohydrate. If carbohydrate has a caloric value of 4.0 kcal/g how many kcal are obtained from the carbohydrate in the kidney beans?",
            answers: {
                a: "0.095 kcal.",
                b: "105 kcal.",
                c: "	 10.5 kcal.",
                d: "	 1680 kcal.",
                e: "   168 kcal."
            },
            correctAnswer: "e"
        },
        {
            question: "347.	Given that heat neutralization of strong acid and strong base is –13.7 kcal. The heat produced when one mole of HCl is mixed with 0.5 mole of NaOH will be",
            answers: {
                a: "6.85 kcal",
                b: "   –6.85 kcal",
                c: "	 –27.4 kcal",
                d: "	 –13.7 kcal",
                e: "13.7 kcal"
            },
            correctAnswer: "b"
        },
        {
            question: "348.	Given that heat neutralization of strong acid and strong base is –13.7 kcal. The heat produced when two moles of HCl is mixed with  one mole of NaOH will be",
            answers: {
                a: "6.85 kcal",
                b: "–6.85 kcal",
                c: "	 –27.4 kcal",
                d: "   –13.7 kcal",
                e: "13.7 kcal"
            },
            correctAnswer: "d"
        },
        {
            question: "349.	As the temperature of a reaction is increased, the rate of the reaction increases because the:",
            answers: {
                a: "Reactant molecules collide with greater energy",
                b: "Reactant molecules collide less frequently",
                c: "	 Reactant molecules collide less frequently and with greater energy",
                d: "   Activation energy is lowered",
                e: "Activation energy is highred"
            },
            correctAnswer: "d"
        },
        {
            question: "350.	Which of the following will lower the activation energy for a reaction?",
            answers: {
                a: "Increasing the concentrations of reactants",
                b: "Raising the temperature of the reaction",
                c: "   Adding a suitable catalyst",
                d: "	 There is no way to lower the activation energy of a reaction",
                e: "Increasing the pressure in system"
            },
            correctAnswer: "c"
        },
        {
            question: "351.	All of the following are true statements concerning catalysts except",
            answers: {
                a: "A catalyst will speed the rate-determining step",
                b: "   A catalyst will be used up in a reaction",
                c: "	 A catalyst may induce steric strain in a molecule to make it react more readily",
                d: "	 A catalyst will lower the activation energy of a reaction",
                e: "A catalyst will works at specific temperature"
            },
            correctAnswer: "b"
        },
        {
            question: "352.	A catalyst can be described as a substance that:",
            answers: {
                a: "Undergoes change to accelerate the rate of the reaction",
                b: "Increases the kinetic energy of the reactants",
                c: "   Provides a path of lower activation energy for the reaction",
                d: "	 Lowers the potential energy of the products with respect to the energy of the reactants",
                e: "Be used up in a reaction"
            },
            correctAnswer: "c"
        },
        {
            question: "353.	Catalyst influence for:",
            answers: {
                a: "Ganged of chemical equilibrium.",
                b: "Increase temperature of reaction.",
                c: "	 Increase pressure of gaseous components;",
                d: "   Rate of reaction.",
                e: "Increase volume of reactants."
            },
            correctAnswer: "d"
        },
        {
            question: "354.	When chromium changes from an oxidation state of +3 to that of +6, the Cr3+ must:",
            answers: {
                a: "Gain 6 electrons",
                b: "Lose 6 electrons",
                c: "	 None of these",
                d: "	 Gain 3 electrons",
                e: "   Lose 3 electrons"
            },
            correctAnswer: "e"
        },
        {
            question: "355.	Rate law equation for reaction: 2 SO2 (g) + O2 (g) →2 SO3 (g) is:",
            answers: {
                a: "v = k [SO3]2 [O2].",
                b: "v = k 2[SO2] [O2].",
                c: "   v = k [SO2]2 [O2].",
                d: "	 v = k [O2].",
                e: "v = k [SO3]."
            },
            correctAnswer: "c"
        },
        {
            question: "356.	The equilibrium constant for reversible reaction 2 SO2 (g) + O2 (g) →2 SO3 (g) is:",
            answers: {
                a: "K= [SO2]2 [O2]/[SO3]2",
                b: "   K= [SO3]2 /[SO2]2 [O2]",
                c: "	 K = k [SO2]2 [O2].",
                d: "	 K = [O2]/ [SO2]2",
                e: "   K = [SO3]/ [O2]."
            },
            correctAnswer: "b"
        },
        {
            question: "357.	Rate law equation for reaction: 2 SO3 (g) →2 SO2 (g) + O2 (g) is:",
            answers: {
                a: "   v= k [SO3]2.",
                b: "v= k 2[SO2] [O2].",
                c: "	 v= k [SO2]2 [O2].",
                d: "	 v= k [O2].",
                e: "v= k [SO2]."
            },
            correctAnswer: "a"
        },
        {
            question: "358.	Rate law equation for reaction: 2 NO (g) + O2 (g) →2 NO2 is:",
            answers: {
                a: "v= k [NO2]2.",
                b: "   v= k [NO]2 [O2].",
                c: "	 v= k [NO] [O2].",
                d: "	 v= k [O2].",
                e: "v= k 2[NO2]."
            },
            correctAnswer: "b"
        },
        {
            question: "359.	The equilibrium constant for reversible reaction 2 NO (g) + O2 (g) →2 NO2 is:",
            answers: {
                a: "K= k [NO2]2.",
                b: "K= [NO]2 [O2]/ [NO2]2.",
                c: "	 K=  [NO] [O2].",
                d: "	 K= [O2]/ [NO]",
                e: "   K= [NO2]2/[NO]2 [O2]"
            },
            correctAnswer: "e"
        },
        {
            question: "360.	The equilibrium constant for reversible reaction: N2 (g) + 3H2 (g)→> 2NH3 (g):",
            answers: {
                a: "K= [N2]2/ [NH3]2",
                b: "K= [N2]3 [H2].",
                c: "   K= [NH3]2 / [N2] [H2]3",
                d: "	 K= [N2] [H2]3/ [NH3]2",
                e: "K= [N2] [H2]3"
            },
            correctAnswer: "c"
        },
        {
            question: "361.	Rate law equation for reaction: N2 (g) + 3H2 (g) → 2NH3 (g):",
            answers: {
                a: "v = k [N2]2",
                b: "v=  k [N2]3 [H2].",
                c: "	 v= k [NH3]2 [H2]3",
                d: "	 v=  k [NH3]2",
                e: "   v= k [N2] [H2]3"
            },
            correctAnswer: "e"
        },
        {
            question: "362.	The equilibrium constant for reversible reaction: 3O2 (g) + 2H2S (g) → 2H2O (g) + 2SO2 (g):",
            answers: {
                a: "K= [O2]3/ [H3O]2",
                b: "K= [H2S] [O2]3.",
                c: "	 K= [SO2]2 / [O2] [H2S]",
                d: "	 K= [O2] /[H2O]+ [SO2]",
                e: "   K= [SO2]2[H2O]2 / [O2]3[H2S]2"
            },
            correctAnswer: "e"
        },
        {
            question: "363.	Rate law equation for forward reaction: N2O4(g) → 2NO2(g) is:",
            answers: {
                a: "v= k [2NO2];",
                b: "v= k [NO2]2;",
                c: "   v= k [N2O4];",
                d: "	 v= k [NO];",
                e: "v= [NO2]."
            },
            correctAnswer: "c"
        },
        {
            question: "364.	Rate law equation for reverse reaction: 2KClO3(s)→2KCl(s)+3O2(g) is:",
            answers: {
                a: "v= k [KClO3]2;",
                b: "   v= k [O2]3;",
                c: "	 v= k 2 [KCl] 3[O2];",
                d: "	 v= k [KCl] [O2];",
                e: "v= k [KCl] + [O2]3."
            },
            correctAnswer: "b"
        },
        {
            question: "365.	The rate of chemical reactions for a 100C rise if the temperature increase in:",
            answers: {
                a: "2 times",
                b: "2 – 3 times",
                c: "   2 – 4 times",
                d: "	 4 times",
                e: "3 times"
            },
            correctAnswer: "c"
        },
        {
            question: "366.	How will change the rate of homogeneous reaction 2NO + O2 = 2NO2, if the initial concentration increase in two times?",
            answers: {
                a: "Increase in 16 times",
                b: "Increase in 12 times",
                c: "	 Increase in 4 times",
                d: "	 Increase in 2 times",
                e: "   Increase in 8 times"
            },
            correctAnswer: "e"
        },
        {
            question: "367.	How will change the rate of reaction 2Fe(s) + 3Cl2(g) = 2FeCl3(s), if the preassure decrease in 3 times?",
            answers: {
                a: "Decrease in 9 times",
                b: "Does not change",
                c: "	 Increase in 9 times",
                d: "   Decrease in 27 times",
                e: "Increase in 27 times"
            },
            correctAnswer: "d"
        },
        {
            question: "368.	How will change the rate of reaction 2NO + O2 = 2NO2, if the initial concentration decrease in two times?",
            answers: {
                a: "Decrease in 4 times",
                b: "Increase in 8 times",
                c: "   Decrease in 8 times",
                d: "	 Increase in 16times",
                e: "Increase in 4 times"
            },
            correctAnswer: "c"
        },
        {
            question: "369.	The rate of reaction 2СО(g) = СО2(g) + С(g) increase in 9 times when the concentration of carbon(II) oxide increase in:",
            answers: {
                a: "Increase in 6 times",
                b: "   Increase in 3 times",
                c: "	 Increase in 5 times",
                d: "	 Increase in 2 times",
                e: "Increase in 4 times"
            },
            correctAnswer: "b"
        },
        {
            question: "370.	The rate of formation of NO2 in the reaction 2NO + O2 → 2NO2 increase in 125 times, when the pressure increase in:",
            answers: {
                a: "Increase in 50 times",
                b: "Increase in 10 times",
                c: "   Increase in 5 times",
                d: "	 Increase in 15 times",
                e: "Increase in 25 times"
            },
            correctAnswer: "c"
        },
        {
            question: "371.	How will change the rate of reaction 2CO(g) + O2(g) = 2CO2(g), if the initial concentration increase in three times?",
            answers: {
                a: "Increase in 3 times",
                b: "Increase in 6 times",
                c: "	 Does not change",
                d: "   Increase in 27 times",
                e: "Increase in 9 times"
            },
            correctAnswer: "d"
        },
        {
            question: "372.	How will change the rate of reaction 2NO + Cl2 = 2NOCl, if the pressure of system increase in four times?",
            answers: {
                a: "Does not change",
                b: "Increase in 16 times",
                c: "	 Decrease in 64 times",
                d: "	 Decrease in 16 times",
                e: "   Increase in 64 times"
            },
            correctAnswer: "e"
        },
        {
            question: "373.	The rate of the reaction 2Al(s) + 3Cl2(g) = 2AlCl3(s), increases in 64 times when the concentration of Cl2 increase in:",
            answers: {
                a: "2 times",
                b: "   4 times",
                c: "	 10 times",
                d: "	 6 times",
                e: "8 times"
            },
            correctAnswer: "b"
        },
        {
            question: "374.	How will change the rate of reaction 3H2 + N2 → 2NH3, if the volume of system decrease in two times?",
            answers: {
                a: "   Increase in 16 times",
                b: "Increase in 8 times",
                c: "	 Increase in 8 times",
                d: "	 Increase in 4 times",
                e: "Increase in 12 times"
            },
            correctAnswer: "a"
        },
        {
            question: "375.	How will change the rate of reaction 2NO + O2 = 2NO2, if the initial concentrations of system increase in two times?",
            answers: {
                a: "Increase in 16 times",
                b: "   Increase in 8 times",
                c: "	 Increase in 2 times",
                d: "	 Increase in 3 times",
                e: "Increase in 4 times"
            },
            correctAnswer: "b"
        },
        {
            question: "376.	The reaction CO + Cl2 = COCl2 is a reaction:",
            answers: {
                a: "Monomolecular reaction of the second order",
                b: "Bimolecular reaction of the first order",
                c: "   Bimolecular reaction of the second order",
                d: "	 Monomolecular reaction of the zero order",
                e: "Monomolecular reaction of the first order"
            },
            correctAnswer: "c"
        },
        {
            question: "377.	Which of the following includes all the aims of kinetics? (I) to measure the rate of a reaction; (II) to be able to predict the rate of a reaction; (III) to be able to establish the mechanism by which a reaction occurs; (IV) to be able to control a reaction ",
            answers: {
                a: " (I), (II) and (III)",
                b: " (I) and (II)",
                c: "    (I) and (III)",
                d: "	  (I), (II), (III) and (IV)",
                e: " (II), (III) and (IV)"
            },
            correctAnswer: "c"
        },
        {
            question: "378.	What happens when molecules collide with less than the activation energy needed for the reaction?",
            answers: {
                a: "They stick together but do not react",
                b: "They react, but more slowly",
                c: "	 They react if the bonds are arranged in the correct orientation",
                d: "   They do not react; they simply bounce off of each other",
                e: "They react, it not depend on activation energy"
            },
            correctAnswer: "d"
        },
        {
            question: "379.	What is the value of standard electrode potential for standard hydrogen electrode:",
            answers: {
                a: "- 0.34;",
                b: "- 1.22;",
                c: "   0;",
                d: "	 + 0.15;",
                e: "+ 0.220."
            },
            correctAnswer: "c"
        },
        {
            question: "380.	If in the half cell, the metal rod is suspended in а solution of one molar concentration, and the temperature is kept at 298 К, the electrode potential is called:",
            answers: {
                a: "Membrane potential;",
                b: "Diffuse potential;",
                c: "	 Electro-kinetic potential.",
                d: "	 Concentration potential;",
                e: "   tandard electrode potential;"
            },
            correctAnswer: "e"
        },
        {
            question: "381.	The reduction potentials of Zn, Cu, Fe, Ag are in the order:",
            answers: {
                a: "   Ag, Cu, Fe, Zn",
                b: "Cu, Ag, Fe, Zn",
                c: "	 Zn, Cu, Fe, Ag",
                d: "	 Fe, Zn, Cu, Ag",
                e: "Cu, Zn, Ag, Fe"
            },
            correctAnswer: "a"
        },
        {
            question: "382.	Which of the given electrodes: magnesium, zinc, aluminium, copper and gold has the highest negative charge?",
            answers: {
                a: "Zinc",
                b: "Copper",
                c: "	 Gold",
                d: "   Magnesium",
                e: "Aluminium"
            },
            correctAnswer: "d"
        },
        {
            question: "383.	Which of the electrodes: magnesium, zinc, aluminium, copper and gold has the highest positive charge?",
            answers: {
                a: "Zinc",
                b: "Copper",
                c: "	 Gold",
                d: "	 Magnesium",
                e: "   Aluminium"
            },
            correctAnswer: "e"
        },
        {
            question: "384.	Standard hydrogen electrode it is the platinum plate immersed in solution of H2SO4 at the temperatures 298 K and P=1.013·105 Pa with activity of ions of H3O+:",
            answers: {
                a: "0.5 mol/L",
                b: "   1 mol/L",
                c: "	 0.1 mol/L",
                d: "	 2 mol/L",
                e: "0.2 mol/L"
            },
            correctAnswer: "b"
        },
        {
            question: "385.	Which of the given electrodes silver chloride, calomel, hydrogen, zinc, copper, may be used as a reference electrode?",
            answers: {
                a: "Zinc",
                b: "Silver",
                c: "   Silver chloride",
                d: "	 Copper",
                e: "Hydrogen"
            },
            correctAnswer: "c"
        },
        {
            question: "386.	What is the potential of the hydrogen electrode immersed in to the distilled water at a standard temperature?",
            answers: {
                a: "+ 0.8 V",
                b: "+ 0.4 V",
                c: "	 - 0.8 V",
                d: "   0 V",
                e: "- 0.4 V"
            },
            correctAnswer: "d"
        },
        {
            question: "387.	Which electrode through the listed ones is used as a reference electrode for the potentiometry determining of pH?",
            answers: {
                a: "Glass electrode",
                b: "   Saturated calomel electrode",
                c: "	 Hydrogen electrode",
                d: "	 Copper electrode",
                e: "Zinc electrode"
            },
            correctAnswer: "b"
        },
        {
            question: "388.	Which electrode through the listed ones can be used as the indicator electrode for the potentiometry determining of pH?",
            answers: {
                a: "Copper electrode",
                b: "Znc electrode",
                c: "	 Calomel electrode",
                d: "	 Silver/silver chloride electrode",
                e: "   Glass electrode"
            },
            correctAnswer: "e"
        },
        {
            question: "389.	For measuring pH of solution and biological liquids is used such electrode:",
            answers: {
                a: "Zn/Zn2+ electrode;",
                b: "Calomel electrode;",
                c: "   Glass electrode;",
                d: "	 Ag/Ag+ electrode;",
                e: "Cu/Cu2+ electrode"
            },
            correctAnswer: "c"
        },
        {
            question: "390.	Scheme of silver-silver chloride electrode is:",
            answers: {
                a: "Pt, H2/2H+.",
                b: "Ме/Меn+.",
                c: "	 Zn/Zn2+.",
                d: "   Ag/AgCl, KCl.",
                e: "   Hg/Hg2Cl2, KCl."
            },
            correctAnswer: "d"
        },
        {
            question: "391.	In which of the given rows acid are placed in order of decreasing of surface tension their solutions of the same concentration?",
            answers: {
                a: "   CH3COOH– C3H7COOH–C4H9COOH– C8H17COOH",
                b: "CH3COOH– HCOOH –C3H7COOH – C5H11COOH",
                c: "	 C8H17COOH– C5H11COOH–C2H5COOH– HCOOH",
                d: "	 HCOOH –C3H7COOH – C5H11COOH – CH3COOH",
                e: "C4H9COOH - C8H17COOH - CH3COOH- C3H7COOH"
            },
            correctAnswer: "a"
        },
        {
            question: "392.	Select series acids placed in decreasing order surface tension of solutions equal concentration?",
            answers: {
                a: "Nothing listed",
                b: "C3H7COOH –C8H17COOH - C4H9COOH",
                c: "	 C8H17COOH – C5H11COOH – C2H5COOH",
                d: "	 CH3COOH – HCOOH – C3H7COOH",
                e: "   H3COOH – C3H7COOH – C4H9COOH"
            },
            correctAnswer: "e"
        },
        {
            question: "393.	Which of the listed compounds belong to surface active?",
            answers: {
                a: "Sulfoacids, amines",
                b: "   Soap and hydrocarboxylic acids",
                c: "	 Mineral acids and salts",
                d: "	 Alkalis, inorganic acids",
                e: "Alcohols and bases"
            },
            correctAnswer: "b"
        },
        {
            question: "394.	How will change physical and chemical properties at diminishing of length of hydrocarbon radical in the molecules of surface active compounds?",
            answers: {
                a: "Decrease interfacial tension",
                b: "None of these",
                c: "	 Adsorption increases",
                d: "	 Increase surface activity",
                e: "   Hydrophylic properties increase"
            },
            correctAnswer: "e"
        },
        {
            question: "395.	Chose the surface active compound which can be adsorbed on a water solution – air interfaces",
            answers: {
                a: "NaCl",
                b: "Sucrose",
                c: "	 NaOH",
                d: "   Butyric acid",
                e: "HCI"
            },
            correctAnswer: "d"
        },
        {
            question: "396.	Which of the given liquids has the maximal value of surface tension?",
            answers: {
                a: "Chloroform",
                b: "Ethanol",
                c: "	 Acetone",
                d: "	 Benzol",
                e: "   Water"
            },
            correctAnswer: "e"
        },
        {
            question: "397.	Which ions will be selectively adsorbed on the surface of slightly soluble silicic acid (Н2SiO3)?",
            answers: {
                a: "   H+",
                b: "Na+",
                c: "	 Ca2+",
                d: "	 Al3+",
                e: "SO42-"
            },
            correctAnswer: "a"
        },
        {
            question: "398.	If the surface tension decreases, the value of adsorption:",
            answers: {
                a: "Г < 1",
                b: "Г < 0",
                c: "   Г > 0",
                d: "	 Г = 1",
                e: "Г = 0"
            },
            correctAnswer: "c"
        },
        {
            question: "399.	If the surface tension not change, the value of adsorption:",
            answers: {
                a: "Г = 10",
                b: "Г = 0",
                c: "	 Г > 0",
                d: "	 Г = 1",
                e: "   Г < 0"
            },
            correctAnswer: "e"
        },
        {
            question: "400.	Surface tension is an important characteristic of liquids. For any of the substances it is maximum?",
            answers: {
                a: "   Water",
                b: "Ethanol",
                c: "	 Chloroform",
                d: "	 Benzene",
                e: "Acetone"
            },
            correctAnswer: "a"
        },
        {
            question: "401.	Choose surfactant:",
            answers: {
                a: "   С2H5OH",
                b: "HNO3",
                c: "	 NaCl",
                d: "	 K4Fe[(CN)6].",
                e: "H2О"
            },
            correctAnswer: "a"
        },
        {
            question: "402.	The surfactant is all compounds except:",
            answers: {
                a: "Alcohols.",
                b: "Fatty acids.",
                c: "   Sodium chloride.",
                d: "	 Amino acids.",
                e: "Proteins."
            },
            correctAnswer: "c"
        },
        {
            question: "403.	The surfactant is:",
            answers: {
                a: "Hydrochloric acid.",
                b: "Calcium hydroxide.",
                c: "	 Sodium chloride.",
                d: "   Cholic alcohol.",
                e: "Potassium."
            },
            correctAnswer: "d"
        },
        {
            question: "404.	The surfactant is:",
            answers: {
                a: "Hydrochloric acid.",
                b: "Calcium hydroxide.",
                c: "	 Sodium chloride.",
                d: "   Isoamil alcohol.",
                e: "Potassium."
            },
            correctAnswer: "d"
        },
        {
            question: "405.	The surfactants are compound, except:",
            answers: {
                a: "Alcohols.",
                b: "   Alkalis.",
                c: "	 Fatty acids salts.",
                d: "	 Protein.",
                e: "Ethers."
            },
            correctAnswer: "b"
        },
        {
            question: "406.	The surfactant is:",
            answers: {
                a: "Hydrochloric acid.",
                b: "   ills acids.",
                c: "	 Calcium hydroxide.",
                d: "	 Sodium chloride.",
                e: "Potassium."
            },
            correctAnswer: "b"
        },
        {
            question: "407.	What ion has the greatest adsorptive activity?",
            answers: {
                a: "Sr+2",
                b: "Са+2",
                c: "   e+3",
                d: "	 Ba+2",
                e: "Na+"
            },
            correctAnswer: "c"
        },
        {
            question: "408.	What ion has the greatest adsorptive activity?",
            answers: {
                a: "Sr+2",
                b: "Са+2",
                c: "	 Mg+2",
                d: "   Ba+2",
                e: "Be+2"
            },
            correctAnswer: "d"
        },
        {
            question: "409.	What ion has the greatest adsorptive activity?",
            answers: {
                a: "К+",
                b: "Са+2",
                c: "	Fe+3",
                d: "  Sn+4",
                e: "Na+"
            },
            correctAnswer: "d"
        },
        {
            question: "410.	Which of the following interface cannot be obtained",
            answers: {
                a: "Liquid-liqud",
                b: "Liqud-gas",
                c: "	 Liquid-solid",
                d: "   Gas-gas",
                e: "Gas-solid"
            },
            correctAnswer: "d"
        },
        {
            question: "411.	What concept is correct?",
            answers: {
                a: "Surfactant increase surface tension at twice.",
                b: "Surfactant does not change surface tension.",
                c: "	 Surfactant increase surface tension at 4 times.",
                d: "   Surface inactive compound decrease surface tension.",
                e: "Surfactant increase surface tension in 3 times."
            },
            correctAnswer: "d"
        },
        {
            question: "412.	Increasing the polarity of liquid molecules, the surface tension at the interface liquid-gas is:",
            answers: {
                a: "Lowered;",
                b: "   Increased;",
                c: "	 The surface tension does not depend on the polarity.",
                d: "	 Remains unchanged",
                e: "Lowered to zero"
            },
            correctAnswer: "b"
        },
        {
            question: "413.	Application of active coal for cleaning of antibiotics is based on the process of spontaneous change of concentration of a component in the superficial layer of aqueous solutions, comparatively with the bulk of the solution. This process is:",
            answers: {
                a: "Adhesion",
                b: "Moistening",
                c: "	 Cohesion",
                d: "	 Desorption",
                e: "   Adsorption"
            },
            correctAnswer: "e"
        },
        {
            question: "414.	Application of activated coal in medical practice is based on its:",
            answers: {
                a: "   High adsorptivity",
                b: "Lipophilic properties",
                c: "	 Solubility in water",
                d: "	 Low density",
                e: "Hydrophilic properties"
            },
            correctAnswer: "a"
        },
        {
            question: "415.	Which one of the listed phenomena belongs to the sorption process?",
            answers: {
                a: "Sublimation",
                b: "Fractionating",
                c: "	 Desorption",
                d: "   Absorption",
                e: "Dissolution"
            },
            correctAnswer: "d"
        },
        {
            question: "416.	How does the process of physical adsorption change with the decreasing of temperature?",
            answers: {
                a: "None is true",
                b: "It is decreased",
                c: "	 Does not change",
                d: "   It is increased",
                e: "All statements are correct"
            },
            correctAnswer: "d"
        },
        {
            question: "417.	How does the process of chemisorption change with the increasing of temperature?",
            answers: {
                a: "It is decreased sinewave",
                b: "It is increased sinewave",
                c: "	 Does not change",
                d: "   It is increased",
                e: "It is decreased"
            },
            correctAnswer: "d"
        },
        {
            question: "418.	Water has anomalous large surface tension because:",
            answers: {
                a: "   Large forces of attraction between dipole of water",
                b: "Constantly evaporation",
                c: "	 Small forces of attraction between dipole of water",
                d: "	 Small reserve of surface free energy",
                e: "Forces of interaction between the molecules do not exist"
            },
            correctAnswer: "a"
        },
        {
            question: "419.	How is calculate the enthalpies of reactions?",
            answers: {
                a: "All correct",
                b: "ΔH0 = ( Sum of the standard enthalpies of formation of products) : ( Sum of the standard enthalpies of formation of  reactants)",
                c: "	ΔH0 =  (Sum of the standard enthalpies of formation of  reactants) - ( Sum of the standard enthalpies of formation of products)",
                d: "	ΔH0 = ( Sum of the standard enthalpies of formation of products) + ( Sum of the standard enthalpies of formation of  reactants)",
                e: "  H0 = ( Sum of the standard enthalpies of formation of products)-( Sum of the standard enthalpies of formation of  reactants)"
            },
            correctAnswer: "e"
        },
        {
            question: "420.	With increasing temperature the surface tension:",
            answers: {
                a: "Increased, after then decrease",
                b: "Decrease, after then increased",
                c: "   Decrease",
                d: "	 Increase",
                e: "Does not change"
            },
            correctAnswer: "c"
        },
        {
            question: "421.	Which of the listed compounds belong to surface active?",
            answers: {
                a: "Mineral acids and salts",
                b: "Alcohols and bases",
                c: "	 Alkalis, inorganic acids",
                d: "	 Sulfoacids, amines",
                e: "   Soap and hydrogen carboxylic acids"
            },
            correctAnswer: "e"
        },
        {
            question: "422.	An oktanol (C8H17OH) decreases the surface tension of water, because it:",
            answers: {
                a: "   Has small own surface tension",
                b: "Has large surface tension",
                c: "	 Insoluble in water",
                d: "	 Surface tension is constant",
                e: "Well absorbed"
            },
            correctAnswer: "a"
        },
        {
            question: "423.	At diminishing of length of hydrocarbon radical in the molecules of surface active compounds:",
            answers: {
                a: "Surface activity increase",
                b: "   Own surface tension increase",
                c: "	 Solubility increase",
                d: "	 No one",
                e: "Hydrophilic properties increase"
            },
            correctAnswer: "b"
        },
        {
            question: "424.	In physical adsorption the gas molecules are held to the solid surface by",
            answers: {
                a: "Hydrogen bond",
                b: "Sigma bond",
                c: "	 Pi bond",
                d: "	 Van der Waal’s forces",
                e: "   Coordination bond"
            },
            correctAnswer: "e"
        },
        {
            question: "425.	Choose surfactant:",
            answers: {
                a: "   С2H5OH",
                b: "HNO3",
                c: "	 NaCl",
                d: "	 K4Fe[(CN)6].",
                e: "H2О"
            },
            correctAnswer: "a"
        },
        {
            question: "426.	The surfactant is:",
            answers: {
                a: "Hydrochloric acid.",
                b: "Calcium hydroxide.",
                c: "	 Sodium chloride.",
                d: "   Cholic alcohol.",
                e: "Potassium."
            },
            correctAnswer: "d"
        },
        {
            question: "427.	If the surface tension not change, the value of adsorption:",
            answers: {
                a: "   Г < 1",
                b: "   Г = 0",
                c: "	 Г > 0",
                d: "	 Г = 1",
                e: "Г < 0"
            },
            correctAnswer: "b"
        },
        {
            question: "428.	Record of reaction of N2(g)+ O2(g)= 2NO(g) - 180,8 kJ/mol means that:",
            answers: {
                a: "For formation 2 mol NO is selected 90,4 kJ heat",
                b: "For formation 1 mol N2 and 1 mol O2 is selected 90,4 kJ heat",
                c: "	For formation1 mol N2 and 1 mol O2 is released 180,8 кJ heat",
                d: "  or formation 1 mol NO is released 90,4 kJ heat",
                e: "For formation 1 mol of NO is taken of 180,8 kJ heat"
            },
            correctAnswer: "d"
        },
        {
            question: "429.	What is the number of electrons, losted or gained according with the transformation: S0 → H2S?",
            answers: {
                a: "4",
                b: "5",
                c: "   2",
                d: "	 3",
                e: "1"
            },
            correctAnswer: "c"
        },
        {
            question: "430.	What is the number of electrons, losted or gained according with the transformation: NO → NO2?",
            answers: {
                a: "   2",
                b: "5",
                c: "	 1",
                d: "	 3",
                e: "4"
            },
            correctAnswer: "a"
        },
        {
            question: "431.	What is the number of electrons, losted or gained according with the transformation: MgO → Mg?",
            answers: {
                a: "1",
                b: "   2",
                c: "	 5",
                d: "	 4",
                e: "3"
            },
            correctAnswer: "b"
        },
        {
            question: "432.	What is the number of electrons, losted or gained according with the transformation: HNO3→NO?",
            answers: {
                a: "5",
                b: "   3",
                c: "	 1",
                d: "	 2",
                e: "4"
            },
            correctAnswer: "b"
        },
        {
            question: "433.	What is the number of electrons, losted or gained according with the transformation: N2 → NO?",
            answers: {
                a: "5",
                b: "1",
                c: "     4",
                d: "	 3",
                e: "2"
            },
            correctAnswer: "c"
        },
        {
            question: "434.	What is the number of electrons, losted or gained according with the transformation: O2→CuO?",
            answers: {
                a: "1",
                b: "     4",
                c: "	 2",
                d: "	 5",
                e: "3"
            },
            correctAnswer: "b"
        },
        {
            question: "435.	What is the number of electrons, losted or gained according with the transformation: H2SO4 → S?",
            answers: {
                a: "4",
                b: "7",
                c: "	 5",
                d: "	 8",
                e: "   6"
            },
            correctAnswer: "e"
        },
        {
            question: "436.	What is the number of electrons, losted or gained according with the transformation: S →H2SO4?",
            answers: {
                a: "8",
                b: "   6",
                c: "	 5",
                d: "	 4",
                e: "7"
            },
            correctAnswer: "b"
        },
        {
            question: "437.	What is the number of electrons, losted or gained according with the transformation: H2S → SO2?",
            answers: {
                a: "7",
                b: "4",
                c: "	 5",
                d: "   6",
                e: "3"
            },
            correctAnswer: "d"
        },
        {
            question: "438.	What is the number of electrons, losted or gained according with the transformation: NH3 → N2.",
            answers: {
                a: "7",
                b: "3",
                c: "	 5",
                d: "   6",
                e: "4"
            },
            correctAnswer: "d"
        },
        {
            question: "439.	What is the number of electrons, losted or gained according with the transformation: HNO3 → NH4Cl?",
            answers: {
                a: "7",
                b: "6",
                c: "	 9",
                d: "   8",
                e: "5"
            },
            correctAnswer: "d"
        },
        {
            question: "440.	What is the number of electrons, losted or gained according with the transformation: HNO3 → NH3?",
            answers: {
                a: "   5",
                b: "7",
                c: "	 8",
                d: "	 6",
                e: "9"
            },
            correctAnswer: "a"
        },
        {
            question: "441.	What is the number of electrons, losted or gained according with the transformation: HNO3 → N2O?",
            answers: {
                a: "  8",
                b: "6",
                c: "	 4",
                d: "	 5",
                e: "7"
            },
            correctAnswer: "a"
        },
        {
            question: "442.	What is the number of electrons, losted or gained according with the transformation: H2SO4 → H2S.",
            answers: {
                a: "5",
                b: "6",
                c: "	 7",
                d: "	 4",
                e: "  8"
            },
            correctAnswer: "e"
        },
        {
            question: "443.	E in Nernst equation: E = E^0 - (RT/nF)InQ is:",
            answers: {
                a: "Mass-action expression",
                b: "  lectrode potential",
                c: "	Standard electrode potential",
                d: "	EMF",
                e: "Oxidation potential"
            },
            correctAnswer: "b"
        },
        {
            question: "444.	Silver electrode is:",
            answers: {
                a: "    Metal-metal ion electrode",
                b: "Membrane electrode",
                c: "	Gas-ion electrodes",
                d: "	Metal-insoluble salt-anion electrode",
                e: "Inert ' oxidation - reduction ' electrode"
            },
            correctAnswer: "a"
        },
        {
            question: "445.	E0 in Nernst equation: E = E^0 - (RT/nF)InQ is:",
            answers: {
                a: "Mass-action expression",
                b: "Electrode potential",
                c: "     Standard electrode potential",
                d: "	 EMF",
                e: "Oxidation potential"
            },
            correctAnswer: "c"
        },
        {
            question: "446.	“Ea” in Arhenius equation ( In K = InA - (Ea/RT) ) is:",
            answers: {
                a: "    Activation energy.",
                b: "Pre-exponential factor or the frequency factor.",
                c: "	Boltzmann distribution.",
                d: "	Activation Gibbs energy.",
                e: "Rate constant."
            },
            correctAnswer: "a"
        },
        {
            question: "447.	“k” in Arhenius equation ( In K = InA - (Ea/RT) ) is:",
            answers: {
                a: "Activation energy.",
                b: "Pre-exponential factor or the frequency factor.",
                c: "	Boltzmann distribution.",
                d: "	Activation Gibbs energy.",
                e: "    Rate constant."
            },
            correctAnswer: "e"
        }
    ];

    function buildQuiz() {
        // we'll need a place to store the HTML output
        var output = [];
        // for each question...
        myQuestions.forEach(function (currentQuestion, questionNumber) {
            // we'll want to store the list of answer choices
            var answers = [];
            // and for each available answer...
            for (letter in currentQuestion.answers) {
                // ...add an HTML radio button
                answers.push("<label>\n             <input type=\"radio\" name=\"question" + questionNumber + "\" value=\"" + letter + "\">\n              " + letter + " :\n              " + currentQuestion.answers[letter] + "\n           </label>");
            }
            // add this question and its answers to the output
            output.push("<div class=\"slide\">\n           <div class=\"question\"> " + currentQuestion.question + " </div>\n           <div class=\"answers\"> " + answers.join("") + " </div>\n         </div>");
        });
        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join("");
    }

    function showResults() {
        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll(".answers");
        // keep track of user's answers
        var numCorrect = 0;
        // for each question...
        myQuestions.forEach(function (currentQuestion, questionNumber) {
            // find selected answer
            var answerContainer = answerContainers[questionNumber];
            var selector = "input[name=question" + questionNumber + "]:checked";
            var userAnswer = (answerContainer.querySelector(selector) || {}).value;
            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;
                // color the answers green
                answerContainers[questionNumber].style.color = "lightgreen";
            } else {
                // if answer is wrong or blank
                // color the answers red
                answerContainers[questionNumber].style.color = "red";
            }
        });
        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + " out of " + myQuestions.length;
    }

        function checkAnswer () {

          // get active slide
          var activeSlides = document.getElementsByClassName('active-slide')[0];

          // active question
          var question = activeSlides.childNodes[1].innerText;

          // active options
          var answers = activeSlides.childNodes[3].childNodes;

          // active slide inputs
          var inputName;

          // selected answer
          var option;

          // correct answer to the question
          var correctAnswer;


          // loop through options
          for (var i = 0; i < answers.length-1; i++) {

            if (answers[i].nodeName != '#text') {

              // get checked option
              if (answers[i].firstElementChild.checked) {

                option = answers[i].firstElementChild.value;
                inputName = answers[i].firstElementChild.name;

              } else {

                // get input name
                inputName = answers[i].firstElementChild.name;

              }

            }

          }


          // check if answer is right
          for (var i = 0; i < myQuestions.length; i++) {

            if (question == myQuestions[i].question) {
              if (option == myQuestions[i].correctAnswer) {

                correctAnswer = myQuestions[i].answers[option];

                for (var i = 0; i < answers.length-1; i++) {

                    if (answers[i].nodeName != '#text') {

                      answers[i].style.color = 'red';

                        if (option === answers[i].firstElementChild.value) {

                          answers[i].style.color = 'green';

                        }

                    }

                }

              } else {

                for (var i = 0; i < myQuestions.length; i++) {

                  if (question == myQuestions[i].question) {

                    for (var j = 0; j < answers.length-1; j++) {

                      if (answers[j].nodeName != '#text') {

                        answers[j].style.color = 'red';

                        if (myQuestions[i].correctAnswer === answers[j].firstElementChild.value) {

                          answers[j].style.color = 'green';

                        }

                      }

                    }

                  }

                }

              }

            }

          }

        }


        function showSlide(n) {
            slides[currentSlide].classList.remove("active-slide");
            slides[n].classList.add("active-slide");
            currentSlide = n;

            if (currentSlide === 0) {
                previousButton.style.display = "none";
            } else {
                previousButton.style.display = "inline-block";
            }

            if (currentSlide === slides.length - 1) {
                nextButton.style.display = "none";
                submitButton.style.display = "inline-block";
            } else {
                nextButton.style.display = "inline-block";
                submitButton.style.display = "none";
            }
        }


        function showNextSlide() {
            showSlide(currentSlide + 1);
        }

        function showPreviousSlide() {
            showSlide(currentSlide - 1);
        }

        var quizContainer = document.getElementById("quiz");
        var resultsContainer = document.getElementById("results");
        var submitButton = document.getElementById("submit");

        // display quiz right away
        buildQuiz();

        var previousButton = document.getElementById("previous");
        var nextButton = document.getElementById("next");
        var slides = document.querySelectorAll(".slide");
        var checkButton = document.getElementById("check");
        let currentSlide = 0;

        showSlide(0);

        // on submit, show results
        checkButton.addEventListener("click", checkAnswer);
        submitButton.addEventListener("click", showResults);
        previousButton.addEventListener("click", showPreviousSlide);
        nextButton.addEventListener("click", showNextSlide);
    })();
