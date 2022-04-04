// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
//
let form=document.createElement('form');
form.setAttribute('name','form1')
let input1=document.createElement('input');
input1.setAttribute('type','text',)
input1.setAttribute('name','name')
let input2=document.createElement('input')
input2.setAttribute('type','number');
input2.setAttribute('name','age')
let btn=document.createElement('button')
btn.innerText='Click Me'
form.append(input1,input2,btn);
document.body.append(form)

let form1=document.forms.form1
form1.onsubmit=function(e){
    e.preventDefault();
    let nameInput=e.target.name.value;
    let ageInput=e.target.age.value
    let user={nameInput,ageInput}
    localStorage.setItem('nameInput',JSON.stringify(user))
}

//-створити форму з інпутами для model,type та volume автівки.
// при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
let form2=document.createElement('form');
form2.setAttribute('name','form2');

let inputModel=document.createElement('input');
inputModel.setAttribute('type','text',)
inputModel.setAttribute('name','model')
let inputType=document.createElement('input')
inputType.setAttribute('type','text');
inputType.setAttribute('name','type')
let inputVolume=document.createElement('input')
inputVolume.setAttribute('type','number');
inputVolume.setAttribute('name','volume')
let btnCar=document.createElement('button');
btnCar.innerText='Car Information'

form2.append(inputModel,inputType,inputVolume,btnCar)
document.body.append(form2)

let carsArray=[]
let formCars=document.forms.form2
formCars.onsubmit=function(e){
    e.preventDefault();
    let model=e.target.model.value
    let type=e.target.type.value
    let volume=e.target.volume.value
    let cars={model,type,volume}
    carsArray.push(cars)
    // carsArray.push(cars)
    localStorage.setItem('cars',JSON.stringify(carsArray))
}





