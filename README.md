# Forma — Gridfinity Cut Studio

Gerador local de caixas Gridfinity e tampas com cavidades a partir de SVGs. Usa o piso da caixa para fechar as cavidades sempre que possível. Todo o processamento ocorre no navegador; nenhum arquivo é enviado a servidores.

```sh
npm ci
npm run dev
```

Abra o endereço indicado pelo Vite (normalmente http://127.0.0.1:5173/). `npm test` verifica geometria e exportação; `npm run build` gera `dist/`, que pode ser servido por qualquer hospedagem estática com suporte a WebAssembly.

## Fluxo

1. Envie um SVG com um contorno preenchido para cada cavidade. Há um exemplo de múltiplas ferramentas e `public/exemplo-instax.svg`, um contorno simples inspirado no tipo de suporte fornecido como referência.
2. Defina a largura real, em milímetros, do conjunto de contornos. A escala é uniforme e preserva a proporção. Margens do viewBox não entram na medida; unidades do SVG não substituem essa calibração explícita.
3. Defina a profundidade útil e as dimensões da caixa. O modo automático usa o piso da caixa, preserva essa profundidade e calcula a altura do corpo, mantendo fixo o encaixe vertical da tampa. A espessura do piso é preservada.
4. Inspecione as vistas explodida, montada, caixa, tampa, tampa + paredes, fundo, encaixe e impressão. O corte lateral revela os encaixes e os apoios internos.
5. Aprove o preview. No modo automático, são liberados dois STLs: caixa e tampa com paredes. No modo de fundo separado, há um terceiro STL. Qualquer alteração invalida a aprovação.
6. Salve um projeto JSON para reabrir parâmetros e SVG depois.

O SVG define as aberturas das cavidades. A tampa tem a face superior e as paredes que descem para dentro da caixa. A caixa é vazia e plana por dentro, com somente a borda lateral para apoiar a tampa: sem pilares, pinos, encaixes ou apoios para um fundo separado. A borda é interrompida onde as paredes da cavidade passam, mantendo os trechos com área suficiente de apoio.

Por padrão, as paredes terminam no piso da própria caixa. O gerador calcula a altura do corpo pela profundidade útil e mantém o encaixe da tampa na espessura da placa mais uma folga vertical positiva. A borda de empilhamento fica acima desse encaixe. O fundo separado e seus encaixes são eliminados no modo automático.

O modo opcional de fundo separado mantém o fechamento raso e o encaixe em degrau somente entre tampa e fundo. Mesmo nesse modo, a caixa não recebe apoios para o fundo.

## Editor paramétrico de contornos

Em **Origem do contorno → Desenhar forma**, defina largura e comprimento nominais em milímetros. Não é necessário preparar um SVG.

- Todos os cantos iguais, pares esquerda/direita, pares superior/inferior ou quatro cantos independentes.
- Raios X/Y iguais para cantos circulares; desmarque a opção para raios elípticos independentes.
- A prévia 2D identifica os cantos A (superior esquerdo), B (superior direito), C (inferior direito) e D (inferior esquerdo), na orientação do SVG visto de cima.
- Presets: retângulo arredondado, cápsula, elipse, círculo e cantos vivos. O preset círculo iguala o comprimento à largura. Alterar largura ou comprimento depois não ajusta os raios automaticamente.
- A soma dos raios X vizinhos deve caber na largura; a soma dos raios Y vizinhos deve caber no comprimento. Um canto vivo usa ambos os raios em zero. Medidas incompatíveis bloqueiam o preview e a exportação, sem normalização silenciosa.
- A largura do SVG é sincronizada com a largura nominal da forma; a folga do objeto é aplicada depois, por lado.
- O contorno usa segmentos adaptativos com desvio de corda nominal de até 0,01 mm nos arcos. SVG e preview 3D usam os mesmos pontos.
- **Baixar contorno SVG** exporta o desenho. Projetos v5 guardam também os parâmetros do editor, permitindo reabrir e continuar ajustando os raios. SVGs importados continuam sendo contornos livres; os controles de raios pertencem ao modo paramétrico.

## Medidas e orientação

- Grid XY: 42 mm. Dimensões externas da caixa: `42 × grids − 0,5 mm`.
- Meio grid ativo: passos de 0,5 unidade e pés repetidos em 21 mm. Desativado: pés de 42 mm e dimensões inteiras.
- Altura livre do corpo, incluindo o perfil inferior de 4,75 mm. A borda de empilhamento acrescenta 3,8 mm à altura do corpo.
- Pés com chanfro inferior de 0,8 mm, trecho reto até 2,6 mm e chanfro superior até 4,75 mm.
- Espessura do fundo da caixa medida acima do perfil inferior.
- Piso da caixa em Z = `4,75 + espessura do piso`.
- Modo automático: face superior da tampa em Z = `piso Z + profundidade útil`; corpo Z = `face superior da tampa + folga vertical`. O apoio lateral fica uma espessura de tampa abaixo da face superior.
- Modo separado: apoio Z = `altura livre do corpo − folga vertical − espessura da tampa`.
- O apoio cresce diretamente da parede em chanfro de 45° ou mais íngreme.
- Folga por lado: distância entre tampa e parede interna. Não é a diferença total das larguras.
- A interface recebe a **profundidade útil**, da face superior da tampa ao piso central. Projetos antigos guardam o campo interno `cavityDepth`: a conversão continua sendo `profundidade útil = cavityDepth + tampa − fundo separado`, para preservar as dimensões ao reabri-los.
- Folga do objeto: expansão lateral de cada contorno SVG, por lado.
- Chanfro da entrada: 45°, inicialmente 0,4 mm na horizontal e na vertical. Alarga somente a entrada; mantém a medida nominal no trecho reto.
- Raio do fundo: inicialmente 0,8 mm, na junção interna entre parede e fundo. Perfil de um quarto de círculo aproximado em oito segmentos. Preserva a espessura do fundo e a profundidade no centro, ocupando espaço nos cantos inferiores.
- Ambos os acabamentos aceitam 0 para desativar. A validação limita o chanfro para preservar material e rejeita raios que eliminem ou dividam contornos estreitos.
- Somente no modo separado, profundidade do encaixe: inicialmente 0,8 mm. O degrau nas pontas das paredes penetra essa distância na placa de fundo. A lingueta ocupa a metade externa da parede e envolve o degrau do fundo; não há uma borda externa elevada no fundo. Há 0,1 mm de folga axial e folga lateral ajustável, inicialmente 0,15 mm por lado. É um encaixe de alinhamento desmontável, sem trava de retenção.
- A validação preserva pelo menos 0,25 mm sob o rebaixo e 0,25 mm de degrau lateral; raios e folgas precisam caber na parede e no fundo.
- Caixa exportada com pés em Z=0. No modo automático há somente caixa e tampa; as paredes tocam o piso sem encaixe. A tampa com paredes é girada 180° em X, com a face superior na mesa e as paredes subindo com as extremidades abertas. A placa de fundo é transladada para Z=0, com os rebaixos abertos para cima. A vista de impressão mostra essas duas partes lado a lado.
- A vista **Encaixe** amplia o degrau e o rebaixo, deixando espaço entre as duas peças para inspecionar a junção.
- Projetos salvos usam formato v5, com `bottomMode: auto` ou `separate`. Projetos v1, v2, v3 e v4 são aceitos e usam o modo automático quando não possuem preferência explícita.

A divisão remove o fechamento integral dos fundos no alto. A pequena entrada chanfrada e o raio na extremidade interna das paredes ainda podem produzir avanços curtos entre camadas; o raio de 0,8 mm tem trechos próximos da horizontal. Para minimizar também esse avanço, reduza ou desative o raio do fundo. Confira o fatiamento antes de imprimir; não foi feita validação física. A estimativa de massa usa volume sólido × densidade PLA de 1,24 g/cm³; não prevê infill, suportes, brim ou consumo efetivo.

A compatibilidade dimensional não substitui um teste físico na sua base. Em especial, deslocamentos de 21 mm dependem da geometria da baseplate usada. Comece com uma amostra pequena antes de imprimir um conjunto grande.

## SVGs aceitos e limites

Paths, retângulos, círculos, elipses e polígonos preenchidos. Curvas e transforms são interpretados pelo SVGLoader do Three.js; curvas são aproximadas em segmentos. Converta traços em contornos. Sem texto, imagens, referências externas, scripts, estilos externos ou ilhas internas. Até 500 KB, 100 caminhos e 16 mil pontos amostrados. Os contornos precisam caber dentro da área livre do apoio, com margem. Cavidades sobrepostas se fundem.

A ferramenta bloqueia geometria que invade o apoio, toca o fundo da caixa ou não passa nas verificações do motor. Não inclui furos para ímãs/parafusos, 3MF, empilhamento, edição gráfica individual ou geração a partir de imagem raster.

## Implementação

Vite + JavaScript, Three.js para visualização e leitura de SVG, Manifold WebAssembly para operações de sólidos dentro de Web Worker. Preview e exportação usam os mesmos triângulos. Simplificação limitada a 0,001 mm remove resíduos numéricos antes da conversão para float32. As malhas de saída são verificadas quanto a fechamento nos testes.

- `src/geometry.js`: construção da caixa, pés, ressalto lateral adaptativo, tampa com paredes e fundo opcional.
- `src/cavity-profile.js`: perfil variável das cavidades, com chanfro e raio de fundo.
- `src/parameters.js`: dimensões, valores iniciais, planejamento do piso e validação.
- `src/model.worker.js`: geração fora da thread da interface e liberação da memória do motor.
- `src/shape-editor.js`: contornos paramétricos com raios circulares ou elípticos e simetria por canto.
- `src/svg.js`: leitura e restrições dos SVGs.
- `src/viewer.js`: preview e posições de montagem/impressão.
- `src/mesh.js`: STL binário e transformação de impressão.
- `src/main.js`: controles, importação, revisão/aprovação e downloads.

A pesquisa de soluções está em `docs/research.md`. O grafo graphify não foi criado, conforme preferência do usuário nesta sessão. Quando autorizado, gerar na raiz e manter atualizado a cada mudança estrutural.

No preview, **Mostrar cotas da abertura** alterna largura X, comprimento Y e profundidade útil por cavidade. As cotas acompanham as peças nas vistas e a rotação da câmera. X e Y medem os extremos da seção central da cavidade, incluindo a folga do objeto e ignorando o chanfro e o arredondamento do fundo; a profundidade vai da superfície superior da tampa ao piso interno. São anotações de visualização e não entram nos STLs.

Os raios dos cantos têm sliders com mínimo de 0 mm e máximo calculado a partir das dimensões, da simetria e dos cantos vizinhos. O campo numérico sincronizado permite precisão de 0,01 mm. A validação do encaixe na caixa continua sendo aplicada.

Após aprovar o preview, **Projeto completo .3mf** baixa todas as peças como objetos independentes em milímetros, orientadas e separadas por 10 mm sobre a mesa. O seletor de perfil oferece projeto Bambu A1 com bico 0,4 mm, camada 0,20 mm e PLA genérico, ou 3MF genérico de geometria. No modo Bambu, revise o filamento real e fatie no Studio. Inclui os parâmetros originais em `Metadata/forma-project.json`; o modo Bambu inclui as configurações nativas de projeto e atribuição de peças à mesa; nenhum modo inclui G-code fatiado. As exportações STL individuais continuam disponíveis.

A borda lateral de apoio da tampa tem chanfro inferior automático: cresce da parede até a largura configurada, com face inclinada em 45° ou mais íngreme nos cantos. O topo permanece plano na altura de apoio original. O recorte de passagem das paredes da cavidade atravessa toda a rampa, preservando o encaixe e a caixa oca. O chanfro entra na geometria do preview, STL e 3MF.


## PNG A4, ajuste fino e caixa automática

Em **Origem do contorno → PNG de folha A4**, envie uma imagem PNG com contornos pretos fechados sobre fundo branco. A imagem inteira é calibrada independentemente nos eixos X e Y: 210 × 297 mm em retrato ou 297 × 210 mm em paisagem. Portanto, inclua toda a folha, sem recortar apenas o objeto. A aplicação redimensiona a imagem para no máximo 1400 pixels no eixo maior antes de vetorizar; as medidas são uma estimativa, adequada ao ajuste fino na UI. O limiar de preto pode ser ajustado para remover sombras e melhorar a detecção. Aceita também silhuetas pretas preenchidas e múltiplas cavidades; ruído abaixo de 1 mm² é descartado.

Os campos **Abertura final · X/Y** alteram as medidas centrais reais, já com folga, sem contar chanfro ou raio de fundo. A folga configurada é preservada; os campos do contorno mostram a medida nominal correspondente. **Baixar contorno ajustado .svg** gera o SVG vetorial nas dimensões nominais ajustadas. Não há envio a servidores.

A folga do objeto é obrigatoriamente positiva: mínimo 0,05 mm por lado, padrão 0,2 mm. Ao abrir projetos antigos com folga zero, é aplicado o padrão de 0,2 mm. Isso pode exigir uma caixa maior. O erro de invasão das paredes aparece em **Dimensões da caixa**, junto ao botão **Ajustar ao menor tamanho · passos de 0,5 grid**. A busca preserva desenho, folga, paredes e deslocamento; escolhe a menor área válida, com desempate pelo menor perímetro, e verifica o encaixe e o apoio no motor CAD. Ativa meio grid e mantém a orientação do desenho.

O projeto JSON versão 7 salva o SVG vetorizado, calibração A4 e dimensões X/Y independentes. Ao reabri-lo, o contorno é restaurado sem precisar do PNG; para alterar limiar ou orientação da extração, envie o PNG novamente. O raster original não é embutido no projeto.

O perfil 3MF Bambu A1 exporta **Sparse Infill = Lightning**. A opção genérica continua sendo geometria sem perfil de fatiamento.


## Borda de empilhamento e encaixe da tampa

O perfil superior segue a seção solicitada: chanfro inferior entrando na abertura, garganta vertical de 1,8 mm e chanfro superior que retorna à parede de topo de 0,6 mm. A garganta fica a 1,9 mm da face externa. Para paredes de pelo menos 1,2 mm, a borda tem 3,8 mm de altura; paredes mais finas alongam o chanfro inferior para manter a inclinação imprimível. É uma adaptação do perfil de empilhamento à seção solicitada, com validação geométrica dos pés gerados pela ferramenta.

A parede do alojamento mantém a mesma espessura do corpo, sem colar interno adicional. O apoio triangular cresce diretamente dessa parede, com face superior plana. A tampa é dimensionada pela parede interna da caixa, ignorando a garganta superior conforme a montagem por flexão solicitada. Mantém a folga lateral configurada e pelo menos 0,2 mm de contato com o apoio. A inserção rígida pode colidir com a garganta; a geometria não simula a deformação do PLA. O apoio fica abaixo do início da borda por `espessura da tampa + folga vertical` (padrão 0,2 mm). A busca automática da menor caixa considera a parede do alojamento, sem ampliar a caixa em função da garganta. O desenho da seção 04 usa os mesmos parâmetros do CAD.

Com piso automático, a altura do corpo é calculada como `4,75 + espessura do piso + profundidade útil + folga vertical`. A altura total é a altura do corpo mais a altura da borda (normalmente 3,8 mm). O controle de altura fica automático; no modo fundo separado, é livre e editável. Não é necessário impor múltiplos de 7 mm para encaixe ou empilhamento. Para 42 mm úteis, piso de 1,6 mm e folga vertical de 0,2 mm: corpo de 48,55 mm, altura total 52,35 mm e, com tampa de 2 mm, encaixe de 2,2 mm.

Projetos antigos são carregados com a borda e com folga vertical de 0,2 mm. O antigo rebaixo variável não controla mais a posição da tampa. SVG, dimensões da cavidade e profundidade são preservados; as folgas laterais salvas são preservadas.

A folga tampa–caixa padrão é 0,15 mm por lado (0,30 mm no total), positiva e ajustável de 0,05 a 1 mm. É um ponto de partida para calibrar o encaixe em PLA, não uma compensação universal de retração. A variação dimensional depende do filamento, resfriamento e calibração; não se aplica escala percentual automática. Referência: https://help.prusa3d.com/article/modeling-with-3d-printing-in-mind_164135 .
