import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty";
import type { NavItem } from "@/components/custom/sidebar/nav-main";

export type CenterProps = {
  /** Item do menu atualmente selecionado */
  selectedItem?: NavItem | null;
  /** Conteúdo customizado a ser renderizado */
  children?: React.ReactNode;
  /** Componente customizado para renderizar quando um item é selecionado */
  renderContent?: (item: NavItem) => React.ReactNode;
};

function DefaultWelcome() {
  return (
    <Empty className="text-start items-start">
      <EmptyHeader className="items-start text-start max-w-full">
        <EmptyTitle>Bem-vindo(a) ao Conecta!</EmptyTitle>
        <EmptyDescription className="whitespace-pre-line">
          {`Esta plataforma foi desenvolvida para centralizar e facilitar o acesso aos principais sistemas e serviços internos da Fatec.

Aqui, você encontrará ferramentas e recursos que apoiam suas atividades acadêmicas e administrativas, como:

- Avaliação Integradora
- Biblioteca
- Emissão de Certificados
- PACE (Programa de Acompanhamento e Conclusão de Estudos)
- QTE (Qualidade do Trabalho Educacional)
- Academies Hub
- Anúncios e Comunicados Internos`}
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent className="items-start max-w-full">
        <div className="flex gap-2 w-full">
          Para continuar, selecione o sistema que deseja acessar utilizando a barra lateral.
        </div>
      </EmptyContent>
    </Empty>
  );
}

// Componente padrão para renderizar quando um item é selecionado com empty state
function DefaultSelectedContent({ item }: { item: NavItem }) {
  return (
    <Empty className="text-start items-start">
      <EmptyHeader className="items-start text-start max-w-full">
        <EmptyTitle>{item.title}</EmptyTitle>
        <EmptyDescription>
          Você selecionou: {item.title}
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent className="items-start max-w-full">
        <div className="flex gap-2 w-full">
          Carregando conteúdo de {item.title}...
        </div>
      </EmptyContent>
    </Empty>
  );
}

export function Center({ selectedItem, children, renderContent }: CenterProps) {
  const renderSelectedContent = () => {
    if (!selectedItem) {
      return <DefaultWelcome />;
    }

    // Se o consumidor passou um renderContent customizado, usa ele
    if (renderContent) {
      return renderContent(selectedItem);
    }

    // Renderização padrão quando um item é selecionado
    return <DefaultSelectedContent item={selectedItem} />;
  };

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-4">
      <div className="bg-white min-h-[100vh] flex-1 rounded-xl md:min-h-min shadow">
        {renderSelectedContent()}
        {children}
      </div>
    </div>
  );
}