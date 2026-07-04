(function () {
  var form = document.getElementById('reservationForm');
  var statusEl = document.getElementById('formStatus');
  var submitBtn = document.getElementById('submitBtn');
  var dateInput = document.getElementById('preferredDate');

  if (!form) return;

  if (dateInput) {
    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    dateInput.min = tomorrow.toISOString().split('T')[0];
  }

  function setStatus(message, type) {
    if (!statusEl) return;
    statusEl.textContent = message;
    statusEl.className = 'form-status' + (type ? ' is-' + type : '');
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    setStatus('');

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    var payload = {
      parent_name: document.getElementById('parentName').value.trim(),
      phone: document.getElementById('phone').value.trim(),
      student_grade: document.getElementById('studentGrade').value,
      preferred_date: document.getElementById('preferredDate').value,
      preferred_time: document.getElementById('preferredTime').value,
      message: document.getElementById('message').value.trim(),
      privacy_agree: document.getElementById('privacyAgree').checked
    };

    submitBtn.disabled = true;
    submitBtn.textContent = '접수 중...';
    setStatus('예약을 접수하고 있습니다...', 'loading');

    fetch('/api/reservation', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
      .then(function (res) {
        return res.json().then(function (data) {
          return { ok: res.ok, data: data };
        });
      })
      .then(function (result) {
        if (!result.data.ok) {
          throw new Error(result.data.error || '예약 접수에 실패했습니다.');
        }

        setStatus(result.data.message, result.data.warning ? 'warning' : 'success');
        form.reset();
        if (dateInput) {
          var nextDay = new Date();
          nextDay.setDate(nextDay.getDate() + 1);
          dateInput.min = nextDay.toISOString().split('T')[0];
        }
      })
      .catch(function (error) {
        if (error.message.indexOf('Failed to fetch') !== -1) {
          setStatus('온라인 예약 접수가 일시적으로 불가합니다. 전화(010-8253-5879)로 상담 예약을 부탁드립니다.', 'error');
        } else {
          setStatus(error.message, 'error');
        }
      })
      .finally(function () {
        submitBtn.disabled = false;
        submitBtn.textContent = '상담 예약 신청';
      });
  });
})();
