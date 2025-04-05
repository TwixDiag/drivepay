// pages/api/settings.js
import { promises as fs } from 'fs';
import path from 'path';

// Получение настроек
export async function getSettings() {
    const filePath = path.join(process.cwd(), 'db.json');
    const fileData = await fs.readFile(filePath, 'utf-8');
    const data = JSON.parse(fileData);
    console.log(data);
}

// Обновление настроек
export async function updateSettings(req: any, res: any) {
    try {
        const { city, workTime, pay } = req.body;

        const filePath = path.join(process.cwd(), 'db.json');
        const fileData = await fs.readFile(filePath, 'utf-8');
        const data = JSON.parse(fileData);

        data.settings[0] = { city, workTime, pay };

        await fs.writeFile(filePath, JSON.stringify(data, null, 2));

        res.status(200).json({ message: 'Настройки успешно обновлены' });
    } catch (error) {
        res.status(500).json({ error: 'Ошибка при обновлении настроек' });
    }
}
