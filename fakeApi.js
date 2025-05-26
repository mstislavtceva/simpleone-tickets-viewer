async function fetchOpenTickets() {
  return new Promise((resolve, reject) => {
    // Искусственная задержка для эмуляции запроса
    setTimeout(() => {
      // Вероятность ошибки — 10%
      const shouldFail = Math.random() < 0.1;

      if (shouldFail) {
        reject(new Error("Сервер недоступен. Перезагрузите страницу."));
        return;
      }

      // Моковые данные
      const tickets = [
        {
          number: "ITSM-1001",
          status: "Открыта",
          created_at: "2025-02-10T10:15:00Z",
        },
        {
          number: "ITSM-1002",
          status: "Открыта",
          created_at: "2024-12-20T08:30:00Z",
        },
        {
          number: "ITSM-1003",
          status: "Ожидает информации",
          created_at: "2025-01-05T14:45:00Z",
        },
        {
          number: "ITSM-1004",
          status: "На проверке",
          created_at: "2023-11-11T09:20:00Z",
        },
        {
          number: "ITSM-1005",
          status: "Открыта",
          created_at: "2025-03-01T16:00:00Z",
        },
        {
          number: "ITSM-1006",
          status: "Открыта",
          created_at: "2024-05-14T13:10:00Z",
        },
        {
          number: "ITSM-1007",
          status: "Назначена",
          created_at: "2025-01-20T10:00:00Z",
        },
        {
          number: "ITSM-1008",
          status: "Открыта",
          created_at: "2023-08-10T07:30:00Z",
        },
      ];

      resolve(tickets);
    }, 1000);
  });
}
