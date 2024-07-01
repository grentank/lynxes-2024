1. Если Windows -- установить WSL
2. Проверить, что NodeJs установлена через NVM
3. Пароль: `ingitwetrust`
4. Если `package.json` нет, то `npm init @elbrus/config@latest`
5. Если есть `pacakge.json`, то `npm i`

Один раз нужно настроить свой VSCode:

1. Скачать расширения ESLint, Prettier
2. В settings.json (Shift + Command/Ctrl + P -> settings.json - Open
   User Settings) нужно добавить:

```json
    "files.autoSave": "afterDelay",
    "eslint.validate": ["javascript"],
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "eslint.workingDirectories": [
        { "directory": "./client", "changeProcessCWD": true },
        { "directory": "./server", "changeProcessCWD": true }
    ],
```
