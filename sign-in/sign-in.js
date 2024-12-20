let toggleBtn=document.querySelector('#Signin');
let signUpForm=document.querySelector('#Sign-upForm');
let signInForm=document.querySelector('#sign-inForm');

toggleBtn.addEventListener('click',()=>{
    signUpForm.style.display='none';
    signInForm.style.display='block';
})

function showSignUp(){
    signUpForm.style.display='block';
    signInForm.style.display='none';
}