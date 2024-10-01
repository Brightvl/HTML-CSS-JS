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

import {Link, Navigate, useNavigate, useParams} from "react-router-dom";

export const DetailPage = ({products}) => {
    const {id} = useParams();
    const navigate = useNavigate();
    const product = products.find(product => product.id === parseInt(id, 10))
    const goBack = () => (navigate(-1));
    return (
        <>
            <button onClick={goBack}>Назад</button>
            <Link to={"/"}>На главную</Link>
            <p>{product.title}</p>
            <p>{product.price}</p>
        </>
    )
}