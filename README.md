## 📦 Como publicar no NPM:

### 1. Preparação (primeira vez)

```bash
# Se ainda não tem conta no NPM
npm adduser

# Ou se já tem conta
npm login
```

### 2. Atualize as informações no package.json

Edite o arquivo `package.json` e atualize:
- `"name"`: o nome único da sua biblioteca no NPM
- `"version"`: a versão (ex: "1.0.0" para primeira publicação)
- `"author"`: seu nome
- `"description"`: descrição clara do que a lib faz
- `"repository"`: URL do repositório Git (se aplicável)

### 3. Faça o build

```bash
npm run build
```

Verifique se o build foi concluído com sucesso e os arquivos foram gerados em `dist/`:
- `design-system-fatec.es.js` - Bundle ESM
- `design-system-fatec.cjs.js` - Bundle CommonJS
- `styles.css` - CSS compilado com o tema
- `index.d.ts` - Tipos TypeScript

### 4. Publique

```bash
npm publish
```

## 🚀 Como usar em outro projeto:

### 1. Instale a biblioteca

```bash
npm install design-system-fatec
```

### 2. Importe o CSS (OBRIGATÓRIO)

**Opção A - No arquivo TypeScript principal (main.tsx ou index.tsx):**
```tsx
import 'design-system-fatec/styles.css';
import { createRoot } from 'react-dom/client';
import App from './App';

createRoot(document.getElementById('root')!).render(<App />);
```

**Opção B - No arquivo CSS principal (index.css):**
```css
@import 'design-system-fatec/styles.css';

/* Seus estilos aqui */
```

### 3. Use os componentes

```tsx
import { Button, cn } from 'design-system-fatec';

function MeuComponente() {
  return (
    <div>
      <Button>Botão Padrão</Button>
      <Button variant="secondary">Botão Secundário</Button>
      <Button variant="outline">Botão Outline</Button>
      <Button variant="destructive">Botão Destrutivo</Button>
    </div>
  );
}
```

## 🎨 Personalizando o tema

Você pode sobrescrever as variáveis CSS no projeto consumidor:

```css
/* No seu arquivo CSS, DEPOIS de importar o styles.css da lib */
:root {
  --primary: #005c6d;
  --primary-hover: #007a8f;
  --font-sans: 'Inter', system-ui, sans-serif;
}
```

## 🔄 Atualizando a biblioteca

### Adicionando novos componentes customizados

1. Crie seu novo componente em `src/components/custom/novo-componente.tsx`
2. **IMPORTANTE**: Adicione o export no arquivo `src/components/custom/index.ts`:
   ```ts
   export { Button } from "./button";
   export { NovoComponente } from "./novo-componente"; // ← Adicione aqui
   ```
3. Faça o build para testar: `npm run build`

### Publicando atualização

1. Faça suas alterações nos componentes
2. **Se adicionou novos componentes**, lembre-se de exportá-los em `src/components/custom/index.ts`
3. Aumente a versão no `package.json` (seguindo [semver](https://semver.org/))
   - Patch: `1.0.0` → `1.0.1` (bugfixes)
   - Minor: `1.0.0` → `1.1.0` (novas features)
   - Major: `1.0.0` → `2.0.0` (breaking changes)
4. Execute `npm publish` (o build roda automaticamente)

## 🧪 Testando localmente antes de publicar

```bash
# No diretório da biblioteca
npm link

# No projeto que vai usar a lib
npm link design-system-fatec
```

## 📝 Notas importantes:

- ✅ O CSS já inclui TODAS as classes Tailwind usadas pelos seus componentes
- ✅ O tema já vem configurado com as cores personalizadas
- ✅ Suporte a dark mode incluído
- ✅ TypeScript types inclusos
- ⚠️ Os consumidores da lib **NÃO precisam** instalar Tailwind
- ⚠️ Os consumidores **DEVEM** importar o `styles.css` da biblioteca