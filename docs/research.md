# Pesquisa e decisões

Consulta em 30/10/2026 ao tópico https://github.com/topics/gridfinity-generator, que apresentava três repositórios:

| Projeto | Possibilidade observada | Relação com esta ferramenta |
|---|---|---|
| [pandaGao/gridfinity-studio](https://github.com/pandaGao/gridfinity-studio) | Gerador no navegador de risers e bandejas, preview 3D e exportação STL/3MF; documenta passo de 42 mm, envelope 42N−0,5 e unidade vertical de 7 mm. | Confirma a viabilidade de CAD local no navegador e estabelece convenções dimensionais. O fluxo de SVG e inserto fechado precisa de implementação própria. |
| [yeshan-jun/parametric-gridfinity-generator](https://github.com/yeshan-jun/parametric-gridfinity-generator) | Caixas e baseplates ajustadas a gavetas, com STL gerado diretamente no navegador. | Alternativa para caixas e bases paramétricas. O resumo do repositório não estabelece o fluxo específico solicitado para SVG e tampa com apoio. |
| [skrajewski/gridfinity-rebase](https://github.com/skrajewski/gridfinity-rebase) | CLI para substituir a base de uma caixa STL por presets ou por uma base copiada de outro STL. | Útil para adaptar modelos existentes; não é o caminho principal para desenhar uma nova caixa com inserto a partir de SVG. |

Referência adicional: [kennetek/gridfinity-rebuilt-openscad](https://github.com/kennetek/gridfinity-rebuilt-openscad), especialmente [standard.scad](https://github.com/kennetek/gridfinity-rebuilt-openscad/blob/main/src/core/standard.scad), para convenções e dimensões do sistema.

Decisão: implementação original de geometria paramétrica com [Manifold](https://github.com/elalish/manifold) e [Three.js](https://threejs.org/). Não foram copiados códigos dos geradores acima. O Manifold permite sólidos fechados e operações booleanas no navegador; um Worker mantém a interface livre durante a geração. Não há backend nem necessidade de OpenSCAD instalado.

## Referência STL fornecida pelo usuário

O arquivo `Suporte Instax (separado).stl` foi analisado somente como referência geométrica. Ele contém duas malhas fechadas separadas:

- Caixa: envelope XY de 83,5 × 125,5 mm, compatível com 2 × 3 unidades de 42 mm menos a tolerância externa.
- Inserto: envelope XY de aproximadamente 122,6 × 80,6 mm, orientado diferentemente no arquivo; altura externa de 29 mm. Seções horizontais mostram uma região inferior fechada e uma cavidade alongada nos níveis superiores.

A implementação adota o princípio da caixa externa e inserto com cavidade fechada, permitindo paredes finas e profundidade ajustável. Não replica integralmente o STL nem inclui sua malha no projeto. O SVG de exemplo Instax é uma ilustração própria e não uma extração exata da cavidade do arquivo.

## Validação e limites

Testes verificam medidas, meio grid, plano de apoio, folgas, cavidades fechadas, ausência de colisão na montagem, orientação invertida, volume do STL e incidência de duas faces por aresta. Uma inspeção independente com trimesh também foi usada durante o desenvolvimento. A construção atual divide a tampa em uma parte superior com paredes e uma placa plana de fechamento para remover os fundos suspensos da orientação invertida anterior. Testes adicionais verificam três componentes únicos, folgas, contato com apoios e ausência de películas fechando as extremidades das paredes, fundo plano sem borda elevada e ausência de tetos fora do pequeno raio interno. Compatibilidade física e facilidade de impressão devem ser confirmadas numa amostra.


A implementação atual prioriza o piso da própria caixa como fundo das cavidades, removendo a terceira peça quando possível. A profundidade útil é preservada por ajuste explícito do rebaixo efetivo; o piso não é engrossado. A caixa tem somente borda lateral de apoio, recortada onde necessário, e nunca recebe pilares ou encaixes para o fundo. O teste oval de 57,4 × 36,2 mm e 42 mm úteis foi validado em 1,5 × 1,5 grids, com duas peças.
