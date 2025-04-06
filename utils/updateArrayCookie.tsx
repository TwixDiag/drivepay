export default function updateArrayCookie(name: string, newItems: any[], path = '/') {
    // Получаем текущие cookie
    const cookies = document.cookie
        .split('; ')
        .find(row => row.startsWith(`${name}=`));

    let currentArray: any[] = [];

    // Если cookie с таким именем уже есть — парсим его
    if (cookies) {
        try {
            const value = decodeURIComponent(cookies.split('=')[1]);
            currentArray = JSON.parse(value);
            if (!Array.isArray(currentArray)) {
                currentArray = [];
            }
        } catch (error) {
            currentArray = [];
        }
    }

    // Объединяем старый и новый массивы
    const updatedArray = [...currentArray, ...newItems];

    // Сохраняем обратно в cookie
    const stringifiedArray = JSON.stringify(updatedArray);
    const date = new Date();
    date.setFullYear(date.getFullYear() + 10);
    const expires = `expires=${date.toUTCString()}`;
    const cookieString = `${name}=${encodeURIComponent(stringifiedArray)}; ${expires}; path=${path}`;

    document.cookie = cookieString;
}