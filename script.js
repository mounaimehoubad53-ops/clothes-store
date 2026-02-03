function order() {
  const color = document.getElementById("color").value;
  const size = document.getElementById("size").value;

  const message = `طلب جديد:
T-Shirt Minimal
اللون: ${color}
المقاس: ${size}`;

  const phone = "213XXXXXXXXX";
  window.open(
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
  );
}


