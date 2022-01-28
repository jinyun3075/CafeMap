var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
var options = { //지도를 생성할 때 필요한 기본 옵션
    center: new kakao.maps.LatLng(33.378401620440926, 126.53207626939546), //지도의 중심좌표.
    level: 9 //지도의 레벨(확대, 축소 정도)
};
var map = new kakao.maps.Map(container, options);
kakao.maps.event.addListener(map, 'click', function(mouseEvent) {         
    // 클릭한 위도, 경도 정보를 가져옵니다 
    var latlng = mouseEvent.latLng;
    
    var message = '위도: ' + latlng.getLat() + ', 경도: ' + latlng.getLng();
    console.log(message);
    
});
const show = document.querySelector('.cafe-show');
const createCafe = document.querySelector('#last-create');
createCafe.onclick = async() => {
    const name = document.querySelector('#cafe-name');
    const content = document.querySelector('#cafe-content');
    const lat = document.querySelector('#cafe-lat');
    const lon = document.querySelector('#cafe-lon');
    const fim = [];
    if(image.length > 0){
    for (const iterator of await imgApi(image)) {
        fim.push(iterator["destination"].split('/')[1]+","+iterator["filename"]);
    }
    } else {
    fim.push("default,default.png");
    }
    const res = await fetch('http://localhost:8080/cafe',{
    method: "post",
    headers: {
        "Content-Type":"application/json"
    },
    body: JSON.stringify({
        "cafe":{
            "name" : name.value,
            "content" : content.value,
            "location" : [lat.value,lon.value],
            "img" : fim
        }
    })
    })
}
const createMarker = async () => {
    await fetch('http://localhost:8080/cafe',{})
    .then((data) => {
    return data.json();
    }).then((data) => {
    for (const marker of data) {  
        const mar = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(marker.location[0], marker.location[1])
        });
        let img ="";
        let slide = "";
        for (const i in marker.img) {
        if(i==0) {
            img += `<div class="carousel-item active">
                <img src="http://localhost:8080/img/${marker.img[i]}" class="d-block w-100" alt="...">
                </div>`;
            slide += `
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${i}" class="active" aria-current="true" aria-label="Slide ${i+1}"></button>
            `;
        } else{  
            img+=` <div class="carousel-item">
                <img src="http://localhost:8080/img/${marker.img[i]}" class="d-block w-100" alt="...">
                </div>`;
            slide += `
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${i}" class="active" aria-current="true" aria-label="Slide ${i+1}"></button>
            `
        }
        }
        kakao.maps.event.addListener(mar, 'click', function() {
        show.innerHTML = `
        <aside>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                `+slide+
                `
            </div>
            <div class="carousel-inner" style="height: 15rem;">
                `+img+`
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
        </aside>
        <p class="fs-1">${marker.name}</p>
        <p class="fs-3">${marker.content}</p>
        `;
        });    
    }
    })
}
const close = document.querySelectorAll('.close');
for (const cl of close) {
    cl.onclick = ()=>{
    overlay.setMap(null);
    }
}
createMarker();


const search = document.querySelector('#search-inp');
const list = document.querySelector('#list-group');
search.onclick = () => {
    list.classList.toggle("on");
}
// search.onblur = () => {
//   list.classList.toggle("on");
// }
// search.onfocus = () => {
//   list.classList.add("on");
// }
search.onkeyup = async (e) => {
    const res = await fetch("http://localhost:8080/cafe/search/"+e.target.value,{});
    const json = await res.json();
    list.innerHTML="";
    for (const data of json) {
    list.innerHTML += `<li class="list-group-item dropdown-item">${data.name}</li>`;
    }
    const li = list.querySelectorAll('li');

    for (const i in li) {
    li[i].onclick = () => {
        let img ="";
        let slide = "";
        for (const i2 in json[i].img) {
        if(i2==0) {
            img += `<div class="carousel-item active">
                <img src="http://localhost:8080/img/${json[i].img[i2]}" class="d-block w-100" alt="...">
                </div>`;
            slide += `
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${i2}" class="active" aria-current="true" aria-label="Slide ${i2+1}"></button>
            `;
        } else{  
            img+=` <div class="carousel-item">
                <img src="http://localhost:8080/img/${json[i].img[i2]}" class="d-block w-100" alt="...">
                </div>`;
            slide += `
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${i2}" class="active" aria-current="true" aria-label="Slide ${i2+1}"></button>
            `
        }
        }
        show.innerHTML = `
        <aside>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                `+slide+
                `
            </div>
            <div class="carousel-inner" style="height: 15rem;">
                `+img+`
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
        </aside>
        <p class="fs-1">${json[i].name}</p>
        <p class="fs-3">${json[i].content}</p>
        `;
        list.classList.toggle("on");
    }
    }
}
async function imgApi(img){
    const formdata = new FormData();
    for (const i of img) {
        formdata.append("images",i);
    }
    const res = await fetch("http://localhost:8080/img/uploads",{
        method :"post",
        body : formdata
    })
    const json = await res.json();
    return json;
}
const image =[];
const file = document.querySelector('#img-b');
    file.addEventListener('change',function(e){
    const f1=e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(f1);
    reader.onload = ()=>{
    const img = document.querySelector('.img-box');
    img.style = `background : url(${reader.result}) no-repeat center center;`;
    }
    image.push(f1);
})