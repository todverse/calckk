


function suck() {
    let weigth = Number(document.getElementById('weigth').value);
    let height = Number(document.getElementById('height').value);
    let age = Number(document.getElementById('age').value);
    let intens;
    let sex;
    if (document.getElementById('min').checked) {
        intens = 1.2;
    } else if (document.getElementById('small').checked) {
        intens = 1.38;
    } else if (document.getElementById('medium').checked) {
        intens = 1.46;
    } else if(document.getElementById('hard').checked) {
        intens = 1.55;
    } else if(document.getElementById('veryHard').checked) {
        intens = 1.9;
    }
    if(document.getElementById('male').checked) {
        sex = 'male';
    } else if (document.getElementById('female').checked) {
        sex = 'female';
    }
    let result = calculate(weigth, height, age, sex, intens);
    result = Number(result.toFixed(0));
    let example = document.getElementById('results');
    if (!example) {
    let div = document.createElement("div");
    let h1 = document.createElement('div');
    let h12 = document.createElement('div');
    let h13 = document.createElement('div');
    let text1 = document.createElement('h1');
    let text2 = document.createElement('h1');
    let text3 = document.createElement('h1');
    let Text1 = document.createElement('p');
    let Text2 = document.createElement('p');
    let Text3 = document.createElement('p');
    div.id = 'results';
    h1.className = 'text';
    h1.id = 'firstText';
    h12.className = 'text';
    h13.className = 'text';
    h1.appendChild(text1);
    h12.appendChild(text2);
    h13.appendChild(text3);
    div.appendChild(h1);
    div.appendChild(h12);
    div.appendChild(h13);
    h1.appendChild(Text1);
    h12.appendChild(Text2);
    h13.appendChild(Text3);
    document.body.append(div);
    if (result != undefined){
    text1.innerHTML = result + '<span class="kal">ккал</span>';
    Text1.innerHTML = 'Суточная норма каллорий';
    Text2.innerHTML = 'Необходимо что бы скинуть вес';
    Text3.innerHTML = 'Необходимо что бы набрать вес';
    text2.innerHTML = result - result/4 + '<span class="kal">ккал</span>';
    text3.innerHTML = result + result/4 + '<span class="kal">ккал</span>';
    }
    window.scroll(0,1000);
    }
}
function del() {
    let example = document.getElementById('results');
    if (example) {
    document.getElementById('results').remove();
    }
    let obj = document.getElementsByName('sex');
    for(let i = 0; i<2; i++) {
        obj[i].checked = false;
    }
    let obj2 = document.getElementsByName('character');
    for(let i = 0; i<3; i++) {
        obj2[i].value = null;
    }
    let obj3 = document.getElementsByName('active');
    for(let i = 0; i<5; i++) {
        obj3[i].checked = false;
    }
 }


let calculate = (weigth, height, age, sex, intens) => {
    if(sex == 'male') {
     return (weigth*10 + height*6.25 - age*5 + 5)*intens;
    } else if(sex == 'female') {
       return (weigth*10 + height*6.25 - age*5 - 161)*intens;
    }
};
