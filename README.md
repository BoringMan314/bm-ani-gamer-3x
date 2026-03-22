# [B.M] 動畫瘋 3X 倍速

在 [動畫瘋](https://ani.gamer.com.tw)（`ani.gamer.com.tw`）的 HTML5 播放器倍速選單中，新增 **3×** 選項，並將影片播放速率設為 3 倍。

- **Manifest V3**
- **運作範圍**：僅 `https://ani.gamer.com.tw/*`
- **隱私**：不蒐集、不上傳資料；說明見專案內 [`privacy-policy.html`](privacy-policy.html)（上架時請提供可公開存取的網址）

## 功能說明

- 在 Video.js 播放器的「播放速度」選單最上方加入 **3x** 項目（與站方內建選項外觀一致）。
- 點選後透過 HTML5 `<video>` 的 `playbackRate` 設為 3；若站方播放器改版，可能需要配合調整腳本。

## 本機開發與測試

1. 複製或下載本儲存庫。
2. 開啟 Chrome／Edge，前往 `chrome://extensions`（或 Edge 的擴充功能頁）。
3. 開啟「開發人員模式」，點選「載入未封裝項目」，選取本專案資料夾（內含 `manifest.json` 的根目錄）。
4. 在動畫瘋任一有影片的頁面重新整理，開啟倍速選單確認出現 **3x**。

## 版本與多語系

- 版本號見 [`manifest.json`](manifest.json) 的 `version`。
- 介面字串與商店說明來自 [`_locales/`](_locales/)（預設 `zh_TW`，並含 `en`、`ja`、`zh_CN`）。

## Chrome 線上應用程式商店 — 更新上架流程

以下須使用您的 [Chrome Web Store 開發人員帳號](https://chrome.google.com/webstore/devconsole) 操作，本儲存庫無法代為提交。

1. **遞增版本**：修改 `manifest.json` 的 `version`（例如 `0.1.0` → `0.1.1`）。
2. **打包**：將要上傳的檔案打成 **ZIP**（根目錄須含 `manifest.json`）。建議排除：`.git`、未使用的 PSD、本機備份、未追蹤的個人檔案等。
3. **上傳套件**：在開發人員資訊主頁選取既有項目 → 「套件」→ 上傳新 ZIP。
4. **商店資產**（若文案或截圖有變）：更新說明、截圖；專案中已有 `screenshot_*.png` 可作為參考尺寸來源。
5. **隱私權**：在商店後台填寫隱私權實踐，並提供託管於 HTTPS 的 [`privacy-policy.html`](privacy-policy.html) 對應公開 URL。
6. **送審**：儲存並提交審核；審核通過後使用者端才會收到更新。

若為**首次上架**，除上述步驟外，還須完成一次性款項與開發人員帳戶設定（以 Google 當前政策為準）。

## 專案結構（摘要）

| 檔案 | 用途 |
|------|------|
| `manifest.json` | 擴充功能設定與權限 |
| `content.js` | 在符合的頁面注入 `injected.js` |
| `injected.js` | 在頁面內新增 3× 選單並設定播放速率 |
| `_locales/*/messages.json` | 名稱與描述字串 |
| `privacy-policy.html` | 隱私權政策（可託管後提供 URL） |

## 授權

未附獨立授權檔案時，預設為版權所有；若您要開放他人使用或修改，可自行新增 `LICENSE` 並於此段更新說明。
