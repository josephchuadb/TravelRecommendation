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
          resultDiv.innerHTML += `<h2 class="travelBloom__sectionName">${cities.name}</h2>`;
          resultDiv.innerHTML += `<img class="travelBloom__sectionImage" src="${cities.imageUrl}" alt="">`;
          resultDiv.innerHTML += `<p class="travelBloom__sectionDescription"><strong>Description:</strong> ${cities.description}</p>`;
          resultDiv.innerHTML += `<p class="travelBloom__sectionDescription"><button class="travelBloom__button" onclick="visitPage('${cities.name}');">Visit</button></p>`;
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

function bookNow() {
    alert("Under construction");
}

function testNow() {
    alert('Thank you for contacting us!')
}

btnSearch.addEventListener('click', searchCondition);
btnClear.addEventListener('click', clearAll);
btnBook.addEventListener('click', bookNow);