(function () {
  var config = window.J2R2_CONFIG || {};
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");

  function setNav(open) {
    if (!nav || !toggle) return;
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    document.body.classList.toggle("nav-open", open);
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      setNav(!nav.classList.contains("is-open"));
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setNav(false);
      });
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") setNav(false);
    });
  }

  function digits(value) {
    return String(value || "").replace(/\D/g, "");
  }

  document.querySelectorAll("[data-channel='email']").forEach(function (node) {
    if (!config.email) return;
    var slot = node.querySelector("p");
    var link = document.createElement("a");
    link.href = "mailto:" + config.email;
    link.textContent = config.email;
    slot.textContent = "";
    slot.appendChild(link);
    node.hidden = false;
  });

  document.querySelectorAll("[data-channel='whatsapp']").forEach(function (node) {
    var phone = digits(config.whatsapp);
    if (!phone) return;
    var slot = node.querySelector("p");
    var link = document.createElement("a");
    link.href = "https://wa.me/" + phone + "?text=" + encodeURIComponent("Olá, vim pelo site da J2R2 e quero conversar.");
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "Chamar no WhatsApp";
    slot.textContent = "";
    slot.appendChild(link);
    node.hidden = false;
  });

  var form = document.querySelector(".contact-form");
  if (!form) return;

  var status = form.querySelector(".form-status");
  var emailNote = form.querySelector(".email-note");

  if (!config.email && emailNote) {
    emailNote.hidden = false;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var honeypot = form.querySelector("[name='website']");
    if (honeypot && honeypot.value) return;

    if (!form.reportValidity()) return;

    if (!config.email) {
      status.textContent = "O e-mail ainda não está publicado. Fale com a J2R2 pelo LinkedIn.";
      return;
    }

    var data = new FormData(form);
    var subject = "Contato pelo site — " + (data.get("assunto") || "Conversa");
    var body = [
      "Nome: " + data.get("nome"),
      "Empresa: " + data.get("empresa"),
      "E-mail: " + data.get("email"),
      "Assunto: " + data.get("assunto"),
      "",
      String(data.get("mensagem") || "").trim()
    ].join("\n");

    window.location.href = "mailto:" + config.email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    status.textContent = "Seu programa de e-mail deve abrir com a mensagem pronta. Se não abrir, escreva direto para " + config.email + ".";
  });
})();
