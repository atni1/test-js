alert('Данный сайт предназначен для лиц старше 18 лет. Выполните дальнейшие действия для доступа с сайту');
var age = +prompt('Введите Ваш возраст');
function ageTest(age) {
    if (age < 18){
        alert('В доступе отказано');
    }  
    if (age >= 18) {
        alert('Добро пожаловать на сайт')
        var chooseCategories = prompt('Азартные игры, ставки на спорт, рулетка, игровые автоматы')
        switch (chooseCategories) {
            case 'азартные игры':
                var gambling = prompt('Покер, 21')
                switch (gambling) {
                    case 'покер':
                        alert('Правила игры "Покер": \nhttps://academypoker.ru/rules.html')
                        break;
                    case '21':
                        alert('Правила игры "21": \nhttps://www.keft.ru/help/bj/rules')
                        break;
                
                    default:
                        alert('Используйте указанные игры')
                        break;
                }
                break;
            case 'ставки на спорт':
                var bet = prompt('Футбол, баскетбол')
                switch (bet) {
                    case 'футбол':
                        alert('Правила игры "Футбол": \nhttps://academypoker.ru/rules.html')
                        break;
                    case 'баскетбол':
                        alert('Правила игры "Баскетбол": \nhttps://academypoker.ru/rules.html')
                        break;
                
                    default:
                        alert('Используйте указанные игры')
                        break;
                }
                break;
            case 'рулетка':
                alert('Добро пожаловать в игру рулетка!')
                break;
            case 'игровые автоматы':
                alert('Добро пожаловать в раздел игровые автоматы!')
                break;
        
            default:
                alert('Выберите один из указанных разделов!')
                // Возвращаться к выбору категории
                break;
        }
    } 
}
ageTest(age)


