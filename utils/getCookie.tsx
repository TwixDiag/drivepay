export default function getCookie(name: string) {
    if (typeof document === 'undefined') {
        // Если код выполняется на сервере, возвращаем null
        return null;
    }

    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(nameEQ) === 0) {
            const value = decodeURIComponent(c.substring(nameEQ.length, c.length));

            try {
                // Пытаемся распарсить значение как JSON
                return JSON.parse(value);
            } catch (e) {
                // Если это не валидный JSON, возвращаем значение как строку
                return value;
            }
        }
    }
    return null; // Возвращаем null, если cookie не найдена
}