;define('controllers/Login', ['require'], (function (require) {
	
	var view;

	var doLogin = function(username, password){

		if(username.length < 3){

			view.showErrorMessage('Insert the username');
			return;

		}

		if(password.length < 3){

			view.showErrorMessage('Insert the password');
			return;		

		}

		$.ajax({
				  type: 'POST',
				  url: 'http://localhost/loginservice/login.php',
				  data: JSON.stringify({'username': username, 'password': password}),
				  success: function(result){

					var data = JSON.parse(result);					
					if(data.success == true ){

						view.succesfulLogin(true);

					}else{

						view.succesfulLogin(false);

					}

				}
					}
			);	

	};

	var doInit = function(){

		require(['views/LoginView'], function(v){

			view = v;

		});

	};

	return{

		login: doLogin,
		init: doInit

	}

}))