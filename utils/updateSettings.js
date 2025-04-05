import { promises as fs } from 'fs';
import path from 'path';

export async function updateSettings(newSettingsData) {
  try {
    const filePath = path.join(process.cwd(), 'db.json');
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const data = JSON.parse(fileContent);

    // Заменяем старые настройки на новые
    data.settings[0] = newSettingsData;

    // Записываем обновленные данные обратно в db.json
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));
    console.log('✅ Настройки успешно обновлены');
  } catch (err) {
    console.error('❌ Ошибка при обновлении настроек:', err);
  }
}