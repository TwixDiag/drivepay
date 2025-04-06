export default function setCookie(name: string, value: any, path = '/') {
    const date = new Date();
    date.setFullYear(date.getFullYear() + 10); // Устанавливаем срок действия на 10 лет вперёд
    const expires = `expires=${date.toUTCString()}`;

    // Создаем cookie строку
    let cookieString = `${name}=${encodeURIComponent(value)}; ${expires}; path=${path}`;

    // Добавляем домен, если нужно
    // cookieString += "; domain=yourdomain.com"; // Раскомментировать, если нужен конкретный домен

    // Устанавливаем cookie
    document.cookie = cookieString;
}