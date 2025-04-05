import { promises as fs } from 'fs';
import path from 'path';

export async function getSettings() {
    try {
        const filePath = path.join(process.cwd(), 'db.json');
        const fileContent = await fs.readFile(filePath, 'utf-8');
        const data = JSON.parse(fileContent);

        return data.settings?.[0] ?? null;
    } catch (err) {
        console.error('❌ Ошибка при чтении настроек:', err);
        return null;
    }
}