# J2R2 Gestão e Tecnologia — site institucional

Site estático, em português, com quatro páginas: início, serviços, sobre e contato.

## O que editar

- Textos: `index.html`, `servicos.html`, `sobre.html` e `contato.html`.
- E-mail e WhatsApp: `js/config.js`. Deixe vazio o que não quiser publicar. O WhatsApp usa só números, com DDI e DDD, por exemplo `5592999999999`.
- O LinkedIn já está publicado. O formulário de contato só envia e-mail depois que o campo `email` for preenchido. A mensagem abre no programa de e-mail de quem visita o site; o site não guarda formulário em servidor.

## Ver no computador

Na pasta do site, no PowerShell:

```powershell
python -m http.server 5500
```

Abra `http://localhost:5500`.

## Publicar de graça no GitHub Pages

1. Crie uma conta em [github.com](https://github.com) se ainda não tiver.
2. Crie um repositório público novo, por exemplo `j2r2-site`. Não marque a pasta do seu usuário do Windows como repositório: use só esta pasta do site.
3. Nesta pasta, no PowerShell:

```powershell
git init
git add index.html servicos.html sobre.html contato.html 404.html robots.txt css js assets README.md
git commit -m "Publica o site institucional da J2R2."
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/j2r2-site.git
git push -u origin main
```

4. No GitHub, abra o repositório, entre em **Settings → Pages**, escolha a branch `main` e a pasta raiz (`/root`). Salve.
5. Alguns minutos depois o site fica em `https://SEU-USUARIO.github.io/j2r2-site/`.

## Domínio próprio

Quando quiser um endereço como `j2r2.com.br`:

1. Consulte a disponibilidade no [Registro.br](https://registro.br).
2. No GitHub Pages, informe o domínio em **Settings → Pages → Custom domain**.
3. No Registro.br, aponte o domínio para o GitHub Pages conforme a documentação atual do GitHub Pages.

Enquanto o domínio não existir, o endereço `github.io` já serve para enviar a clientes.

## O que ficou de fora de propósito

- CNPJ, telefone, CEP e logradouro. O cadastro público localiza a empresa em Manaus; o endereço completo só entra no site se você quiser torná-lo público.
- Logotipos de clientes e números de resultado. A página Sobre deixa claro que a trajetória é a carreira de quem conduz a consultoria.
- A foto de quem conduz é o retrato público do LinkedIn, em `assets/jairo-linkedin.jpg`, na página inicial e na página Sobre.
