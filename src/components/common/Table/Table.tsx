

import styles from "./Table.module.css";

export interface Column<T> {
    header: string;
    accessor: keyof T;
};

interface TableProps<T> {
    columns: Column<T>[];
    data: T[];
    handleEdit?: (item: T) => void;
    handleDelete?: (item: T) => void;
};

export const Table = <T,>({ columns, data, handleEdit, handleDelete }: TableProps<T>): JSX.Element => {
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    {columns.map((column, index) => (
                        <th key={index} className={styles.th}>{column.header}</th>
                    ))}
                    {(handleEdit || handleDelete) && <th className={styles.th}>Ações</th>}
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        {columns.map((column, columnIndex) => (
                            column.accessor == "image"?
                            <td key={columnIndex} className={styles.td}>
                                <img className={styles.image} src={item[column.accessor] as string} alt="Imagem"/>
                                </td>
                                :
                                <td key={columnIndex} className={styles.td}>{item[column.accessor]}</td>
                            
                        ))}
                        {(handleEdit || handleDelete) && (
                            <td>
                                {handleEdit && <button className={styles.buttonEdit} onClick={() => handleEdit(item)}>Editar</button>}
                                {handleDelete && <button className={styles.buttonDelete} onClick={() => handleDelete && handleDelete(item)}>Excluir</button>}
                            </td>
                        )}
                        </tr>
                ))}
            </tbody>
        </table>

    );
    
};
