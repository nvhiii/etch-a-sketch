const buttonContainer = document.querySelector(`.button-container`);
const button = document.querySelector(`button`);

const gridContainer = document.querySelector(`.grid-container`);
gridContainer.style.display = `flex`;
gridContainer.style.flexDirection = `column`;
gridContainer.style.alignItems = `center`;

buttonContainer.style.display = `flex`;
buttonContainer.style.justifyContent = `center`;

button.addEventListener(`click`, () => {
  const userSpecifiedDimension = +prompt(
    `Please specify the number of squares per side for the new grid.`
  );

  if (userSpecifiedDimension <= 100) {
    // clear current grid
    gridContainer.textContent = ``;

    for (let i = 0; i < userSpecifiedDimension; i++) {
      // create row div
      const gridRow = document.createElement(`div`);
      gridRow.style.display = `flex`;
      gridRow.style.width = `960px`;
      gridRow.style.justifyContent = `center`;

      for (let j = 0; j < userSpecifiedDimension; j++) {
        // columns
        let divCol = document.createElement(`div`);
        divCol.style.display = `flex`;
        divCol.style.width = `${960 / userSpecifiedDimension}px`;
        divCol.style.height = `${960 / userSpecifiedDimension}px`;
        divCol.style.border = `solid black 2px`;

        // on hover, random color is highlighted on mouse cursor
        divCol.addEventListener(`mouseover`, () => {
          const colors = [`#4285F4`, `#EA4335`, `#FBBC04`, `#34A853`];
          const choice = Math.floor(Math.random() * 4);
          const colorChoice = colors[choice];
          divCol.style.backgroundColor = `${colorChoice}`;
        });

        gridRow.appendChild(divCol);
      }

      gridContainer.appendChild(gridRow);
    }
  } else {
    alert(
      `Please enter a value that is 100 or below, since memory allocation is limited!`
    );
  }
});

// 16x16 grid, use a for loop
window.addEventListener(`DOMContentLoaded`, () => {
  for (let i = 0; i < 16; i++) {
    // create row div
    const gridRow = document.createElement(`div`);
    gridRow.style.display = `flex`;
    gridRow.style.border = `black`;
    gridRow.style.width = `960px`;
    gridRow.style.justifyContent = `center`;

    for (let j = 0; j < 16; j++) {
      // columns
      let divCol = document.createElement(`div`);
      divCol.style.display = `flex`;
      divCol.style.width = `${960 / 16}px`;
      divCol.style.height = `${960 / 16}px`;
      divCol.style.border = `solid black 2px`;

      // on hover, random color is highlighted on mouse cursor
      divCol.addEventListener(`mouseover`, () => {
        const colors = [`#4285F4`, `#EA4335`, `#FBBC04`, `#34A853`];
        const choice = Math.floor(Math.random() * 4);
        const colorChoice = colors[choice];
        divCol.style.backgroundColor = `${colorChoice}`;
      });

      gridRow.appendChild(divCol);
    }

    gridContainer.appendChild(gridRow);
  }
});
