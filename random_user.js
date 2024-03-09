const btnRandom = document.getElementById("btn-random");

btnRandom.addEventListener("click", () => {
  getUser();
});

const getUser = async (user) => {
  try {
    const res = await fetch(`https://randomuser.me/api/`);
    // console.log(res);

    if (!res.ok) {
      throw new Error(`${res.status}`);
    }

    const data = await res.json();
    // console.log(data);

    data.results.forEach((item) => createElem(item));
  } catch (error) {
    // console.log(error);
    const sectionRandom = document.getElementById("random-user-section");
    btnRandom.style = "display: none;";
    sectionRandom.innerHTML = `
        <div class="card mx-auto mt-5" style="width: 18rem;">
            <img src="./img/404.png"/>
        </div>                
        `;
  }
};

getUser();

const createElem = (user) => {
  const sectionRandom = document.getElementById("random-user-section");

  const { name, email, phone, picture } = user;

  sectionRandom.innerHTML = `
    <div class="container mt-5">
        <div class="card mx-auto border-2 border-black shadow" style="width: 18rem;">
            <img src="${picture.large}" class="card-img-top" alt="...">
            <div class="card-body text-center">
                <h5 class="card-title">${name.title} ${name.first} ${name.last}</h5>
                <p class="card-text">${email}</p>
                <p class="card-text">${phone}</p>
                
            </div>
        </div>
    </div>
    `;
};
