console.log('hello from the other side....')

$('#increment-button').click(() => onClick())
$('#reset-button').click(()=> onReset())

let donationTotalValue = parseInt($('#donation-total').html(), 10)

const onClick = () => {
  donationTotalValue = (donationTotalValue + 10)
  $('#donation-total').html(donationTotalValue)
}

const onReset = () => {
  donationTotalValue = 0;
  $('#donation-total').html(donationTotalValue)
}
