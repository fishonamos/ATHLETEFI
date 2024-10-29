declare global {
  interface Window {
    Telegram?: {
      WebApp: {
        ready(): void;
        expand(): void;
        close(): void;
        MainButton: {
          text: string;
          show(): void;
          hide(): void;
          onClick(callback: () => void): void;
        };
      };
    };
  }
}

export const initTelegramApp = () => {
  if (window.Telegram) {
    window.Telegram.WebApp.ready();
    window.Telegram.WebApp.expand();
  }
}; 