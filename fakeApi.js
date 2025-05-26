async function fetchOpenTickets() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          number: "INC001",
          status: "Открыта",
          created_at: "2024-12-30T09:00:00Z",
        },
        {
          number: "INC002",
          status: "В работе",
          created_at: "2025-01-03T14:20:00Z",
        },
        {
          number: "INC003",
          status: "Ожидает ответа",
          created_at: "2025-02-15T08:15:00Z",
        },
        {
          number: "INC004",
          status: "Открыта",
          created_at: "2024-11-12T11:30:00Z",
        },
        {
          number: "INC005",
          status: "Открыта",
          created_at: "2025-03-01T17:45:00Z",
        },
        {
          number: "INC006",
          status: "Решена",
          created_at: "2023-06-18T13:10:00Z",
        },
        {
          number: "INC007",
          status: "Открыта",
          created_at: "2025-01-10T10:10:00Z",
        },
        {
          number: "INC008",
          status: "В работе",
          created_at: "2024-10-01T07:25:00Z",
        },
        {
          number: "INC009",
          status: "Ожидает ответа",
          created_at: "2025-05-15T12:00:00Z",
        },
        {
          number: "INC010",
          status: "Открыта",
          created_at: "2025-01-01T00:01:00Z",
        },
      ]);
    }, 500);
  });
}
