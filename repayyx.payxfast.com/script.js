new Vue({
  el: '#app',
  data() {
    return {
      amount: 1890, // Changed amount
      vpa: 'rajsingh888888@kotak', // Changed VPA
      name: 'Rajvant Singh', // Changed name
      paymentMethod: '',
      utr: '',
      showPopup: false,
      submittedUTRs: [],
    };
  },
  methods: {
    copy(text) {
      navigator.clipboard.writeText(text)
        .then(() => {
          this.$notify({ type: 'success', message: 'Copied to clipboard' });
        })
        .catch(err => {
          console.error('Failed to copy: ', err); // Changed to console.error
          this.$notify({ type: 'danger', message: 'Failed to copy' });
        });
    },
    submitUTR() {
      if (this.utr) {
        if (this.submittedUTRs.includes(this.utr)) {
          this.$notify({ type: 'danger', message: 'This UTR has already been used' });
          return;
        }

        // Simulate a delay for demonstration purposes
        setTimeout(() => {
          console.log('Submitted UTR:', this.utr);
          this.submittedUTRs.push(this.utr);
          this.showPopup = true;
        }, 1000);
      } else {
        this.$notify({
          type: 'danger',
          message: 'Please enter UTR number'
        });
      }
    },
    payFailed() {
      // Implement logic for handling failed payments
      console.log('Payment failed');
      this.$notify({
        type: 'danger',
        message: 'Payment failed'
      });
    },
    closePopup() {
      this.showPopup = false;
    }
  }
});
