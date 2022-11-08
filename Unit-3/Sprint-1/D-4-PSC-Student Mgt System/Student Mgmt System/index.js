

function student(n,c,u,i,b){
    this.name=n;
    this.course=c;
    this.unit=u;
    this.image=i;
    this.batch= `Ft-Web ${b}`;
}

document.querySelector("form").addEventListener("submit",storeData);
let data=JSON.parse(localStorage.getItem('students')) || [];


function storeData(event){
    event.preventDefault();
        // let form =document.getElementById("students_data");
    let name=form.name.value;
    let course=form.course.value;
    let unit=form.unit.value;
    let image=form.image.value;
    let batch=form.batch.value;
    
    let s1=new student(name, course, unit, image, batch);
    // let data=JSON.parse(localStorage.getItem('students')) || [];
    data.push(s1);
    localStorage.setItem('students',JSON.stringify(data));
    console.log(s1);
}
