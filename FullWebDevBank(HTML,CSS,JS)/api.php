<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "bankdb";

// Create connection
$conn = new mysqli("localhost:3306", "root", "", "bankdb");

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle deposit operation
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['type']) && $_POST['type'] == 'deposit') {
    $amount = $_POST['amount'];
    $sql = "INSERT INTO accounts (account_number, account_holder, balance) VALUES ('123456', 'John Doe', $amount)";
    
    if ($conn->query($sql) === TRUE) {
        echo json_encode(['status' => 'success', 'message' => 'Deposit successful']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Error performing deposit']);
    }
}

// Your CRUD operations go here...

$conn->close();
?>
