function submitClick(){
    let text = document.getElementById('inputStr').value;
    let splitWord = text.split(' ');
    let textWithNoSpace = splitWord.join('');
    let totalChar = textWithNoSpace.length;
    let totalWord = splitWord.length;


    let totalCharShow=document.getElementById('totalChar');
    totalCharShow.innerHTML=totalChar;

    let totalWordShow=document.getElementById('totalWord');
    totalWordShow.innerHTML=totalWord;

    console.log("Total Characters: " + totalChar)
    console.log("Total Word: " + totalWord)
    

    let count = 0;
    const vowels = ['a','e','i','o','u'];
    const numbers = [0,1,2,3,4,5,6,7,8,9]
    
    // count vowels
    for (char of text){
        if (vowels.includes(char)){
            count++;
        }
    }
    console.log("Total Vowels: " + count);

    let totalVowelShow=document.getElementById('totalVowel');
    totalVowelShow.innerHTML=count;


    // let replaceNum=text.replace(/a/g,'1')
    //                    .replace(/e/g, '2')
    //                    .replace(/i/g,'3')
    //                    .replace(/o/g,'4')
    //                    .replace(/u/g,'5');
    
    
    // console.log(replaceNum)

    // replace vowels with number
    let charsinStr=text.split('');
    let countChar = 0;
    for (let i = 0; i < charsinStr.length; i++){
        if (vowels.includes(charsinStr[i])){
            countChar++;
            // replace the vowel with numbers (di array replacenya gabisa pakai .replace)
            charsinStr[i]=countChar
        }
    }
    // convert array to string
    let result = charsinStr.join('');
    console.log(result);

    let changeToNumber=document.getElementById('changeToNumber');
    changeToNumber.innerHTML=result;
    
    

    // replace vowels with fibonacci
    let prev=0;
    let next=1;
    let fibonacci=[0]
    let splitChar=text.split('')
    let num=0;

    for (let i=0; i<splitChar.length; i++){
        let sum=next;
        next=prev+next;
        prev=sum;
        // menambahkan hasil ke dalam array
        fibonacci.push(sum)

        if (vowels.includes(splitChar[i])){
            splitChar[i]=fibonacci[num];
            num += 1;
            
        }
    }
    let res=splitChar.join('');
    console.log(res)

    let changeToFibo=document.getElementById('changeToFibo');
    changeToFibo.innerHTML=res;




    // Replace middle characters with stars
    let splitText=text.split(" ");
    
    let middle = [];
    let results = [];

    for (let i=0; i < splitText.length; i++){
        
        middle = splitText[i].slice(1, splitText[i].length - 1).split(""); 

        for (let j = 0; j < middle.length; j++){
            middle[j]='*'
        }

        results.push(splitText[i].slice(0,1) + middle.join('') + splitText[i].slice(splitText[i].length-1))
    }
    

    console.log(results.join(' '))

    let changeToStar=document.getElementById('changeToStar');
    changeToStar.innerHTML=results.join(' ');


}