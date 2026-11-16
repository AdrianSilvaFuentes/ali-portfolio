---
name: ali-ui-a-risca
description: Segue o design system ali-ui à risca em qualquer mudança visual ou de interface do ali-portfolio. Use sempre que for criar, mudar ou revisar componentes, páginas, botões, campos, abas, seletores, tipografia, cores, espaçamentos, animações ou estados, e antes de dar como pronta qualquer tarefa que toque a interface.
---

# ali-ui à risca

O ali-portfolio é a vitrine do ali-ui. Se o site improvisa o que o design system já resolve, o design system perde o sentido. Esta skill vale para toda tarefa que mexe na interface.

## Onde está a verdade

1. **Componentes publicados:** `node_modules/@adriansilvafuentes/ui/dist/index.d.ts` (o que existe) e o `.d.ts` de cada componente (props, tamanhos, variantes).
2. **Como usar cada componente:** as histórias do Storybook em `../ali-ui/packages/ui/src/<componente>/*.stories.tsx` e o Storybook publicado em https://ali-ui-delta.vercel.app. A história é o padrão de uso. Exemplo: o botão só com ícone é `size="sm"`, `className="w-8 px-0"` e o ícone em `iconLeft`.
3. **Tokens:** `node_modules/@adriansilvafuentes/tokens/dist/tailwind.css`. Só tokens semânticos.

Se a dúvida não se resolve nesses três lugares, pergunte ao Adrián. Não invente.

## Regras

1. **Antes de construir qualquer controle, procure no ali-ui.** Se existe um componente para aquilo (botão, campo, abas, seletor segmentado, tag, badge, select, switch, tooltip...), use o componente. Nunca refaça à mão o que o ali-ui já tem.
2. **Use o componente como ele foi documentado.** Props, `size`, `variant` e composição iguais aos das histórias. Na dúvida entre dois tamanhos ou variantes, pergunte.
3. **`className` em componente do ali-ui só para posição no layout:** largura no grid (`w-full`), alinhamento (`self-start`), margem externa, ordem e exibição responsiva. **Nunca** para mudar altura, padding, cor, borda, raio, sombra, tipografia, transição ou animação. A exceção é quando a própria história do ali-ui faz isso (como o `w-8 px-0` do botão só com ícone).
4. **Não quebre o comportamento.** Animações, transições, foco, estados (hover, pressionado, desabilitado) e "reduzir movimento" fazem parte do componente. Se a forma de ligar o componente ao site impede a animação (por exemplo, trocar de página antes do deslize do SegmentedControl terminar), ajuste a ligação, nunca o componente. Teste no navegador que a animação acontece.
5. **O ali-ui manda nos tamanhos.** Se uma regra do projeto (como alvos de 44 px) conflita com o tamanho do componente, vale o ali-ui. Avise o Adrián do conflito.
6. **Só tokens semânticos.** Cores, tipografia (`text-display`, `text-title-*`, `text-label-*`, `text-body-*`), espaçamentos, raios, sombras e durações vêm dos tokens. Nada de valor arbitrário (`p-[13px]`, `#hex`). Variáveis do ali-ui (`bg-[var(--ali-color-...)]`) só quando não há classe pronta.
7. **Se falta algo no ali-ui, pare.** Não crie um substituto no site sem aprovação. Explique o que falta, proponha como seria no ali-ui (componente novo, variante, tamanho ou token) e pergunte. Uma mudança de componente nasce no ali-ui, vira versão nova no npm e só depois chega aqui.
8. **Toda peça feita à mão precisa estar na lista de lacunas abaixo**, com o motivo, até o ali-ui ganhar a peça.

## Antes de dar a tarefa como pronta

Rode esta checagem e mostre o resultado ao Adrián:

```bash
# className em componentes do ali-ui (cada um precisa ser só de layout)
grep -rnE "<(Avatar|Badge|Button|Checkbox|Chip|Combobox|FileUpload|Flag|Input|MultiSelect|NumberInput|RadioGroup|SegmentedControl|SegmentedControlItem|Select|SelectItem|Slider|Switch|Tabs|TabsList|TabsTrigger|TabsContent|Tag|Textarea|Toggletip|Tooltip)\b[^>]*className=" src

# controles feitos à mão que podem estar duplicando o ali-ui
grep -rnE "<button|<input|<select|<textarea|<summary|role=\"(tab|radio|switch|button)\"" src
```

Para cada achado: é só layout? Está na lista de lacunas? Se não, corrija ou pergunte.

Depois:
- Compare o resultado com a história do componente no Storybook (tamanho, cor, estados, animação).
- Confira no navegador, nos temas claro e escuro, que as animações e os estados funcionam.

## Lacunas conhecidas (peças feitas à mão porque o ali-ui ainda não tem)

Mantenha esta lista em dia. Quando o ali-ui ganhar a peça, troque e tire daqui.

| Peça no site | Onde | Por quê | Proposta para o ali-ui |
|---|---|---|---|
| Link de texto (menu, rodapé, "Ver todos os casos", "Ler o caso") | `nav-link.tsx`, `site-footer.tsx`, `home/section.tsx` (`textLinkClass`), `case-card.tsx` | O ali-ui não tem componente de link | Componente `Link` com variantes (navegação, inline, com seta) |
| "Ver todas" das certificações (abre e fecha) | `resume/certifications.tsx` (`details`/`summary`) | O ali-ui não tem accordion ou disclosure | Componente `Disclosure` ou `Accordion` |
| Área reservada de imagem | `placeholder.tsx` | Peça de conteúdo provisório, não de interface | Nenhuma por enquanto |

## Desvios a corrigir (estão quebrando a regra 3)

- `work/work-filter.tsx`: `TabsTrigger` com `className="h-11 px-4"` muda a altura e o padding das abas. Usar as Tabs como o ali-ui define.
