document.getElementById('body').innerHTML = '<header style="height:200px; width:800px; border: 2px solid red; box-sizing: border-box;"></header><main style="display: flex;"><nav style="height:400px; width:100px; border: 2px solid orange; box-sizing: border-box;"></nav><section id="section1" style=" height:400px; width:700px; border: 2px solid orange; box-sizing: border-box;"></section></main><footer style="height: 200px; width:800px; border: 2px solid gray; box-sizing: border-box;"></footer>';
let name, surname, age;
name = prompt('Введите имя', 'Ваше имя');
surname = prompt('Введите фамилию', 'Ваша фамилия');
age = prompt('Введите возраст', 'Ваш возраст');
document.getElementById('section1').innerHTML ="<p>Ваше имя: " + name + "</p>" + "<br><p>Ваша фамилия: " + surname + "</p><br><p></p>Ваш возраст: " + age + "</p>";
let number1, number2, number3;
number1 = +prompt('Number 1');
number2 = +prompt('Number 2');
number3 = +prompt('Number 3');
let avg = (number1+number2+number3)/3;
document.getElementById('section1').insertAdjacentHTML('beforeend',"<p>AVG: " + avg + "</p>");