# Clínica Vida Plena: site para negócio local

Site institucional para clínicas e consultórios, feito com **Next.js 15 (App Router), TypeScript e Tailwind CSS 4**.

## Problema que resolve
Negócios locais perdem pacientes por não aparecerem no Google e por dificultar o contato. Este site é
rápido, funciona bem no celular, aparece nas buscas locais e leva o visitante ao WhatsApp em um toque.

> **Projeto de demonstração.** A clínica, a equipe, os depoimentos, o telefone e o endereço são fictícios.
> Para um cliente real, troque tudo em `src/lib/site.ts`, usando só depoimentos reais e autorizados.

## Recursos
- Layout mobile-first, com menu próprio no celular
- Acessibilidade: link "Pular para o conteúdo", menu com `aria-expanded` e tecla Esc, foco visível,
  `lang="pt-BR"` e botões com contraste AA (texto branco sobre verde em 5,5:1)
- SEO: metadata, Open Graph, dados estruturados `MedicalClinic`, `sitemap.xml` e `robots.txt`
- Botão flutuante e formulário que abrem o WhatsApp com a mensagem pronta
- Google Maps incorporado, horários e endereço
- **Conteúdo centralizado em `src/lib/site.ts`**: reaproveitável para qualquer cliente, inclusive os
  horários que vão para os dados estruturados do Google

## Como rodar
```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de produção
```

## Deploy
Suba o repositório no GitHub e importe na [Vercel](https://vercel.com). Defina `NEXT_PUBLIC_SITE_URL`
com o domínio final.

## Estrutura
```
src/
  app/          layout, página, sitemap, robots
  components/   seções reutilizáveis
  lib/site.ts   todo o conteúdo e configuração
```

## Decisões técnicas
- **Server Components por padrão.** Só o `ContactForm` e o `MobileMenu` são Client Components, porque
  são os únicos com estado e eventos. O resto vai pronto do servidor, com menos JavaScript no navegador.
- **Sem backend.** O formulário monta a mensagem e abre o WhatsApp, o canal que a clínica já usa.

## Limitações conhecidas
- Sem testes automatizados.
- O formulário depende do WhatsApp: não há registro dos contatos nem proteção contra spam.

## Próximos passos
- Fotos reais com `next/image`
- Páginas por especialidade (`/servicos/[slug]`) com metadata própria
- Teste e2e com Playwright: clicar em "Agendar" abre o WhatsApp
- Página de blog em MDX para SEO
- Agendamento online com API própria (Node + Postgres)
