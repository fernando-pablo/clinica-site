# Clínica Vida Plena: site para negócio local

Site institucional para clínicas e consultórios, feito com **Next.js 15 (App Router), TypeScript e Tailwind CSS 4**.

## Problema que resolve
Negócios locais perdem pacientes por não aparecerem no Google e por dificultar o contato. Este site é
rápido, funciona bem no celular, aparece nas buscas locais e leva o visitante ao WhatsApp em um toque.

## Recursos
- Layout mobile-first e acessível
- SEO: metadata, Open Graph, dados estruturados `MedicalClinic`, `sitemap.xml` e `robots.txt`
- Botão flutuante e formulário que abrem o WhatsApp com a mensagem pronta
- Google Maps incorporado, horários e endereço
- **Conteúdo centralizado em `src/lib/site.ts`**: reaproveitável para qualquer cliente

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

## Próximos passos
- Fotos reais com `next/image`
- Página de blog em MDX para SEO
- Agendamento online com API própria (Node + Postgres)
