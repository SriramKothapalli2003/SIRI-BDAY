const PASSCODE = "2026";

const text = `Siri Paapa,
You are my happiness,
my strength,
and my forever blessing ❤️`;

let i = 0;

function unlock() {
  const input = document.getElementById("code").value;
  const error = document.getElementById("error");
  const music = document.getElementById("bgMusic");

  if (input === PASSCODE) {
    document.getElementById("lock").style.display = "none";
    document.getElementById("content").classList.remove("hidden");

    // 🎵 Background music
    music.volume = 0.7;
    music.play().catch(() => {
      console.log("Autoplay blocked");
    });

    typeText();
  } else {
    error.textContent = "❌ Wrong passcode!";
  }
}

function typeText() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeText, 40);
  }
}
