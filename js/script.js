
				//variaveis para pegar tags do html
			    var tela = document.querySelector('canvas');
			    var pincel = tela.getContext('2d'); 
			    pincel.fillStyle = 'lightgray';
			    pincel.fillRect(0, 0, 600, 400);

			    //variaveis usadas para validar o movimento da bola
			    var x = 20;
			    var y = 20;

			    // códigos do teclado

			    var esquerda = 37;
			    var cima = 38;
			    var direita = 39;
			    var baixo = 40;

			    // taxa de incremento
			    var taxa = 10;

			    // funçao para criar a bola 
			    function desenhaCirculo(x, y, raio) {

			        pincel.fillStyle = 'blue';
			        pincel.beginPath();
			        pincel.arc(x, y, raio, 0, 2 * Math.PI);
			        pincel.fill();
			    }
			    // funçao para limpar a tela
			    function limpaTela() {

			        pincel.clearRect(0, 0, 600, 400);
			    }

			    //funcao para atualizar tela
			    function atualizaTela() {

			        limpaTela();			       
			        desenhaCirculo(x, y, 10);
			    }

			    // intervalo para chamar a funcao atualizaTela
			    setInterval(atualizaTela, 20);

			    // funcao que faz a movimentaçao da bola
			    function leDoTeclado(evento) {
			    	 if (event.keyCode == direita) {
			        	x = x + taxa;	
			        } else if (event.keyCode == esquerda) {
			        	x = x - taxa;
			        }
			        if (event.keyCode == cima) {
			        	y = y - taxa;
			        }else if (event.keyCode == baixo) {
			        	y = y + taxa;
			        }
			    }

			   document.onkeydown = leDoTeclado;