<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modern Index Page</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: 'Inter', sans-serif;
            background: #f0f4f8;
            color: #333;
        }
        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            text-align: center;
        }
        .header {
            margin-bottom: 2rem;
        }
        .header h1 {
            font-size: 50px;
            font-weight: 700;
            color: #000000; /* Màu chữ đen */
            letter-spacing: -2px;
        }
        .section {
            display: flex;
            flex-wrap: wrap;
            gap: 2rem;
            justify-content: center;
        }
        .card {
            background: #ffffff;
            border-radius: 24px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            width: 300px;
            text-align: center;
            padding: 1.5rem;
            transition: transform 0.3s ease;
        }
        .card:hover {
            transform: translateY(-10px);
        }
        .card h2 {
            font-size: 20px;
            color: #000000; /* Màu chữ đen */
            margin-bottom: 0.5rem;
        }
        .card p {
            color: #000000; /* Màu chữ đen */
            margin-bottom: 1rem;
        }
        .card a {
            text-decoration: none;
            color: #ffffff;
            background-color: #000000; /* Màu nền chữ đen */
            padding: 0.5rem 1rem;
            border-radius: 12px;
            font-weight: 700;
            transition: background-color 0.3s ease;
        }
        .card a:hover {
            background-color: #333333; /* Màu nền khi hover */
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>My Modern Index</h1>
        </div>
        <div class="section">
            <div class="card">
                <h2>Contact Me</h2>
                <p>Have questions or want to get in touch? Feel free to reach out via email.</p>
                <a href="mailto:example@example.com">Email Me</a>
            </div>
            <div class="card">
                <h2>MyLabs on Gumroad</h2>
                <p>Check out my latest projects and tools on Gumroad.</p>
                <a href="https://gumroad.com">Visit Gumroad</a>
            </div>
            <div class="card">
                <h2>Follow Me on Twitter</h2>
                <p>Stay updated with my latest news and updates on Twitter.</p>
                <a href="https://twitter.com">Follow Me</a>
            </div>
        </div>
    </div>
</body>
</html>
