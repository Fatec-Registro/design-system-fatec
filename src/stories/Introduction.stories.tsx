import type { Meta, StoryObj } from '@storybook/react-vite';

const Introduction = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Design System FATEC</h1>
      <p style={{ fontSize: '1.125rem', marginBottom: '2rem' }}>
        Bem-vindo à documentação do Design System da FATEC Registro!
      </p>

      <h2 style={{ fontSize: '1.875rem', marginTop: '2rem', marginBottom: '1rem' }}>📦 O que é?</h2>
      <p style={{ marginBottom: '1rem' }}>
        Este é um sistema de design construído com React, TypeScript e Tailwind CSS, 
        baseado em componentes shadcn/ui customizados para atender as necessidades 
        visuais e funcionais da FATEC.
      </p>

      <h2 style={{ fontSize: '1.875rem', marginTop: '2rem', marginBottom: '1rem' }}>🎨 Componentes Disponíveis</h2>
      <p style={{ marginBottom: '0.5rem' }}>Navegue pela barra lateral para explorar os componentes:</p>
      <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem' }}>
        <li><strong>Button</strong> - Botões customizados com variantes (default, secondary, destructive, outline, ghost, link)</li>
        <li><strong>Avatar</strong> - Componente de avatar com suporte a imagem e fallback</li>
        <li>E mais componentes em breve...</li>
      </ul>

      <h2 style={{ fontSize: '1.875rem', marginTop: '2rem', marginBottom: '1rem' }}>🚀 Como usar</h2>
      
      <h3 style={{ fontSize: '1.5rem', marginTop: '1.5rem', marginBottom: '0.75rem' }}>Instalação</h3>
      <pre style={{ 
        background: '#f5f5f5', 
        padding: '1rem', 
        borderRadius: '0.5rem',
        overflow: 'auto',
        marginBottom: '1rem'
      }}>
        <code>npm install design-system-fatec</code>
      </pre>

      <h3 style={{ fontSize: '1.5rem', marginTop: '1.5rem', marginBottom: '0.75rem' }}>Importar CSS</h3>
      <p style={{ marginBottom: '0.5rem' }}>Importe o CSS no seu arquivo principal:</p>
      <pre style={{ 
        background: '#f5f5f5', 
        padding: '1rem', 
        borderRadius: '0.5rem',
        overflow: 'auto',
        marginBottom: '1rem'
      }}>
        <code>{`import 'design-system-fatec/styles.css';`}</code>
      </pre>

      <h3 style={{ fontSize: '1.5rem', marginTop: '1.5rem', marginBottom: '0.75rem' }}>Usar componentes</h3>
      <pre style={{ 
        background: '#f5f5f5', 
        padding: '1rem', 
        borderRadius: '0.5rem',
        overflow: 'auto',
        marginBottom: '1rem'
      }}>
        <code>{`import { Button, Avatar, AvatarImage, AvatarFallback } from 'design-system-fatec';

function App() {
  return (
    <div>
      <Button variant="default">Clique aqui</Button>
      
      <Avatar>
        <AvatarImage src="/avatar.png" alt="User" />
        <AvatarFallback>FT</AvatarFallback>
      </Avatar>
    </div>
  );
}`}</code>
      </pre>

      <h2 style={{ fontSize: '1.875rem', marginTop: '2rem', marginBottom: '1rem' }}>🎨 Tema</h2>
      <p style={{ marginBottom: '0.5rem' }}>O sistema já vem com um tema customizado com as cores da FATEC:</p>
      <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem' }}>
        <li><strong>Primary</strong>: #b20000 (Vermelho FATEC)</li>
        <li><strong>Secondary</strong>: #005c6d (Azul)</li>
        <li>Suporte a <strong>dark mode</strong></li>
        <li>Fonte padrão: <strong>Roboto</strong></li>
      </ul>

      <h2 style={{ fontSize: '1.875rem', marginTop: '2rem', marginBottom: '1rem' }}>🔗 Links Úteis</h2>
      <ul style={{ marginLeft: '1.5rem' }}>
        <li>
          <a 
            href="https://github.com/Fatec-Registro/design-system-fatec" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#b20000' }}
          >
            GitHub
          </a>
        </li>
        <li>
          <a 
            href="https://www.npmjs.com/package/design-system-fatec" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#b20000' }}
          >
            NPM
          </a>
        </li>
      </ul>
    </div>
  );
};

const meta = {
  title: 'Introdução/Bem-vindo',
  component: Introduction,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Introduction>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
