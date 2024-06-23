import React, { useState, useEffect } from "react";

import styles from './CadastrarInformacoes.module.css';

import * as Yup from 'yup';

import Input from "../../../components/forms/Input";
import TextArea from "../../../components/forms/Textarea";
import InformacoesCard from "./InformacoesCard";
import Button from "../../../components/common/Button";
import Form from "../../../components/forms/Form";
import Title from "../../../components/common/Title";

import { 
    Informacoes, 
    updateInformacao, 
    getInformacao
} from "../../../Services/informacoesService";

const CadastrarInformacoes: React.FC = () => {

    const [informacoes, setInformacoes] = useState<Informacoes>({} as Informacoes);

    const initialValues: Informacoes = {
        id: 1,
        foto: '',
        nome: '',
        titulo: '',
        resumo: '',

    };

    const validationSchema = Yup.object().shape({
        foto: Yup.string().required('Campo obrigatório'),
        nome: Yup.string().required('Campo obrigatório'),
        titulo: Yup.string().required('Campo obrigatório'),
        resumo: Yup.string().required('Campo obrigatório'),
    });

    const fetchInformacao = async () => {
        try {
            const informacoes = await getInformacao();
            setInformacoes(informacoes);
        } catch (error) {
            console.error('Erro ao buscar informações:', error);
        }
    };

    useEffect(() => {
        fetchInformacao();
    }, []);

    const onSubmit = async (values: Informacoes, { resetForm }: { resetForm: () => void }) => {
        try {

            await updateInformacao(values);
            setInformacoes(values)
            console.log({ values })
            resetForm();
            alert('Formulário enviado com sucesso!');

        } catch (error) {
            console.error('Erro ao enviar o formulário:', error);
            alert('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');
        }

    };

    const handleDelete = async () => {
        try {
            await updateInformacao(initialValues);
            setInformacoes(initialValues)
            console.log({ initialValues })
            alert('Informações deletadas com sucesso!');
        } catch (error) {
            console.error('Erro ao deletar o informações:', error);
        }
    }

    return (
        <div className={styles.container}>

            <Form
                initialValues={informacoes}
                enableReinitialize={true}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
                {({ errors, touched }) => (

                    <>

                        <Title>Informações Pessoais</Title>

                        <Input name="nome"
                            errors={errors.nome}
                            touched={touched.nome}
                            placeholder="Nome"
                        />

                        <Input name="foto"
                            errors={errors.foto}
                            touched={touched.foto}
                            placeholder="Foto (Insira o link da sua imagem)"
                        />

                        <Input name="titulo"
                            errors={errors.titulo}
                            touched={touched.titulo}
                            placeholder="Titulo do resumo"
                        />

                        <TextArea
                            name="resumo"
                            errors={errors.resumo}
                            touched={touched.resumo}
                            placeholder="Resumo"
                        />

                        <Button type="submit">Cadastrar</Button>

                    </>
                )}
            </Form>

            {informacoes &&
                Object.entries(informacoes).some(
                    ([key, value]) => key != "id" && value.trim() != ""
                ) && (
                    <div className={styles.cardContainer}>

                        <InformacoesCard informacao={informacoes} />

                        <Button onClick={handleDelete} red>Deletar</Button>

                    </div>
                )}
        </div>
    );
};

export default CadastrarInformacoes;