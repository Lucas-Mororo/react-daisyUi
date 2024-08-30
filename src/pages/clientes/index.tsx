import DialogCadastroItens from '../../components/Dialog/Cadastros/Itens';
import DialogCadastroOs from '../../components/Dialog/Cadastros/Os';
import TabelaClientes from '../../components/Tabela/clientes';

export default function Cliente() {

    return (
        <>
            {/* -------- Botões de Cadastro -------- */}
            <div className="w-full p-1 flex justify-center ">
                <div className="flex justify-end w-full">
                    <a role="button" href="#my_modal_cliente" className="btn m-1 btn-primary">Novo Cliente</a>
                </div>
            </div>

            <TabelaClientes />
        </>
    )
}