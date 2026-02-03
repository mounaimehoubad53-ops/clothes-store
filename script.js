function order() {
  const color = document.getElementById("color").value;
  const size = document.getElementById("size").value;

  const message = `مرحبا، أريد طلب T-Shirt
اللون: ${color}
المقاس: ${size}`;

  const phone = "213556372063"; // رقمك
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url);
}


