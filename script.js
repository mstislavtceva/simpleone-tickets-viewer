document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("ticket-container");

  function formatDate(isoString) {
    const date = new Date(isoString);
    return date.toLocaleDateString();
  }

  function renderTickets(tickets) {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    ["Номер заявки", "Статус", "Дата создания"].forEach((text) => {
      const th = document.createElement("th");
      th.textContent = text;
      headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");

    tickets.forEach((ticket) => {
      const row = document.createElement("tr");

      const numberCell = document.createElement("td");
      numberCell.textContent = ticket.number;

      const statusCell = document.createElement("td");
      statusCell.textContent = ticket.status;

      const dateCell = document.createElement("td");
      dateCell.textContent = formatDate(ticket.created_at);

      row.appendChild(numberCell);
      row.appendChild(statusCell);
      row.appendChild(dateCell);
      tbody.appendChild(row);
    });

    table.appendChild(tbody);
    container.innerHTML = "";
    container.appendChild(table);
  }

  const tickets = await fetchOpenTickets();
  renderTickets(tickets);
});
