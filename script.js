function calculatePay() {
  const mileage = parseFloat(document.getElementById("mileage").value);
  if (isNaN(mileage) || mileage < 0) {
    document.getElementById("result").innerHTML =
      "Please enter a valid mileage.";
    return;
  }

  let totalRate = 0;

  if (mileage <= 15) {
    totalRate = 41.50;
  } else if (mileage <= 25) {
    totalRate = 41.50 + (mileage - 15) * 1.8;
  } else {
    totalRate = 41.50 + 10 * 1.8 + (mileage - 25) * 1.8;
  }

  const tripRate = totalRate * 0.87;

  document.getElementById("result").innerHTML = `
      <p><strong>Trip Rate:</strong> $${tripRate.toFixed(2)}</p>
    `;
}
