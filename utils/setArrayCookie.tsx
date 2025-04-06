export default function setArrayCookie(name: string, array: any, path = '/') {
    const stringifiedArray = JSON.stringify(array); // Преобразуем массив в строку
    const date = new Date();
    date.setFullYear(date.getFullYear() + 10); // Устанавливаем срок действия на 10 лет вперёд
    const expires = `expires=${date.toUTCString()}`;

    let cookieString = `${name}=${encodeURIComponent(stringifiedArray)}; ${expires}; path=${path}`;

    document.cookie = cookieString;
}