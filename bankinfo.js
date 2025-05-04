const bankDetails = [
    { label: 'Ngân Hàng :', value: 'MBBank' },
    { label: 'Tên Tài Khoản :', value: 'TRẦN THỊ THANH THẢO' },
    { label: 'Số Tài Khoản :', value: '900998686', id: 'accountNumber' }
  ];
  
  const bankInfoContainer = document.getElementById('bankInfo');
  
  bankDetails.forEach(({ label, value, id }) => {
    const row = document.createElement('div');
    row.className = 'flex items-center justify-start gap-3 mb-2 text-base';
  
    const labelSpan = document.createElement('span');
    labelSpan.className = 'font-semibold xl:w-[250px] w-[220px] text-right';
    labelSpan.textContent = label;
  
    const valueContainer = document.createElement('div');
    valueContainer.className = 'flex items-center gap-2 w-full';
  
    const valueSpan = document.createElement('span');
    valueSpan.className = 'text-gray-800 break-words';
    valueSpan.textContent = value;
    if (id) valueSpan.id = id;
  
    const copyBtn = document.createElement('img');
    copyBtn.src = './img/copy.png';
    copyBtn.alt = 'Copy';
    copyBtn.className = 'w-4 h-4 cursor-pointer opacity-70 hover:opacity-100 transition';
    copyBtn.onclick = () => {
      navigator.clipboard.writeText(value);
      copyBtn.src = './img/check-mark.png'; 
      setTimeout(() => {
        copyBtn.src = './img/copy.png';
      }, 1000);
    };
  
    valueContainer.appendChild(valueSpan);
    valueContainer.appendChild(copyBtn);
  
    row.appendChild(labelSpan);
    row.appendChild(valueContainer);
  
    bankInfoContainer.appendChild(row);
  });
  