// Função para rolar até uma seção
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
}

// Formulário de Contato - Alerta Simulado
const form = document.getElementById("contactForm");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    form.reset();
});