function goToSecondPage() {
  const text = document.getElementById("textInput").value.trim();
  const additionalText = document.getElementById("additionalText").value.trim();
  const saveInfo = document.getElementById("saveInfo").checked;

  if (!text) {
    alert("Por favor, introduce el cuadrante de trabajo.");
    return;
  }

  // Guardar cuadrante siempre
  localStorage.setItem("inputText", text);

  // Guardar o eliminar información adicional
  if (saveInfo) {
    localStorage.setItem("additionalText", additionalText);
  } else {
    localStorage.removeItem("additionalText");
  }

  // Redirigir a la segunda página
  window.location.href = "second.html";
}

// Al cargar la página principal, recuperar el texto adicional si existe
window.addEventListener("DOMContentLoaded", () => {
  const savedInfo = localStorage.getItem("additionalText");
  if (savedInfo) {
    document.getElementById("additionalText").value = savedInfo;
    document.getElementById("saveInfo").checked = true;
  }
});
