function calculateTriangle() {
    const sideA = parseFloat(document.getElementById('sideA').value);
    const sideB = parseFloat(document.getElementById('sideB').value);
    // Kiểm tra xem có thể tính toán không
    if (!isNaN(sideA) && !isNaN(sideB)) {
      const triangleParameters = calculateTriangleParameters(sideA, sideB);
      displayResult(triangleParameters);
    } else {
      alert('Vui lòng nhập giá trị hợp lệ cho cả hai cạnh.');
    }
  }
  function calculateTriangleParameters(sideA, sideB) {
    const hypotenuse = Math.sqrt(sideA**2 + sideB**2);
    const height = (sideA * sideB) / hypotenuse;
    const angleA = Math.atan(sideB / sideA) * (180 / Math.PI);
    const angleB = 90 - angleA;
    return {
      hypotenuse,
      height,
      angleA,
      angleB
    };
  }
  function displayResult(parameters) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
      <p><strong>Cạnh huyền:</strong> ${parameters.hypotenuse}</p>
      <p><strong>Đường cao:</strong> ${parameters.height}</p>
      <p><strong>Góc A:</strong> ${parameters.angleA}</p>
      <p><strong>Góc B:</strong> ${parameters.angleB}</p>
    `;
  }
  
  