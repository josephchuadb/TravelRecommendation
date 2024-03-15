function searchCondition() {
    const input = document.getElementById('conditionInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    fetch('travel_recommendation_api.json').then(response => response.json()).then(data => {
        const countries = data.countries.find(item => item.name.toLowerCase() === input);
        console.log(countries);
        if (countries) {
          const cities = countries.cities[0];
          console.log(cities.name);
          resultDiv.innerHTML += `<h2>${cities.name}</h2>`;
          resultDiv.innerHTML += `<img src="${cities.imageUrl}" alt="hjh">`;
          resultDiv.innerHTML += `<p><strong>Description:</strong> ${cities.description}</p>`;
          resultDiv.innerHTML += `<p><button onclick="visitPage('${cities.name}');">Visit</button></p>`;
        } else {
          resultDiv.innerHTML = 'Countries not found.';
        }
        document.getElementById('conditionInput').value = "";
    }).catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = 'An error occurred while fetching data.';
    });
}

function clearAll() {
    document.getElementById('conditionInput').value = "";
    document.getElementById('result').innerHTML = "";
}

function visitPage(name) {
    window.open('https://en.wikipedia.org/wiki/' + name, '_blank');
}

btnSearch.addEventListener('click', searchCondition);
btnClear.addEventListener('click', clearAll);