
// const choose = document.querySelector('#book')
// choose.addEventListener('click', () => {
//     const selectedBook = choose.value
//     return selectedBook  
// })



let data = {
    lastname: null,
    firstname: null,
    book: null,
    city: null,
    publisher: null,
    year: null,
    publisher: null,
    page: null,
    ready: null,
}

const lastnameOfAuthor = document.querySelector('.lastnameOfAuthor');
lastnameOfAuthor.addEventListener('submit', (event) => {
    event.preventDefault();
    const target = event.target
    const lastnameOfAuthorInput = target.lastname
    const lastnameOfAuthorValue = lastnameOfAuthorInput.value
    console.log(lastnameOfAuthorValue)
    data.lastname = lastnameOfAuthorValue
})

const firstnameOfAuthor = document.querySelector('.firstnameOfAuthor')
firstnameOfAuthor.addEventListener('submit', (event) => {
    event.preventDefault()
    const target = event.target
    const firstnameOfAuthorInput = target.firstname
    const firstnameOfAuthorValue = firstnameOfAuthorInput.value
    console.log(firstnameOfAuthorValue)
    data.firstname = firstnameOfAuthorValue
})

const nameOfBook = document.querySelector('.nameOfBook')
nameOfBook.addEventListener('submit', (event) => {
    event.preventDefault()
    const target = event.target
    const nameOfBookInput = target.book
    const nameOfBookValue = nameOfBookInput.value
    console.log(nameOfBookValue)
    data.book = nameOfBookValue
})

const nameOfCity = document.querySelector('.nameOfCity')
nameOfCity.addEventListener('submit', (event) => {
    event.preventDefault()
    const target = event.target
    const nameOfCityInput = target.city
    const nameOfCityValue = nameOfCityInput.value
    console.log(nameOfCityValue)
    data.city = nameOfCityValue
})

const nameOfPublisher = document.querySelector('.nameOfPublisher')
nameOfPublisher.addEventListener('submit', (event) => {
    event.preventDefault()
    const target = event.target
    const nameOfPublisherInput = target.publisher
    const nameOfPublisherValue = nameOfPublisherInput.value
    console.log(nameOfPublisherValue)
    data.publisher = nameOfPublisherValue
})

const yearOfPublishing = document.querySelector('.yearOfPublishing')
yearOfPublishing.addEventListener('submit', (event) => {
    event.preventDefault()
    const target = event.target
    const yearOfPublishingInput = target.year
    const yearOfPublishingValue = yearOfPublishingInput.value
    console.log(yearOfPublishingValue)
    data.year = yearOfPublishingValue
})

const numberOfPage = document.querySelector('.numberOfPage')
numberOfPage.addEventListener('submit', (event) => {
    event.preventDefault()
    const target = event.target
    const numberOfPageInput = target.page
    const numberOfPageValue = numberOfPageInput.value
    data.page = numberOfPageValue
    data.ready = 'go'
    setTimeout(function() {
        result = document.querySelector('.result')
        result.textContent  = `${data.lastname}, ${data.firstname} ${data.book} / ${data.firstname} ${data.lastname}. – ${data.city} : ${data.publisher}, ${data.year}. – ${data.page} c. – Текст : непосредственный.`
      }, 0);
})


