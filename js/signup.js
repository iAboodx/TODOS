const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');

const signup = document.getElementById('signup');

signup.addEventListener('click', (e) => {
    if (username.value === '' || email.value === '' || password.value === '') {
        e.preventDefault();
        return Swal.fire({
            title: 'Error!',
            text: 'All fields are required',
            icon: 'error',
            confirmButtonText: 'I understand'
          })
    }

    if (!username.value.includes(`#`))  return invaildtag()
    if (isNaN(email.value)) return invaildid()
    if (email.value.length < 17) return invaildid()
    if (email.value.length > 18) return invaildid()
    Swal.fire({
        title: 'Success!',
        text: 'Your submission has been received',
        icon: 'success',
        confirmButtonText: 'Done'
      })

    localStorage.setItem('xyzABCDE', '01110100 01110010 01110101 01100101');


    setTimeout(() => {
        location.href = "../index.html";
    }, 3500);
})

let userLocal = localStorage.getItem('xyzABCDE');
window.onload = function () {
    if (userLocal === "01110100 01110010 01110101 01100101") {
        Swal.fire({
            title: 'Error!',
            text: 'You are already Submitted',
            icon: 'error',
            confirmButtonText: 'I understand'
          })
          setTimeout(() => {
            window.location.href = "../index.html";
          }, 2000);
    } else {
        localStorage.setItem('xyzABCDE', '01100110 01100001 01101100 01110011 01100101');
    }
}
function invaildid(){
    Swal.fire({
        title: 'Error!',
        text: 'Invaild ID, Enter a vaild Discord ID',
        icon: 'error',
        confirmButtonText: 'I understand'
      })
}
function invaildtag(){
    Swal.fire({
        title: 'Error!',
        text: 'Invaild Tag, Enter a vaild Discord Tag',
        icon: 'error',
        confirmButtonText: 'I understand'
      })
}