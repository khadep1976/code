document.addEventListener('DOMContentLoaded', function () {
    // Function to handle deposit link click
    function handleDepositClick() {
        const depositAmount = prompt('Enter deposit amount:');
        if (depositAmount !== null && !isNaN(depositAmount) && parseFloat(depositAmount) > 0) {
            // Simulate deposit logic (update balance)
            updateBalance(parseFloat(depositAmount), 'Deposit');
            // Close the prompt
            closePrompt();
            // Perform actual deposit operation in the database using AJAX
        fetch('api.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `amount=${depositAmount}&type=deposit`, // Adjust as needed
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    
        }
         else {
            alert('Invalid deposit amount. Please enter a valid number.');
        }
    }

    // Function to handle withdraw link click
    function handleWithdrawClick() {
        const withdrawAmount = prompt('Enter withdrawal amount:');
        if (withdrawAmount !== null && !isNaN(withdrawAmount) && parseFloat(withdrawAmount) > 0) {
            // Simulate withdrawal logic (update balance)
            updateBalance(-parseFloat(withdrawAmount), 'Withdrawal');
            // Close the prompt
            closePrompt();
        } else {
            alert('Invalid withdrawal amount. Please enter a valid number.');
        }
    }

    // Function to handle available balance link click
    function handleBalanceClick() {
        // Simulate displaying available balance
        alert(`Available Balance: $${getBalance()}`);
    }

    // Function to handle audit link click
    function handleAuditClick() {
        // Simulate audit logic
        console.log('Performing audit. Displaying audit information.');
        // Add your actual audit logic here
    }

    // Function to update the balance (simulated server call)
    function updateBalance(amount, transactionType) {
        let currentBalance = parseFloat(localStorage.getItem('balance')) || 0;
        currentBalance += amount;
        localStorage.setItem('balance', currentBalance);
        alert(`${transactionType} successful. Updated Balance: $${currentBalance}`);
    }

    // Function to close the prompt
    function closePrompt() {
        document.activeElement.blur(); // Remove focus from the prompt
        window.setTimeout(() => window.close(), 0); // Close the prompt
    }

    // Function to get the current balance (simulated server call)
    function getBalance() {
        return parseFloat(localStorage.getItem('balance')) || 0;
    }

    // Get the deposit link element and attach a click event listener
    const depositLink = document.querySelector('a[href="#"]');
    depositLink.addEventListener('click', handleDepositClick);

    // Get the withdraw link element and attach a click event listener
    const withdrawLink = document.querySelector('a[href="#"]');
    withdrawLink.addEventListener('click', handleWithdrawClick);

    // Get the balance link element and attach a click event listener
    const balanceLink = document.querySelector('a[href="#"]');
    balanceLink.addEventListener('click', handleBalanceClick);

    // Get the audit link element and attach a click event listener
    const auditLink = document.querySelector('a[href="#"]');
    auditLink.addEventListener('click', handleAuditClick);
});
