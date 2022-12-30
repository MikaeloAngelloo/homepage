{
  const onChangeBackgroundClick = () => {
    const body = document.querySelector(".body");
    const themeName = document.querySelector(".themeName");
    body.classList.toggle("dark");
    themeName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";
  };

  const init = () => {
    const button = document.querySelector(".button");

    button.addEventListener("click", onChangeBackgroundClick);
  };

  init();
}
