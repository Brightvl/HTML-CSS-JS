/*
Задание 4
    ● Создайте маленькое приложение со страницей списка (ListPage)
    и страницей деталей (DetailPage).
    ● На ListPage отобразите список элементов (например, статей или продуктов),
    где каждый элемент является ссылкой на DetailPage,
    содержащую детальную информацию об элементе.
    Используйте react-router-dom для настройки маршрутизации.
    ● На DetailPage используйте useParams для извлечения параметра
    из URL (например, ID элемента) и отобразите детальную информацию об элементе.
*/

import {Link, useParams} from "react-router-dom";

export const ListPage = ({products}) => {
    const {pageNumber} = useParams();
    return (
        <>
            <Link to={"/"}>Назад</Link>
            <h1>Страница списка</h1>
            <ul>
                {products.map((product) => (<li key={product.id}>
                        <Link to={`/goods/${product.id}`}>{product.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}