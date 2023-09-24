let result = {
  tag: "",
  free: false,
  role: false,
  user: "akshaykumar",
  email: "akshaykumar@codewithharry.com",
  score: 0.64,
  state: "undeliverable",
  domain: "codewithharry.com",
  reason: "invalid_mailbox",
  mx_found: true,
  catch_all: null,
  disposable: false,
  smtp_check: false,
  did_you_mean: "",
  format_valid: true,
};

submitBtn.addEventListener("click",async (e) => {
  console.log("clicked")
  resultCont.innerHTML =` <img width="150px"  src="Blocks-1s-200px.svg" alt="loading"> `
   e.preventDefault()
  let key = "ema_live_WL4DTkVf3tch79AnnGF1FrU1BaAqPntuCrKjLY95"
  let email = document.getElementById("username").value
  let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
  let res = await fetch(url)
  let result = await res.json()
  
  let str = ``
  for (key of Object.keys(result)) {
    if (result[key] !== "" && result !== " ") {
    str = str + `<div>${key} : ${result[key]}<div>`
  } } 

  console.log(str)
  resultCont.innerHTML = str
});
