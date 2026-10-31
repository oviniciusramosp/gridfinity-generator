# Perfil Bambu A1 0,4 mm

`bambu-a1-04-pla.json` é uma configuração completa obtida pelo CLI do Bambu Studio 02.08.02.60 a partir dos presets de sistema: Bambu Lab A1 0.4 nozzle, 0.20mm Standard @BBL A1 e Generic PLA @BBL A1. Não usa presets ou dados pessoais do usuário. As heranças e includes dos presets foram resolvidos antes de exportar a configuração nativa.

Origem: https://github.com/bambulab/BambuStudio/tree/master/resources/profiles/BBL
Formato: https://github.com/bambulab/BambuStudio/blob/master/src/libslic3r/Format/bbs_3mf.cpp

O campo Application do modelo identifica a versão do formato Bambu exigida pelo importador; Generator identifica o Forma. O perfil permanece visível no seletor de exportação. O usuário deve conferir o material físico antes de fatiar.

Validação: CLI instalado releu o 3MF gerado e exportou suas configurações, preservando printer_model, nozzle_diameter, print_settings_id, filament_settings_id e layer_height. Foram verificadas duas peças com dimensões 62,5 × 41,5 × 49 mm e 59,8 × 38,6 × 42 mm.

O preenchimento esparso foi fixado em **Lightning**, conforme a preferência do projeto. O 3MF exportado foi relido pelo CLI do Studio, confirmando `sparse_infill_pattern=lightning`.
