const blockCSSList = "height: 50px; width: 50px",
  wrapperCSSList =
    "display: flex; flex-wrap: wrap; width: 250px; height: 250px; border: 1px solid black; margin-top: 10px;",
  wrapperBlockLimit = 25;

function getRandomColor() {
  const red = Math.trunc(Math.random() * 255);
  const green = Math.trunc(Math.random() * 255);
  const blue = Math.trunc(Math.random() * 255);

  return `rgb(${red}, ${green}, ${blue})`;
}

function generateBlocks() {
  const wrapper = document.createElement("div");
  wrapper.style.cssText = wrapperCSSList;
  wrapper.setAttribute("id", "wrapper");
  document.body.append(wrapper);

  for (let i = 0; i < wrapperBlockLimit; i++) {
    const block = document.createElement("div");
    block.style.cssText = blockCSSList;
    block.style.backgroundColor = getRandomColor();
    wrapper.append(block);
  }

  document.querySelector("#generateBlocks").disabled = true;
}

function resetPage() {
  document.location.reload();
}
