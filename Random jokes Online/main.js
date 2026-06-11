let xhr = new XMLHttpRequest();
xhr.open('GET' , 'https://api.chucknorris.io/jokes/random');

let p = document.getElementById('joke_text');
               
function run(){
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4 && xhr.status === 200 ) {
            let joke = JSON.parse(xhr.responseText);
            p.innerHTML = '';
            let li = document.createElement('li');
            li.innerHTML = `${joke.value}`;
            p.appendChild(li);
        }
    }
}

run();

xhr.send();


btn.addEventListener('click', () => {
    xhr.open('GET' , 'https://api.chucknorris.io/jokes/random');
    p.innerHTML = 'Loading...';

    run();
    xhr.send();
})



