function calculate_total() {
  let selector = document.getElementById("discount-selector");
  let value = selector.value;
  let total_input = document.getElementById("total");
  let discount = 0;
  const ticketValue = 200;
  switch (value) {
    case "1":
      discount = 0.8 * ticketValue;
      break;
    case "2":
      discount = 0.5 * ticketValue;
      break;
    case "3":
      discount = 0.15 * ticketValue;
      break;
  }
  let result = ticketValue - discount;
  total_input.value = result;
}
