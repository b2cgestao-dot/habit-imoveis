# AI-RULES.md

## 1. Design System (Tailwind CSS)
- **Primary**: Verde Habit (`bg-emerald-500` / `bg-green-600` para destaque e CTAs).
- **Secondary**: Branco e Cinza Claro (`bg-white` / `bg-gray-50`) para fundos.
- **Contrast**: Preto/Slate Escuro (`bg-slate-900`) para textos principais, cabeçalho fixo e rodapé.
- **Tipografia**: Fonte Sans-serif premium (ex: Inter), títulos pesados (`font-black`), textos leves e elegantes (`font-light`).
- **Icons**: Use `lucide-react`.

## 2. Arquitetura de Componentes
A página principal deve empilhar os componentes nesta ordem estrita:

1. `Cabecalho.tsx` (Logo e WhatsApp: +55 75 98324-8332).
2. `SecaoHero.tsx` (A promessa forte).
3. `SecaoDiferenciais.tsx` (A autoridade).
4. `ImoveisDestaque.tsx` (Vitrine curada).
5. `SecaoProvaSocial.tsx` (Prova visual e testemunhos).
6. `FormularioContatoAgressivo.tsx` (O filtro VIP/CTA principal).
7. `Rodape.tsx` (Infos legais e CRECI: Nº 3184).

## 3. Regras Estritas de Código
- **Tailwind**: Uso exclusivo para estilo. Design Mobile-first sempre.
- **Assets**: Imagens na pasta `/public/`.
- **GSAP**: Apenas após aprovação visual estática.
- **Navegação**: Não crie navegação de portal de busca complexa.
- **Obrigações Legais**: O CRECI nº 3184 (conforme bio) deve estar visivelmente presente no Rodapé.
