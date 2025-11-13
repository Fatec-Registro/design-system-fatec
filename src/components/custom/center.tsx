import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { ArrowUpRightIcon } from "lucide-react";
import { Button } from "@/components/custom/button";

type CenterProps = {
  children?: React.ReactNode;
};

export function Center({ children }: CenterProps) {
    return (
        <div className="flex flex-1 flex-col gap-4 p-4 pt-4">
          <div className="bg-white min-h-[100vh] flex-1 rounded-xl md:min-h-min shadow" >
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
            {children}
          </div>
        </div>
    );
}