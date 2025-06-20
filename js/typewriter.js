const text1 = ["Da gestão fiscal", "à estratégia!"];
const text2 = "Suporte além dos números";

const el1 = document.getElementById("typewriter-h1");
const el2 = document.getElementById("typewriter-h2");

function typeLines(lines, element, delay = 100) {
  return new Promise(async (resolve) => {
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      for (let j = 0; j < line.length; j++) {
        element.innerHTML += line.charAt(j);
        await new Promise(r => setTimeout(r, delay));
      }
      if (i < lines.length - 1) {
        element.innerHTML += "<br>";
      }
    }
    resolve();
  });
}

function typeText(text, element, delay = 80) {
  let index = 0;
  function type() {
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
      setTimeout(type, delay);
    }
  }
  type();
}

async function startTyping() {
  await typeLines(text1, el1, 50);
  await typeText(text2, el2, 50);
}

startTyping();
