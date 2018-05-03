// TODO заполнить
const auto = {
    steps: [
        {
            id: 1,
            type: 'common',
        },
        {
            id: 2,
            type: 'common',
        },
        {
            id: 3,
            type: 'common',
        },
        {
            id: 4,
            type: 'form',
            title: 'Введите ваши данные',
        },
    ],
    questions: [
        {
            id: 1,
            step_id: 1,
            title: 'Какая сумма вам нужна?',
            name: 'amount',
            type: 'btn_bar',
        },
        {
            id: 2,
            step_id: 1,
            name: 'term',
            title: 'На какой срок вам нужен кредит?',
            type: 'btn_bar',
        },
        {
            id: 3,
            step_id: 2,
            title: 'Стаж работы на последнем месте?',
            name: 'experience',
            type: 'btn_bar',
        },
        {
            id: 4,
            step_id: 2,
            title: 'Наличие пенсионных отчислений за последние 6 месяцев',
            name: 'pension',
            type: 'btn_bar',
        },
        {
            id: 5,
            step_id: 2,
            title: 'Размер официальной заработной платы?',
            name: 'salary',
            type: 'btn_bar',
        },
        {
            id: 6,
            step_id: 3,
            title: 'Есть кредиты сейчас?',
            name: 'active_loans',
            type: 'btn_bar',
        },
        {
            id: 7,
            step_id: 3,
            title: 'Сколько платите по кредиту?',
            name: 'active_loans_pays',
            type: 'input_question',
        },
        {
            id: 8,
            step_id: 4,
            title: 'Город',
            name: 'city',
            type: 'form_select',
            values: [
                {
                    title: 'Алматы',
                    value: 'алматы'
                },
                {
                    title: 'Астана',
                    value: 'астана'
                },
                {
                    title: 'Караганда',
                    value: 'караганда'
                },
                {
                    title: 'Тараз',
                    value: 'тараз'
                },
                {
                    title: 'Шымкент',
                    value: 'шымкент'
                }
            ]
        },
        {
            id: 9,
            step_id: 4,
            title: 'Фамилия',
            name: 'last_name',
            type: 'form_input',
            label: 'Кайназаров',
        },
        {
            id: 10,
            step_id: 4,
            title: 'Имя',
            name: 'first_name',
            type: 'form_input',
            label: 'Руслан',
        },
        {
            id: 11,
            step_id: 4,
            title: 'Отчество',
            name: 'middle_name',
            type: 'form_input',
            label: 'Алматович',
        },
        {
            id: 12,
            step_id: 4,
            title: 'Телефон',
            name: 'middle_name',
            type: 'form_input',
            label: '+7(000)000-00-00',
        },
        {
            id: 13,
            step_id: 4,
            title: 'Продолжить',
            type: 'form_submit',
        }
    ],
    answers: [
        {
            id: 1,
            answer_id: 1,
            step_id: 1,
            title: 'До 100 000 ₸',
            value: 0,
            type: 'button'
        },
        {
            id: 2,
            answer_id: 1,
            step_id: 1,
            title: '100 000 - 300 000 ₸',
            value: 150000,
            type: 'button'
        },
        {
            id: 3,
            answer_id: 1,
            step_id: 1,
            title: '300 000 - 1 000 000 ₸',
            value: 500000,
            type: 'button'
        },
        {
            id: 4,
            answer_id: 1,
            step_id: 1,
            title: '1 000 000 - 3 000 000 ₸',
            value: 2500000,
            type: 'button'
        },
        {
            id: 5,
            answer_id: 1,
            step_id: 1,
            title: 'Указать точную сумму',
            value: 0,
            type: 'input-button'
        },
        {
            id: 6,
            answer_id: 2,
            step_id: 1,
            title: '1 месяц',
            value: 1,
            type: 'button'
        },
        {
            id: 7,
            answer_id: 2,
            step_id: 1,
            title: '3 месяца',
            value: 3,
            type: 'button'
        },
        {
            id: 8,
            answer_id: 2,
            step_id: 1,
            title: '6 месяцев',
            value: 6,
            type: 'button'
        },
        {
            id: 9,
            answer_id: 2,
            step_id: 1,
            title: '1 год',
            value: 12,
            type: 'button'
        },
        {
            id: 10,
            answer_id: 2,
            step_id: 1,
            title: '2 года',
            value: 24,
            type: 'button'
        },
        {
            id: 11,
            answer_id: 2,
            step_id: 1,
            title: '3 года',
            value: 36,
            type: 'button'
        },
        {
            id: 12,
            answer_id: 2,
            step_id: 1,
            title: '5 лет',
            value: 60,
            type: 'button'
        },
        {
            id: 13,
            answer_id: 2,
            step_id: 1,
            title: 'Указать точный срок',
            value: 60,
            type: 'input-button'
        },
        {
            id: 14,
            answer_id: 3,
            step_id: 2,
            title: 'Не работаю',
            value: 0,
            type: 'button'
        },
        {
            id: 15,
            answer_id: 3,
            step_id: 2,
            title: 'До 6 мес',
            value: 5,
            type: 'button'
        },
        {
            id: 16,
            answer_id: 3,
            step_id: 2,
            title: 'Свыше 6 мес',
            value: 7,
            type: 'button'
        },
        {
            id: 17,
            answer_id: 3,
            step_id: 2,
            title: 'Работаю на себя',
            value: 0,
            type: 'button'
        },
        {
            id: 18,
            answer_id: 4,
            step_id: 2,
            title: 'Да',
            value: 1,
            type: 'button'
        },
        {
            id: 19,
            answer_id: 4,
            step_id: 2,
            title: 'Нет',
            value: 0,
            type: 'button'
        },
        {
            id: 20,
            answer_id: 5,
            step_id: 2,
            title: 'Официального дохода нет',
            value: 0,
            type: 'button'
        },
        {
            id: 21,
            answer_id: 5,
            step_id: 2,
            title: 'До 60 000 ₸',
            value: 50000,
            type: 'button'
        },
        {
            id: 22,
            answer_id: 5,
            step_id: 2,
            title: 'Свыше 60 000 ₸',
            value: 70000,
            type: 'button'
        },
        {
            id: 23,
            answer_id: 5,
            step_id: 2,
            title: 'Указать другую сумму',
            value: 0,
            type: 'input-button'
        },
        {
            id: 24,
            answer_id: 6,
            step_id: 3,
            title: 'Да',
            value: 1,
            type: 'button'
        },
        {
            id: 25,
            answer_id: 6,
            step_id: 3,
            title: 'Нет',
            value: 0,
            type: 'button'
        }
    ]
};

export default auto;