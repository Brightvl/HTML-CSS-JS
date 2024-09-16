/*
Задание 2: Список дел с Material UI

Цель: Разработать компонент TodoList для управления задачами: добавление, отображение, и удаление задач.

Компоненты:
Используйте TextField для ввода новой задачи.
Добавьте Button для добавления задачи в список.
Для каждой задачи в списке используйте Card или ListItem из Material UI. Внутри каждого элемента списка разместите текст задачи и IconButton с иконкой удаления (например, DeleteIcon).

Логика:
При нажатии на кнопку добавления, новая задача должна добавляться в список.
Рядом с каждой задачей должна быть кнопка для её удаления.
*/

import React, { useState } from 'react';
import { TextField, Button, List, ListItem, IconButton, Typography, Card, CardContent } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import style from './style.module.scss'; // Подключите стили, если они вам нужны

export const TodoList = () => {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);


    const addTask = () => {
        if (task.trim() === "") return;
        setTasks([...tasks, task]);
        setTask("");
    };


    const removeTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div className={style.container}>
            <div className={style.container}>
                <TextField
                    label="Новая задача"
                    variant="outlined"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    fullWidth
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={addTask}
                    style={{ marginLeft: '8px' }}
                >
                    Добавить
                </Button>
            </div>
            <List className={style.container}>
                {tasks.map((task, index) => (
                    <ListItem key={index} className={style.listItem}>
                        <Card variant="outlined" style={{ width: '100%' }}>
                            <CardContent style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Typography variant="body1">{task}</Typography>
                                <IconButton edge="end" aria-label="delete" onClick={() => removeTask(index)}>
                                    <DeleteIcon />
                                </IconButton>
                            </CardContent>
                        </Card>
                    </ListItem>
                ))}
            </List>
        </div>
    );
};
