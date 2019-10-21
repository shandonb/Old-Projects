
debugger;
//Begin character variables
    let name = '';
    let age = 140
// End character variables

// Begin Elf name generator
    //Define needed global variables
    const elvenPrefixes = ['Ael', 'Aer', 'Af', 'Ah', 'Al', 'Am', 'Ama', 'An', 'Ang', 'Ansr', 'Ar', 'Ari', 'Arn', 'Aza', 'Bael', 'Bes', 'Cael', 'Cal', 'Cas', 'Cla', 'Cor', 'Cy', 'Dae', 'Dho', 'Dre', 'Du', 'Eil', 'Eir', 'El', 'Er', 'Ev', 'Fera', 'Fi', 'Fir', 'Fis', 'Gael', 'Gar', 'Gil', 'Ha', 'Hu', 'Ia', 'Il', 'Ja', 'Jar', 'Ka', 'Kan', 'Ker', 'Keth', 'Koeh', 'Kor', 'Ky', 'La', 'Laf', 'Lam', 'Lue', 'Ly', 'Mai', 'Mal', 'Mara', 'My', 'Na', 'Nai', 'Nim', 'Nu', 'Ny', 'Py', 'Raer', 'Re', 'Ren', 'Rhy', 'Ry', 'Ru', 'Rua', 'Rum', 'Rid', 'Sae', 'Seh', 'Sel', 'Sha', 'She', 'Si', 'Sim', 'Sol', 'Sum', 'Syl', 'Ta', 'Tahl', 'Tha', 'Tho', 'Ther', 'Thro', 'Tia', 'Tra', 'Ty', 'Try', 'Uth', 'Ver', 'Vil', 'Von', 'Ya', 'Za', 'Zy'];
    const elvenSuffixes = ['ae', 'nae', 'ael', 'aias', 'aera', 'aer', 'aia', 'ah', 'aha', 'aith', 'aira', 'al', 'ala', 'la', 'lae', 'llae', 'ali', 'am', 'an', 'ana', 'a', 'ani', 'uanna', 'ar', 'ara', 'ra', 'ari', 'ri', 'aro', 'ro', 'as', 'ash', 'sah', 'ath', 'avel', 'brar', 'dar', 'adar', 'odar', 'deth', 'eath', 'eth', 'dre', 'drim', 'drimme', 'udrim', 'dul', 'ean', 'el', 'ele', 'ela', 'emar', 'en', 'er', 'erl', 'ern', 'ess', 'esti', 'evar', 'fel', 'afel', 'efel', 'hal', 'ahal', 'ihal', 'har', 'ihar', 'uhar', 'hel', 'ahel', 'ihel', 'ian', 'ianna', 'ia', 'ii', 'ion', 'iat', 'ik', 'il', 'iel', 'ila', 'lie', 'im', 'in', 'inar', 'ine', 'ir', 'ira', 'ire', 'is', 'iss', 'ist', 'ith', 'lath', 'lith', 'lyth', 'kash', 'ashk', 'okash', 'ki', 'lan', 'lan', 'lanna', 'lean', 'olan', 'ola', 'lam', 'ilam', 'ulam', 'lar', 'lirr', 'las', 'lian', 'lia', 'lis', 'elis', 'lys', 'lon', 'ellon', 'lyn', 'llin', 'lihn', 'mah', 'ma', 'mahs', 'mil', 'imil', 'umil', 'mus', 'nal', 'inal', 'onal', 'nes', 'nin', 'nine', 'nyn', 'nis', 'anis', 'on', 'onna', 'or', 'oro', 'oth', 'othi', 'que', 'quis', 'rah', 'rae', 'raee', 'rad', 'rahd', 'rail', 'ria', 'aral', 'ral', 'ryl', 'ran', 're', 'reen', 'reth', 'rath', 'ro', 'ri', 'ron', 'ruil', 'aruil', 'eruil', 'sal', 'isal', 'sali', 'san', 'sar', 'asar', 'isar', 'sel', 'asel', 'isel', 'sha', 'she', 'shor', 'spar', 'tae', 'itae', 'tas', 'itas', 'ten', 'iten', 'thal', 'that', 'ethal', 'etha', 'thar', 'ethat', 'ithar', 'ther', 'ather', 'thir', 'thi', 'ethil', 'thil', 'thus', 'thas', 'aethus', 'aethas', 'ti', 'eti', 'til', 'tril', 'tria', 'atri', 'atril', 'atria', 'ual', 'lua', 'uath', 'luth', 'uth', 'us', 'ua', 'van', 'vanna', 'var', 'vain', 'avain', 'vara', 'avar', 'avara', 'via', 'avia', 'vin', 'avin', 'wyn', 'ya', 'yr', 'yn', 'yth', 'zair', 'zara', 'azair', 'ezara' ];
    const elvenHousePrefixes = ['Alean', 'Alea', 'Arabi', 'Arkenea', 'Auvrea', 'Baequi', 'Banni', 'CyGreen', 'Dirth', 'Dryear', 'Dwin\'', 'Eyllis', 'Eyther', 'Freani', 'Gysse', 'Heasi', 'Hlae', 'Hunith', 'Kennyr', 'Kille', 'Maern', 'Melith', 'Myrth', 'Norre', 'Orle', 'Oussea', 'Rilynn', 'Teasen\'', 'Tyr', 'Tyrnea'];
    const elvenHouseSuffixes = ['altin', 'anea', 'annia', 'aear', 'arnith', 'atear', 'athem', 'dlues', 'elvris', 'eplith', 'ettln', 'ghynn', 'itryn', 'lylth', 'mitore', 'nddare', 'neldth', 'rae', 'raheal', 'rretyn', 'sithek', 'thym', 'tlarn', 'tlithar', 'tylar', 'undlin', 'urdrenn', 'valsa', 'virrea', 'zea']
    let elvenName = '';

    //Define functions to select name parts
    function getName() {
        const prefixIndex = Math.floor(Math.random() * elvenPrefixes.length)
        const suffixIndex = Math.floor(Math.random() * elvenSuffixes.length);
        elvenName += elvenPrefixes[prefixIndex];
        elvenName += elvenSuffixes[suffixIndex] + ' ';
    }

    function getHouseName() {
        const housePrefixIndex = Math.floor(Math.random() * elvenHousePrefixes.length);
        const houseSuffixIndex = Math.floor(Math.random() * elvenHouseSuffixes.length);
        elvenName += elvenHousePrefixes[housePrefixIndex] + elvenHouseSuffixes[houseSuffixIndex];
    }

    //Define function to randomize name and print to console
    function generateElf() {
        elvenName = '';
        getName();
        getHouseName();
        return elvenName;
    }
//End Elf name generator

//Begin Human name generator
const dictionary = {
    alphabet: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    vowels: ['A', 'E', 'I', 'O', 'U'],
    consonants: ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Z'],
    flexible: ['Y', 'H', 'L', 'R'],
};

let humanName = {
    firstName: '',
    lastName: '',
    lastStaged: '',
};

let dictionaryChooser = (stagedName) => {
    if (stagedName.length === 0){
        return 0;
    } else if (humanName.lastStaged === 'Q') {
        return 1;
    } else if (dictionary.consonants.indexOf(humanName.lastStaged) === -1) {
        return 2;
    } else {
        return 3;
    };
};

function generateLetter(which, source) {
    let i = Math.floor(Math.random()* source.length);
    humanName.lastStaged = source[i];
    if (which.length === 0) {
        return source[i];
    } else {
        return source[i].toLowerCase();
    }

};

function chooseDictionary(whichName) {
    switch (dictionaryChooser(whichName)){
        case 0:
            return dictionary.alphabet;
            break;
        case 1:
            return 'u';
            break;
        case 2:
            return dictionary.consonants;
            break;
        case 3:
            return dictionary.vowels;
            break;
    };
};

function generateName(nameToGenerate) {
    //name = '';
    let l = Math.floor(Math.random() *6) + 4;
    for (let i = 0; i <= l; i++) {
    nameToGenerate += generateLetter(nameToGenerate, chooseDictionary(nameToGenerate));
    };
    return nameToGenerate;
};

function generateHuman() {
    return `${generateName(humanName.firstName)} ${generateName(humanName.lastName)}`;

};
// End Human Name Generator

//Begin data collection from page
    //Begin race data collection
        const race = (raceValue) => {
            switch (raceValue) {
                case "0":
                    return 'Elf';
                    break;
                case "1":
                    return 'Dwarf';
                    break;
                case "2":
                    return "Human";
                    break;
                default:
                    return "Error";
                    break;
            };
        };
    //End race data collection

    //Begin gender data collection
        const gender = (genderValue) => {
            switch (genderValue) {
                case "0":
                    return 'male';
                    break;
                case "1":
                    return 'female';
                    break;
                case "2":
                    return 'nonbinary';
                    break;
                default:
                    return "male";
                    break;
            };
        };
    //End gender data collection

    //Begin age data collection
    const ageRange = (ageValue) => {
        switch (ageValue) {
            case "0":
                return 'young';
                break;
            case "1":
                return 'middle';
                break;
            case "2":
                return "old";
                break;
            default:
                return "middle";
                break;
        };
    };
    //End age data collection

//End data collection from page

//Begin generating values for variables
    let pronoun = () => {
        if (gender(genderValue) === 'male') {
            return'He';
        } else if (gender(genderValue) === 'female') {
            return 'She';
        } else {
            return 'They';
        };
    };

    let areIs = () => {
        if (pronoun() === 'They') {
            return 'are';
        } else {
            return 'is';
        };
    };
// End generating values for variables

// Testing Area
let raceValue = '';
let genderValue = '';
let ageValue = '';
function getRadioValues() {
     raceValue = document.getElementsByName('race');
     genderValue = document.getElementsByName('gender');
     ageValue = document.getElementsByName('age');

    for (i = 0; i < raceValue.length; i++) {
        if(raceValue[i].checked)
        raceValue = raceValue[i].value;
    }

    for (i = 0; i < genderValue.length; i++) {
        if(genderValue[i].checked)
        genderValue = genderValue[i].value;
    }

    for (i = 0; i < ageValue.length; i++) {
        if(ageValue[i].checked)
        ageValue = ageValue[i].value;
    }


}

// Begin character generation sequence
    function generateCharacter() {
        // Zero out all values

        //Generate name based on race    
            if (race(raceValue) === 'Human') {
                name = generateHuman();
            } else if (race(raceValue) === 'Elf') {
                name = generateElf();
            } else {
                name = 'Error';
            };
        //End name generation

        document.getElementById("generatedCharacter").innerHTML = `Your character is a ${gender(genderValue)} ${race(raceValue)} named ${name}. ${pronoun()} ${areIs()} ${age} years old.`;
    };
// End character generation sequence

// Begin page specific commands
    document.getElementById("generate").addEventListener("click", generateCharacter);
// End page specific commands


 /* TO DO
 Use the following code to make the selectors actually work:

 <!DOCTYPE html>
<html>
<script>
function generateName(race) {
	switch (race)
	{
	case "0":
		document.getElementById("chosenRace").innerHTML = "Elf";
		break
	case "1":
		document.getElementById("chosenRace").innerHTML = "Dwarf";
		break
	case "2":
		document.getElementById("chosenRace").innerHTML = "Human";
        break
    case "3":
    	document.getElementById("chosenRace").innerHTML = "Testing";
        break
    default:
    	alert("something broke...");
        break
	}
}
</script>

<h3>Choose Race</h3>
<label>
	<input type="radio" name="race" value="0" onclick="gender(this.value);"> Elf 
</label>
<label>
	<input type="radio" name="race" value="1" onclick="generateName(this.value);"> Dwarf 
</label>
<label>
	<input type="radio" name="race" value="2" onclick="generateName(this.value);"> Human 
</label>
<label>
	<input type="radio" name="race" value="3" onclick="generateName(this.value);"> Random
</label><br><br>
<p id="chosenRace"></p>
</body>
</html>

END TO DO */