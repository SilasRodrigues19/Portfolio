<html>

<head>
	<title>Processando e-mail...</title>
	<meta charset="utf-8">
	<link rel="shortcut icon" type="image/png" href="../assets/img/favicon-mail.ico">
	<!-- Animate CSS -->
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@4.0.0/animate.min.css">
	<!-- Sweet Alert CSS -->
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@sweetalert2/theme-dark@4/dark.css">
	<script src="https://cdn.jsdelivr.net/npm/sweetalert2@10/dist/sweetalert2.min.js"></script>
	<style>
		@import url(../assets/css/swal.css);

		body {
			background-image: url('https://cdn.pixabay.com/photo/2018/03/22/02/37/email-3249062_1280.png'), linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%);
			background-repeat: no-repeat;
			background-size: cover;
		}
	</style>
</head>

<body>

	<?php
	session_start();

	require_once('PHPMailer.php');
	require_once('SMTP.php');
	require_once('Exception.php');

	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\SMTP;
	use PHPMailer\PHPMailer\Exception;

	$nome = utf8_decode($_POST['nome']);
	$sobrenome = utf8_decode($_POST['sobrenome']);
	$email = $_POST['email'];
	$celular = $_POST['celular'];
	$mensagem = utf8_decode($_POST['mensagem']);

	$resultBtn = filter_input(INPUT_POST, 'btnSubmit', FILTER_SANITIZE_STRING);

	// If the form button was clicked
	if ($resultBtn) {
		$mail = new PHPMailer(true);

		try {
			// Server Settings
			//$mail->SMTPDebug = SMTP::DEBUG_SERVER; //verbose debug output
			$mail->isSMTP(); // To use SMTP
			$mail->Host = 'smtp.gmail.com'; // Change if u don't use Gmail
			$mail->SMTPAuth = true; // Authentication
			$mail->Username = 'example@gmail.com'; // Your e-mail address
			$mail->Password = '1e4c964f1026621f'; // Your pass - Generate this acessing the following URL -> https://myaccount.google.com/apppasswords
			$mail->Port = 587; // Gmail default port (TLS Encryption) or $mail->Port = 587; $mail->SMTPSecure = 'ssl'; (SSL Encryption)

			// Recipients
			$mail->setFrom('silasrodrigues.fatec@gmail.com'); // Name optional example ('example@gmail.com', 'Your Name');
			$mail->addAddress('silasrodrigues.fatec@gmail.com'); // Name optional example ('example@gmail.com', 'Your Name');
			$mail->addAddress('otherAdress.@domain.com'); // Name optional example ('example@domain.com', 'Your Name');

			// Access the following link to more information -> https://gist.github.com/SilasRodrigues19/95ffd9e355d723c857501faf2ee99b9c


			// Content
			$mail->isHTML(true); // Set HTML format
			$mail->Subject = 'Contato - Portfolio';
			$mail->Body = "<html><body><meta charset='utf-8'><table align='center' bgcolor='#EFEEEA' border='0' cellpadding='0' cellspacing='0' height='100%' width='100%' id='m_1274380306070959983bodyTable'> <tbody> <tr> <td align='center' valign='top' id='m_1274380306070959983bodyCell' style='padding-bottom:60px'> <span style='color:#ffe01b;display:none;font-size:0px;height:0px;width:0px'>Mensagem recebida!</span> <table align='center' border='0' cellpadding='0' cellspacing='0' width='100%'> <tbody> <tr> <td align='center' valign='top' bgcolor='#DC143C' style='background-color:#470ba9'> <table align='center' border='0' cellpadding='0' cellspacing='0' style='max-width:640px' width='100%'> <tbody> <tr> <td align='center' valign='top' style='padding:40px'> <a href='#' style='text-decoration:none' target='_blank'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Email_icon-black.svg/1200px-Email_icon-black.svg.png' width='60' style='border:0;color:#ffffff;font-family:'Helvetica Neue',Helvetica,Arial,Verdana,sans-serif;font-size:12px;font-weight:400;height:auto;letter-spacing:-1px;padding:0;margin:0;outline:none;text-align:center;text-decoration:none' class='CToWUd'></a> </td> </tr> <tr> <td style='background-color:#ffffff;padding-top:40px'>&nbsp;</td> </tr> </tbody> </table> </td> </tr> <tr> <td align='center' valign='top'> <table align='center' bgcolor='#FFFFFF' border='0' cellpadding='0' cellspacing='0' style='background-color:#ffffff;max-width:640px' width='100%'> <tbody> <tr> <td align='center' valign='top' bgcolor='#FFFFFF' style='padding-right:40px;padding-bottom:40px;padding-left:40px'> <h1 style='color:#241c15;font-family:Georgia,Times,'Times New Roman',serif;font-size:30px;font-style:normal;font-weight:400;line-height:42px;letter-spacing:normal;margin:0;padding:0;text-align:center'>Mensagem recebida do portfolio<br></h1></td> </tr> <tr> <td> <h3 style='color:#241c15;font-family:Georgia,Times,'Times New Roman',serif;font-size:12px;font-style:normal;letter-spacing:normal;margin:10px;padding:0;text-align:center'> <p style='color:#000; margin:12px;'><strong>Nome: </strong>$nome $sobrenome</p> <hr> <br> <p style='color:#000; margin:12px;'><strong>Email: </strong>$email</p> <hr> <br> <p style='color:#000; margin:12px;'><strong>Celular: </strong>$celular</p> <hr> <br> <p style='color:#000; margin:12px; height:100px'><strong>Mensagem: </strong>$mensagem</p> </h3> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </td> </tr> </tbody></table></body></html>";


			if ($mail->send()) {
	?>
				<script>
					Swal.fire({
						title: 'Bom trabalho!',
						icon: 'success',
						text: 'Seu email foi enviado com sucesso',
						showClass: {
							popup: 'animate__animated animate__fadeInDown'
						},
						hideClass: {
							popup: 'animate__animated animate__fadeOutUp'
						}
					});
					setTimeout(() => location.href = "../index.php", 5000);
				</script>
			<?php
			}
		} catch (Exception $e) {
			echo "Erro ao enviar a mensagem: {$mail->ErrorInfo}";
			?>
			<script>
				Swal.fire({
					title: 'Seu e-mail não foi enviado!',
					icon: 'error',
					text: 'Erro de autenticação, contate um administrador',
					showClass: {
						popup: 'animate__animated animate__fadeInDown'
					},
					hideClass: {
						popup: 'animate__animated animate__fadeOutUp'
					}
				});
				setTimeout(() => location.href = "../index.php", 5000);
			</script>
	<?php
		}
	} else {
		$_SESSION['msg'] = "<p id='warningMail' style='position:fixed; top: 90px; z-index:30; color:#000; text-transform:uppercase; border-radius:10px; animation:fadeInDown 4s;' class='alert alert-warning w-50 text-center'>Acesso negado<br> Preencha o formulário e clique em enviar ao invés de acessar via URL <br> <button id='warningMail_button' class='btn btn-outline-danger w-100'>Fechar</button></p>";
		header("Location: ../index.php");
	}

	?>

</body>

</html>