<!-- Name: Adebayo Ibrahim Adekunle
Matric No: RSG/22/9654 -->
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Palindrome Checker - Adebayo Ibrahim </title>
<style>
  body { font-family: Arial, sans-serif; background: #f0f0f0; padding: 50px; }
  .container { background: #fff; padding: 20px; border-radius: 10px; max-width: 500px; margin: auto; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
  input[type="text"] { width: 100%; padding: 8px; margin: 10px 0; border-radius: 5px; border: 1px solid #ccc; }
  input[type="submit"] { padding: 10px 15px; border: none; border-radius: 5px; background: #57a6ff; color: white; cursor: pointer; }
  input[type="submit"]:hover { background: #3b86e3; }
  .result { margin-top: 20px; padding: 10px; background: #eef; border-radius: 5px; }
  .palindrome { color: blue; font-weight: bold; }
</style>
</head>
<body>
<div class="container">
  <h2>Palindrome Checker</h2>
  <p>Name: <b>Adebayo Ibrahim Adekunle</b></p>
  <p>Matric No: <b>RSG/22/9654</b></p>

  <form method="post">
    <label>Word or phrase to check:</label>
    <input type="text" name="word" required>
    <input type="submit" value="Check">
  </form>

  <?php
  if ($_SERVER["REQUEST_METHOD"] === "POST") {
      $word = $_POST['word'];
      $cleaned = strtolower(preg_replace("/[^a-z0-9]/", "", $word));
      $reversed = strrev($cleaned);

      echo "<div class='result'>";
      if ($cleaned === $reversed) {
          echo "<p><strong>Palindrome:</strong> <span class='palindrome'>True</span></p>";
          echo "<p><strong>Explanation:</strong> The word/phrase <span class='palindrome'>$word</span> is a palindrome because it reads the same forwards and backwards (ignoring spaces, punctuation, and capitalization).</p>";
      } else {
          echo "<p><strong>Palindrome:</strong> False</p>";
          echo "<p><strong>Explanation:</strong> The word/phrase <b>$word</b> is NOT a palindrome because forward it is '<b>$cleaned</b>' but backward it is '<b>$reversed</b>'.</p>";
      }
      echo "</div>";
  }
  ?>
</div>
</body>
</html>
