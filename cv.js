let inp = document.querySelectorAll("#inps");
let rdio = document.querySelectorAll("#redio");
let btn = document.querySelector("button");
let texte = document.querySelectorAll(".text");
console.log(texte, "aaaaaaaa");

inp.forEach(function (e) {
  e.addEventListener("click", function () {
    let values = e.value;
    console.log(values, "vv");

    rdio.forEach(function (x) {
      x.addEventListener("click", function () {
        console.log("clicker");
        let Redio = x.value;
        btn.addEventListener("click", function () {
          console.log("btns");
          obj.textContent = Redio;
        });
      });
    });
  });
});

btn.addEventListener("click", () => {
  name1.innerHTML = nameinp.value;
  email.innerHTML = emails.value;
  skill.innerHTML = skills.value;
  city.innerHTML = cites.value;
  religion.innerHTML = reli.value;
  age.innerHTML = ages.value;
  cnic.innerHTML = num.value;
});

