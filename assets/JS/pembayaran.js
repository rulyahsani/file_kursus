const radio_bank = document.getElementById('radio-bank');
const radio_another = document.getElementById('radio-another');
const payment_rules = document.getElementById('payment-rules');
const payment_rules2 = document.getElementById('payment-rules2')


radio_bank.addEventListener('click', function() {
	payment_rules.style.display = 'block';
	payment_rules2.style.display = 'none';
})
radio_another.addEventListener('click', function() {
	payment_rules2.style.display = 'block';
	payment_rules.style.display = 'none';
})