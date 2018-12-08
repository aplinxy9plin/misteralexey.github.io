var object =[
     [{"id":516,"photo":"https://unsplash.it/500/300?image=458","first_name":"Geneva","last_name":"Pinebrook","age":42,"gender":"Male","live":{"country":"AndorrA","city":"Ouagadougou"}},{"id":517,"photo":"https://unsplash.it/500/300?image=791","first_name":"Bibbye","last_name":"Engud","age":18,"gender":"Female","live":{"country":"Cambodia","city":"Likasi"}},{"id":518,"photo":"https://unsplash.it/500/300?image=835","first_name":"Brit","last_name":"Quennie","age":22,"gender":"Male","live":{"country":"AndorrA","city":"Molah"}},{"id":519,"photo":"https://unsplash.it/500/300?image=325","first_name":"Bettye","last_name":"Roz","age":42,"gender":"Male","live":{"country":"Senegal","city":"Edgecliff"}},{"id":520,"photo":"https://unsplash.it/500/300?image=288","first_name":"Davine","last_name":"Ginny","age":34,"gender":"Female","live":{"country":"Switzerland","city":"LomÃ©"}}],
     [{"id":21,"photo":"https://unsplash.it/500/300?image=627","first_name":"Marga","last_name":"Kirschner","age":16,"gender":"Female","live":{"country":"Tokelau","city":"Majuro"}},{"id":22,"photo":"https://unsplash.it/500/300?image=164","first_name":"Silvie","last_name":"Harbird","age":44,"gender":"Male","live":{"country":"Seychelles","city":"Bangui"}},{"id":23,"photo":"https://unsplash.it/500/300?image=669","first_name":"Catherina","last_name":"Troth","age":20,"gender":"Female","live":{"country":"Jersey","city":"Tarija"}},{"id":24,"photo":"https://unsplash.it/500/300?image=658","first_name":"Reina","last_name":"Furlani","age":25,"gender":"Male","live":{"country":"Tonga","city":"Atafu Village"}},{"id":25,"photo":"https://unsplash.it/500/300?image=641","first_name":"Caitlin","last_name":"Bunting","age":35,"gender":"Female","live":{"country":"Israel","city":"Brackenfell"}}],
     [{"id":321,"photo":"https://unsplash.it/500/300?image=98","first_name":"Arluene","last_name":"Gibby","age":34,"gender":"Male","live":{"country":"Bahrain","city":"Addis Ababa"}},{"id":322,"photo":"https://unsplash.it/500/300?image=148","first_name":"Felicia","last_name":"Constantia","age":41,"gender":"Female","live":{"country":"Portugal","city":"Abidjan"}},{"id":323,"photo":"https://unsplash.it/500/300?image=304","first_name":"Kaitlynn","last_name":"Annamaria","age":39,"gender":"Female","live":{"country":"Slovenia","city":"Thonex"}},{"id":324,"photo":"https://unsplash.it/500/300?image=163","first_name":"Deborah","last_name":"Servetnick","age":42,"gender":"Female","live":{"country":"Pitcairn","city":"Pristina"}},{"id":325,"photo":"https://unsplash.it/500/300?image=965","first_name":"Helsa","last_name":"Bor","age":16,"gender":"Male","live":{"country":"Ireland","city":"Juba"}}],
     [{"id":521,"photo":"https://unsplash.it/500/300?image=832","first_name":"Timmie","last_name":"Wilona","age":28,"gender":"Female","live":{"country":"Malaysia","city":"Hamilton"}},{"id":522,"photo":"https://unsplash.it/500/300?image=777","first_name":"Merrill","last_name":"Herold","age":26,"gender":"Male","live":{"country":"Palestinian Territory, Occupied","city":"Uliastay"}},{"id":523,"photo":"https://unsplash.it/500/300?image=243","first_name":"Kris","last_name":"Chaffin","age":34,"gender":"Male","live":{"country":"China","city":"Thalang"}},{"id":524,"photo":"https://unsplash.it/500/300?image=274","first_name":"Esma","last_name":"Orvas","age":16,"gender":"Male","live":{"country":"Netherlands","city":"Kralendijk"}},{"id":525,"photo":"https://unsplash.it/500/300?image=910","first_name":"Celestia","last_name":"Anatole","age":24,"gender":"Male","live":{"country":"Macao","city":"Mastaiciai"}}]
]

function start(){
    var o = 0;
    for (var i = 0; i < 5; i++) {
        var tr = document.createElement('tr')
        var id = document.createElement('td')
        var photo = document.createElement('img')
        var first_name = document.createElement('td')
        var last_name = document.createElement('td')
        var age = document.createElement('td')
        var gender = document.createElement('td')
        var country = document.createElement('td')
        var city = document.createElement('td')
        id.innerHTML = object[o][i].id
        photo.src = object[o][i].photo
        photo.style.width = '150px'
        photo.style.height = '100px'
        gender.innerHTML = object[o][i].gender
        last_name.innerHTML = object[o][i].last_name
        first_name.innerHTML = object[o][i].first_name
        age.innerHTML = object[o][i].age
        country.innerHTML = object[o][i].live.country
        city.innerHTML = object[o][i].live.city
        id.className = "id"
        photo.className = "photo"
        gender.className = "gender"
        last_name.className = "last_name"
        first_name.className = "first_name"
        age.className = "age"
        country.className = "country"
        city.className = "city"
        tr.appendChild(id)
        tr.appendChild(photo)
        tr.appendChild(first_name)
        tr.appendChild(last_name)
        tr.appendChild(age)
        tr.appendChild(gender)
        tr.appendChild(country)
        tr.appendChild(city)        
        document.getElementById('board_0').appendChild(tr)
    }
    updateTable(0) 
}
function updateTable(id){
    for (var i = 0; i < 5; i++) {
        document.getElementsByClassName('id')[i].innerHTML = object[id][i].id
        document.getElementsByClassName('photo')[i].src = object[id][i].photo
        document.getElementsByClassName('first_name')[i].innerHTML = object[id][i].first_name
        document.getElementsByClassName('last_name')[i].innerHTML = object[id][i].last_name
        document.getElementsByClassName('age')[i].innerHTML = object[id][i].age
        document.getElementsByClassName('gender')[i].innerHTML = object[id][i].gender
        document.getElementsByClassName('city')[i].innerHTML = object[id][i].live.city
        document.getElementsByClassName('country')[i].innerHTML = object[id][i].live.country
    }
}